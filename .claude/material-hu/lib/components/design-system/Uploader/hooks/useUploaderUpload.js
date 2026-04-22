import { useEffect, useRef } from 'react';
import { abortAllUploads, abortUploadForFile, convertToLoadingFileCard, createSerialQueue, exceedsMaxFiles, getUploadedFiles, isAbortError, mergeCompletedUpload, } from '../utils';
/**
 * Upload orchestration for `Uploader`: parallel `uploadFunction` calls, serial merges into the
 * controlled list, per-file abort on remove, and abort-all on unmount.
 *
 * **Flow**
 *
 * 1. Drop → optional loading rows → N parallel `uploadFunction` calls (each with an `AbortSignal`).
 * 2. Completions merge via `enqueue` one at a time so `onChange` does not race.
 * 3. `latestFilesRef` tracks the latest list on every `commitFileList`, so late completions respect
 *    removals/cancels that happened before the next React render.
 * 4. On unmount: abort in-flight requests and prune `uploading` placeholder rows so only
 *    finished uploads remain in the parent list.
 */
export const useUploaderUpload = ({ files, onChange, uploadFunction, maxFiles, triggerOnChangeWhenUploading, onDropAccepted, fileCardProps, }) => {
    const latestFilesRef = useRef(files);
    const onChangeRef = useRef(onChange);
    const controllers = useRef(new Map());
    const enqueueRef = useRef(null);
    if (!enqueueRef.current) {
        enqueueRef.current = createSerialQueue();
    }
    const enqueue = enqueueRef.current;
    const usePlaceholders = !!triggerOnChangeWhenUploading;
    latestFilesRef.current = files;
    onChangeRef.current = onChange;
    useEffect(() => {
        return () => {
            abortAllUploads(controllers.current);
            const uploadedFiles = getUploadedFiles(latestFilesRef.current);
            commitFileList(uploadedFiles);
        };
    }, []);
    const commitFileList = (nextFiles) => {
        latestFilesRef.current = nextFiles;
        onChangeRef.current(nextFiles);
    };
    const uploadOneFile = async (file) => {
        const controller = new AbortController();
        controllers.current.set(file, controller);
        try {
            const completedFileCard = await uploadFunction(file, {
                signal: controller.signal,
            });
            await enqueue(() => {
                const nextFiles = mergeCompletedUpload(latestFilesRef.current, file, completedFileCard, usePlaceholders);
                if (nextFiles)
                    commitFileList(nextFiles);
            });
        }
        catch (error) {
            if (!isAbortError(error))
                throw error;
        }
        finally {
            controllers.current.delete(file);
        }
    };
    const handleDropAccepted = async (droppedFiles) => {
        if (exceedsMaxFiles(files.length + droppedFiles.length, maxFiles))
            return;
        if (usePlaceholders) {
            commitFileList([...files, ...droppedFiles.map(convertToLoadingFileCard)]);
        }
        await Promise.all(droppedFiles.map(uploadOneFile));
        onDropAccepted?.(droppedFiles);
    };
    const handleRemoveFile = (fileCard) => {
        if (fileCard.file)
            abortUploadForFile(controllers.current, fileCard.file);
        commitFileList(files.filter(f => f !== fileCard));
        fileCardProps?.onRemove?.(fileCard);
    };
    return { handleDropAccepted, handleRemoveFile };
};
