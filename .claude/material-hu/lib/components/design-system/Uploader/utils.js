/**
 * Returns true when `count` exceeds the optional `maxFiles` limit.
 * If `maxFiles` is undefined, there is no limit and this returns false.
 */
export const exceedsMaxFiles = (count, maxFiles) => !!maxFiles && count > maxFiles;
/**
 * Serial queue: each enqueued task waits for the previous one to finish.
 * If a task fails, subsequent tasks still run — but the caller gets the rejection.
 */
export const createSerialQueue = () => {
    let lastTask = Promise.resolve();
    return (task) => {
        const result = lastTask.then(task);
        lastTask = result.catch(() => undefined);
        return result;
    };
};
/**
 * Filters out rows with `status: 'uploading'` (skeleton rows while an upload is in flight).
 */
export const getUploadedFiles = (fileCards) => fileCards.filter(fc => fc.status !== 'uploading');
/**
 * Builds a `FileCardType` used as a placeholder before the upload resolves.
 */
export const convertToLoadingFileCard = (file) => ({
    file,
    status: 'uploading',
});
/**
 * Returns true when `error` represents an `AbortError` from `fetch` / `AbortController`.
 */
export const isAbortError = (error) => {
    if (error instanceof DOMException)
        return error.name === 'AbortError';
    if (error instanceof Error)
        return error.name === 'AbortError';
    return false;
};
/**
 * Builds the next file list after a single upload completes.
 *
 * Without placeholders: appends the result.
 * With placeholders: swaps the loading row for the finished one.
 * Returns `null` if the placeholder was already removed (e.g. user deleted it mid-upload).
 */
export const mergeCompletedUpload = (files, originalFile, completedFileCard, replacePlaceholder) => {
    if (!replacePlaceholder)
        return [...files, completedFileCard];
    const placeholderIndex = files.findIndex(fc => fc.file === originalFile && fc.status === 'uploading');
    if (placeholderIndex === -1)
        return null;
    const updated = [...files];
    updated[placeholderIndex] = completedFileCard;
    return updated;
};
/**
 * Aborts every registered `AbortController` and clears the map.
 */
export const abortAllUploads = (controllers) => {
    for (const c of controllers.values())
        c.abort();
    controllers.clear();
};
/**
 * Aborts the upload tied to `file` (if any) and removes its controller from the map.
 */
export const abortUploadForFile = (controllers, file) => {
    const controller = controllers.get(file);
    if (!controller)
        return;
    controller.abort();
    controllers.delete(file);
};
