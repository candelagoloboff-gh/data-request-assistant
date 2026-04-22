/** Opens binary data in a new browser tab as a blob URL. */
export declare const openFile: (data: BlobPart, type?: string) => void;
/** Triggers a browser download for a File object. */
export declare const downloadFile: (file: File, filename?: string) => void;
/** Downloads a file from a URL, falling back to opening in a new tab on failure. */
export declare const downloadUrl: (url: string, filename?: string) => Promise<void>;
export declare enum FileTypes {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE"
}
/** Determines the FileType (IMAGE, VIDEO, or FILE) from a MIME type string. */
export declare const getFileType: ({ type }: {
    type: string;
}) => FileTypes;
/** Extracts the file extension from a filename or path. */
export declare const getFileExtension: (str: string) => string;
/** Creates an object URL from a Blob, or returns null if the blob is falsy. */
export declare const getBlobUrl: (blob: Blob) => string | null;
/** Extracts the file name from a URL, optionally including the extension. */
export declare const getFileName: (url: string, includeExtension?: boolean) => string;
/** Fetches a URL and converts the response into a File object. */
export declare const urlToFile: (url: string) => Promise<File>;
