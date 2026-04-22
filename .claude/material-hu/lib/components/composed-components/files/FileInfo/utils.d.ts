import { type FileInfoProps } from './types';
export declare const getFileInfo: (file?: FileInfoProps["file"]) => {
    name: string;
    size: string;
    extension: string;
};
