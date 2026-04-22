import { type EditorOptions, Extension } from '@tiptap/react';
import { type TextAreaSlotProps } from '../types';
export declare const EventHandler: Extension<any, any>;
type UseExtensionsOptions = {
    placeholder?: string;
    handlePaste?: any;
    handleDrop?: any;
    slotProps?: Partial<TextAreaSlotProps>;
};
declare const useExtensions: ({ placeholder, handlePaste, slotProps, }?: UseExtensionsOptions) => EditorOptions["extensions"];
export default useExtensions;
