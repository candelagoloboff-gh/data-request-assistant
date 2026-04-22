/** Opens binary data in a new browser tab as a blob URL. */
export const openFile = (data, type) => {
    const blobUrl = URL.createObjectURL(new Blob([data], { type }));
    window.open(blobUrl, '_blank', 'noreferrer');
    // Small delay to give the browser time to open the URL
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
};
/** Triggers a browser download for a File object. */
export const downloadFile = (file, filename) => {
    const blobUrl = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename ?? file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
};
/** Downloads a file from a URL, falling back to opening in a new tab on failure. */
export const downloadUrl = async (url, filename = 'download') => {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
    }
    catch {
        // Fallback
        window.open(url, '_blank', 'noreferrer');
    }
};
export var FileTypes;
(function (FileTypes) {
    FileTypes["IMAGE"] = "IMAGE";
    FileTypes["VIDEO"] = "VIDEO";
    FileTypes["FILE"] = "FILE";
})(FileTypes || (FileTypes = {}));
/** Determines the FileType (IMAGE, VIDEO, or FILE) from a MIME type string. */
export const getFileType = ({ type }) => {
    const fileType = type.split('/')[0].toUpperCase();
    return FileTypes[fileType] || FileTypes.FILE;
};
/** Extracts the file extension from a filename or path. */
export const getFileExtension = (str) => str?.slice(str?.lastIndexOf('.') + 1);
/** Creates an object URL from a Blob, or returns null if the blob is falsy. */
export const getBlobUrl = (blob) => {
    if (!blob)
        return null;
    return window.URL.createObjectURL(blob);
};
/** Extracts the file name from a URL, optionally including the extension. */
export const getFileName = (url, includeExtension = false) => {
    const urlObject = new URL(url);
    const { pathname } = urlObject;
    const parts = pathname.split('/');
    const fullFileName = parts[parts.length - 1];
    if (includeExtension)
        return fullFileName;
    return fullFileName.split('.')[0];
};
/** Fetches a URL and converts the response into a File object. */
export const urlToFile = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const name = getFileName(url, true);
    return new File([blob], name, { type: blob.type });
};
