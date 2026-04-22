import { type FileAsset } from '../../types/attachments';
export type FileUploadState = {
    id: string;
    file: File;
    status: 'loading' | 'success' | 'error' | 'aborted';
    error?: any;
    result?: FileAsset;
};
export type UseFileUploadOptions = {
    onSuccess?: (files: FileAsset[]) => void;
    onError?: (error: any) => void;
    onSettled?: () => void;
};
export type FileUploadOptions = {
    isPublic?: boolean;
    shouldCompress?: boolean;
    [key: string]: any;
};
export type FileUploadMapping = {
    id: string;
    file: File;
};
/**
 * Custom hook for handling file uploads
 * @param signedUploadFn The function to use for uploading files
 * @param options Configuration options
 * @returns Object containing upload function and state information
 */
declare const useFileAssetUploader: (signedUploadFn: (file: File, options?: FileUploadOptions) => Promise<FileAsset>, options?: UseFileUploadOptions) => {
    uploadFiles: (files: File[], uploadOptions?: FileUploadOptions) => FileUploadMapping[];
    retryFailedUploads: (uploadOptions?: FileUploadOptions) => void;
    retryUpload: (fileId: string, uploadOptions?: FileUploadOptions) => void;
    stopUploads: () => void;
    stopUpload: (fileId: string) => void;
    resumeUploads: (uploadOptions?: FileUploadOptions) => void;
    resumeUpload: (fileId: string, uploadOptions?: FileUploadOptions) => void;
    isLoading: boolean;
    loadingFiles: (File & {
        id: string;
    })[];
    abortedFiles: (File & {
        id: string;
    })[];
    fileStates: Record<string, FileUploadState>;
    error: boolean;
    hasAborted: boolean;
    reset: () => void;
};
export { useFileAssetUploader };
