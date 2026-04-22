import { Extension } from '@tiptap/core';
import '@tiptap/extension-text-style';
export type FontSizeOptions = {
    types: string[];
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}
declare const _default: Extension<FontSizeOptions, any>;
export default _default;
