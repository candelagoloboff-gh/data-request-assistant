import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
// Helper function to create a file with id that preserves all File properties
const createFileWithId = (file, id) => {
    return Object.assign(file, { id });
};
// Normalize detection of abort/cancel errors across fetch and axios
const isAbortLikeError = (error) => {
    if (!error)
        return false;
    if (error instanceof Error) {
        if (error.name === 'AbortError' || error.name === 'CanceledError') {
            return true;
        }
    }
    if (typeof error === 'object' && error?.code === 'ERR_CANCELED') {
        return true;
    }
    if (typeof error === 'object' && error?.__CANCEL__ === true) {
        return true;
    }
    return false;
};
/**
 * Custom hook for handling file uploads
 * @param signedUploadFn The function to use for uploading files
 * @param options Configuration options
 * @returns Object containing upload function and state information
 */
const useFileAssetUploader = (signedUploadFn, options) => {
    const { t } = useTranslation('material_hu_only');
    const [fileStates, setFileStates] = useState({});
    // Each file upload has its own AbortController -> allows aborting a single file upload by id
    const abortControllersRef = useRef(new Map());
    const { mutate, isLoading, reset: resetMutation, } = useMutation(async (payload) => {
        const { files: filesToUpload, options: uploadOptions } = payload;
        // Update all files to loading state
        setFileStates(prevState => {
            const newState = { ...prevState };
            filesToUpload.forEach(({ id, file }) => {
                // Create a new AbortController for each file
                const controller = new AbortController();
                abortControllersRef.current.set(id, controller);
                newState[id] = {
                    id,
                    file,
                    status: 'loading',
                };
            });
            return newState;
        });
        const results = await Promise.allSettled(filesToUpload.map(async ({ id, file }) => {
            try {
                // Get the AbortController for this file
                const controller = abortControllersRef.current.get(id);
                const effectiveOptions = {
                    ...uploadOptions,
                    ...(controller && { signal: controller.signal }),
                };
                const result = await signedUploadFn(file, effectiveOptions);
                // Clean up controller after success
                abortControllersRef.current.delete(id);
                // Update individual file state to success
                setFileStates(prevState => {
                    if (prevState[id]?.status === 'aborted')
                        return prevState;
                    return {
                        ...prevState,
                        [id]: {
                            ...prevState[id],
                            status: 'success',
                            result,
                        },
                    };
                });
                return { id, result };
            }
            catch (error) {
                // Clean up controller after error or abort
                abortControllersRef.current.delete(id);
                // If the upload was aborted, don't treat it as an error
                if (isAbortLikeError(error)) {
                    setFileStates(prevState => ({
                        ...prevState,
                        [id]: {
                            ...prevState[id],
                            status: 'aborted',
                        },
                    }));
                    return { id, aborted: true };
                }
                // Update individual file state to error
                setFileStates(prevState => {
                    if (prevState[id]?.status === 'aborted')
                        return prevState;
                    return {
                        ...prevState,
                        [id]: {
                            ...prevState[id],
                            status: 'error',
                            error,
                        },
                    };
                });
                throw error;
            }
        }));
        // Process results
        const successResults = results
            .filter(r => r.status === 'fulfilled' && !r.value.aborted)
            .map(r => r
            .value.result);
        const errorResults = results
            .filter(r => r.status === 'rejected')
            .map(r => r.reason);
        if (errorResults.length > 0) {
            throw new Error(t('file_asset_uploader.failed_to_upload', {
                count: errorResults.length,
            }));
        }
        return successResults;
    }, {
        onSuccess: results => {
            options?.onSuccess?.(results);
        },
        onError: err => {
            options?.onError?.(err);
        },
        onSettled: () => {
            options?.onSettled?.();
        },
    });
    const uploadFiles = (files, uploadOptions) => {
        const filesToUpload = files.map(file => ({
            id: crypto.randomUUID(),
            file,
        }));
        mutate({ files: filesToUpload, options: uploadOptions });
        // Return the mapping so users know which ID corresponds to which file
        return filesToUpload;
    };
    const stopUploads = () => {
        // Abort all controllers
        const idsToAbort = Array.from(abortControllersRef.current.keys());
        abortControllersRef.current.forEach(controller => {
            controller.abort();
        });
        // Optimistically mark as aborted
        if (idsToAbort.length > 0) {
            setFileStates(prevState => {
                const newState = { ...prevState };
                idsToAbort.forEach(id => {
                    if (newState[id]) {
                        newState[id] = { ...newState[id], status: 'aborted' };
                    }
                });
                return newState;
            });
        }
        // Clear the map
        abortControllersRef.current.clear();
    };
    const stopUpload = (fileId) => {
        // Abort only specific file upload
        const controller = abortControllersRef.current.get(fileId);
        if (controller) {
            controller.abort();
            abortControllersRef.current.delete(fileId);
        }
        // Optimistically mark as aborted
        setFileStates(prevState => {
            if (!prevState[fileId])
                return prevState;
            return {
                ...prevState,
                [fileId]: {
                    ...prevState[fileId],
                    status: 'aborted',
                },
            };
        });
    };
    const resumeUploads = (uploadOptions) => {
        const abortedFiles = Object.values(fileStates)
            .filter(state => state.status === 'aborted')
            .map(state => ({ id: state.id, file: state.file }));
        if (abortedFiles.length > 0) {
            mutate({ files: abortedFiles, options: uploadOptions });
        }
    };
    const resumeUpload = (fileId, uploadOptions) => {
        const fileState = fileStates[fileId];
        if (fileState && fileState.status === 'aborted') {
            mutate({
                files: [{ id: fileId, file: fileState.file }],
                options: uploadOptions,
            });
        }
    };
    const retryFailedUploads = (uploadOptions) => {
        const failedFiles = Object.values(fileStates)
            .filter(state => state.status === 'error')
            .map(state => ({ id: state.id, file: state.file }));
        if (failedFiles.length > 0) {
            mutate({ files: failedFiles, options: uploadOptions });
        }
    };
    const retryUpload = (fileId, uploadOptions) => {
        const fileState = fileStates[fileId];
        if (fileState && fileState.status === 'error') {
            mutate({
                files: [{ id: fileId, file: fileState.file }],
                options: uploadOptions,
            });
        }
    };
    const reset = () => {
        // Abort all uploads in progress
        stopUploads();
        setFileStates({});
        resetMutation();
    };
    const loadingFiles = Object.values(fileStates)
        .filter(state => state.status === 'loading')
        .map(state => createFileWithId(state.file, state.id));
    const abortedFiles = Object.values(fileStates)
        .filter(state => state.status === 'aborted')
        .map(state => createFileWithId(state.file, state.id));
    const hasError = Object.values(fileStates).some(state => state.status === 'error');
    const hasAborted = Object.values(fileStates).some(state => state.status === 'aborted');
    return {
        uploadFiles,
        retryFailedUploads,
        retryUpload,
        stopUploads,
        stopUpload,
        resumeUploads,
        resumeUpload,
        isLoading,
        loadingFiles,
        abortedFiles,
        fileStates,
        error: hasError,
        hasAborted,
        reset,
    };
};
export { useFileAssetUploader };
