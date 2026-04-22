import { type Editor } from '@tiptap/react';
import { type FileCardType } from '../../FileCard/types';
export type HandleImageDropOptions = {
    uploadImageFunction?: (file: File) => Promise<FileCardType>;
};
export type HandleVideoDropOptions = {
    uploadVideoFunction?: (file: File) => Promise<FileCardType>;
};
/**
 * Handles dropping multiple images into the editor
 * Inserts skeleton loaders for each image, then replaces them with actual images as they upload
 */
export declare const handleImageDrop: (currentEditor: Editor, files: File[], pos: number, options: HandleImageDropOptions) => Promise<void>;
/**
 * Handles dropping multiple videos into the editor
 * Inserts skeleton loaders for each video, then replaces them with actual videos as they upload
 */
export declare const handleVideoDrop: (currentEditor: Editor, files: File[], pos: number, options: HandleVideoDropOptions) => Promise<void>;
export declare const getMediaAttributes: (dom: HTMLElement) => {
    src: string | null;
    srcdoc: string | null;
    tag: string;
    width: string;
    textAlign: string;
} | null;
