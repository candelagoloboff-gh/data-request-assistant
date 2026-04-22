import { type ClipboardEvent } from 'react';
import { type Attachment, type FileAsset, type FormFile } from '../types/attachments';
/** Checks whether a clipboard event contains a file to paste. */
export declare const isFileToPaste: (event: ClipboardEvent<HTMLInputElement>) => boolean;
/** Converts a FileAsset into an Attachment object. */
export declare const getAttachmentFromFileAsset: (file: FileAsset) => Attachment;
/** Reads the width and height of an image File or Blob. */
export declare const getDimensions: (file: File | Blob | null) => Promise<{
    width: number;
    height: number;
}>;
/** Extracts width, height, and duration metadata from a video File. */
export declare const getVideoMetadata: (file: File) => Promise<{
    width: number;
    height: number;
    durationInMs: number;
}>;
/** Processes a File into a FormFile, detecting type and extracting dimensions when applicable. */
export declare const processFile: (file: File) => Promise<FormFile>;
/** Splits a filename into its name and extension parts. */
export declare const splitFileName: (str: string) => {
    name: string;
    extension: string;
};
