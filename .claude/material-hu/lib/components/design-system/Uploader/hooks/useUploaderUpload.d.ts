import { type FileCardType } from '../../FileCard/types';
import { type UploaderProps } from '../types';
type UseUploaderUploadParams = Pick<UploaderProps, 'uploadFunction' | 'maxFiles' | 'triggerOnChangeWhenUploading' | 'onDropAccepted' | 'fileCardProps'> & {
    files: FileCardType[];
    onChange: UploaderProps['onChange'];
};
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
export declare const useUploaderUpload: ({ files, onChange, uploadFunction, maxFiles, triggerOnChangeWhenUploading, onDropAccepted, fileCardProps, }: UseUploaderUploadParams) => {
    handleDropAccepted: (droppedFiles: File[]) => Promise<void>;
    handleRemoveFile: (fileCard: FileCardType) => void;
};
export {};
