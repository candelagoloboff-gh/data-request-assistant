import { jsx as _jsx } from "react/jsx-runtime";
import Spinner from '../../../ProgressIndicators/Spinner';
import { Node, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
// Skeleton Loader Component for Image/Video Upload
const ImageLoaderComponent = ({ node }) => {
    const { imageLoaderId, width = 100, height = 100 } = node.attrs;
    return (_jsx(NodeViewWrapper, { "data-type": "image-loader", "data-image-loader-id": imageLoaderId, as: "span", style: {
            margin: '4px',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'middle',
            width: `${width}px`,
            height: `${height}px`,
        }, children: _jsx(Spinner, {}) }));
};
// Skeleton Loader Extension
const ImageLoader = Node.create({
    name: 'image-loader',
    group: 'inline',
    inline: true,
    atom: true,
    draggable: false,
    selectable: true,
    addAttributes() {
        return {
            imageLoaderId: { default: null },
            width: { default: 100 },
            height: { default: 100 },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'span[data-type="image-loader"]',
                getAttrs: (dom) => {
                    return {
                        imageLoaderId: dom.getAttribute('data-image-loader-id'),
                        width: parseInt(dom.style.width) || 100,
                        height: 100,
                    };
                },
            },
        ];
    },
    renderHTML({ node }) {
        const { width } = node.attrs;
        return [
            'span',
            {
                'data-type': 'image-loader',
                'data-image-loader-id': node.attrs.imageLoaderId,
                style: `display: inline-flex; width: ${width}px;`,
            },
        ];
    },
    addNodeView() {
        return ReactNodeViewRenderer(ImageLoaderComponent, {
            as: 'span',
        });
    },
});
export default ImageLoader;
