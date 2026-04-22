import { Extension } from '@tiptap/core';
type IndentOptions = {
    /**
     * @default ["paragraph", "heading"]
     */
    types: string[];
    /**
     * Amount of margin to increase and decrease the indent
     *
     * @default 40
     */
    margin: number;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            indent: () => ReturnType;
            outdent: () => ReturnType;
        };
    }
}
declare const _default: Extension<IndentOptions, any>;
export default _default;
