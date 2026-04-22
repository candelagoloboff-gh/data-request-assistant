import { type FileCardType } from '../FileCard/types';
/**
 * Returns true when `count` exceeds the optional `maxFiles` limit.
 * If `maxFiles` is undefined, there is no limit and this returns false.
 */
export declare const exceedsMaxFiles: (count: number, maxFiles: number | undefined) => boolean;
/**
 * Serial queue: each enqueued task waits for the previous one to finish.
 * If a task fails, subsequent tasks still run — but the caller gets the rejection.
 */
export declare const createSerialQueue: () => (task: () => void) => Promise<void>;
/**
 * Filters out rows with `status: 'uploading'` (skeleton rows while an upload is in flight).
 */
export declare const getUploadedFiles: (fileCards: FileCardType[]) => FileCardType[];
/**
 * Builds a `FileCardType` used as a placeholder before the upload resolves.
 */
export declare const convertToLoadingFileCard: (file: File) => FileCardType;
/**
 * Returns true when `error` represents an `AbortError` from `fetch` / `AbortController`.
 */
export declare const isAbortError: (error: unknown) => boolean;
/**
 * Builds the next file list after a single upload completes.
 *
 * Without placeholders: appends the result.
 * With placeholders: swaps the loading row for the finished one.
 * Returns `null` if the placeholder was already removed (e.g. user deleted it mid-upload).
 */
export declare const mergeCompletedUpload: (files: FileCardType[], originalFile: File, completedFileCard: FileCardType, replacePlaceholder: boolean) => FileCardType[] | null;
/**
 * Aborts every registered `AbortController` and clears the map.
 */
export declare const abortAllUploads: (controllers: Map<File, AbortController>) => void;
/**
 * Aborts the upload tied to `file` (if any) and removes its controller from the map.
 */
export declare const abortUploadForFile: (controllers: Map<File, AbortController>, file: File) => void;
