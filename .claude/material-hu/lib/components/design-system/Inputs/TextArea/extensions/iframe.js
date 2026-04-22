/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Node } from '@tiptap/core';
export default Node.create({
    name: 'iframe',
    group: 'block',
    atom: true,
    addOptions() {
        return {
            allowFullscreen: true,
            HTMLAttributes: {
                class: 'iframe-wrapper',
            },
        };
    },
    addAttributes() {
        return {
            src: {
                default: null,
            },
            srcdoc: {
                default: null,
            },
            frameborder: {
                default: 0,
            },
            allowfullscreen: {
                default: this.options.allowFullscreen,
                parseHTML: () => this.options.allowFullscreen,
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'iframe',
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['div', this.options.HTMLAttributes, ['iframe', HTMLAttributes]];
    },
    addCommands() {
        return {
            setIframe: (options) => ({ commands }) => commands.insertContent([
                {
                    type: 'resizable-media',
                    attrs: {
                        allowfullscreen: 'true',
                        tag: 'iframe',
                        src: options.src,
                        srcdoc: options.srcdoc,
                    },
                },
                { type: 'paragraph' },
            ]),
        };
    },
});
