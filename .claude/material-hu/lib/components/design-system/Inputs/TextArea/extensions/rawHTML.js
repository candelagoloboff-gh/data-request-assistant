import { jsx as _jsx } from "react/jsx-runtime";
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: HTML is sanitized via DOMPurify in transformers.ts */
import React, { useEffect, useRef } from 'react';
import { Node, NodeViewWrapper, ReactNodeViewRenderer, } from '@tiptap/react';
const RawHTMLComponent = ({ node, updateAttributes, editor, selected, }) => {
    const { html, width, height, textAlign } = node.attrs;
    const wrapperRef = useRef(null);
    const mediaRef = useRef(null);
    const editorWidth = editor.view.dom.parentElement?.clientWidth;
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const media = mediaRef.current;
        if (!wrapper || !media)
            return;
        const resizer = document.createElement('span');
        resizer.classList.add('resizer');
        wrapper.appendChild(resizer);
        let startX = 0;
        let startY = 0;
        let startWidth = 0;
        let startHeight = 0;
        const onMouseDown = (mouseDownEvent) => {
            mouseDownEvent.preventDefault();
            mouseDownEvent.stopPropagation();
            startX = mouseDownEvent.clientX;
            startY = mouseDownEvent.clientY;
            startWidth = media.offsetWidth;
            startHeight = media.offsetHeight;
            media.style.pointerEvents = 'none';
            document.body.style.userSelect = 'none';
            wrapper.style.maxWidth = '100%';
            const controller = new AbortController();
            const { signal } = controller;
            const onMouseMove = (mouseMoveEvent) => {
                const newWidth = Math.max(50, startWidth + (mouseMoveEvent.clientX - startX));
                const newHeight = Math.max(50, startHeight + (mouseMoveEvent.clientY - startY));
                wrapper.style.width = editorWidth
                    ? `${(newWidth / editorWidth) * 100}%`
                    : '100%';
                wrapper.style.height = `${newHeight}px`;
            };
            const onMouseUp = () => {
                media.style.pointerEvents = '';
                document.body.style.userSelect = '';
                updateAttributes({
                    width: wrapper.style.width,
                    height: wrapper.style.height,
                });
                controller.abort();
            };
            document.addEventListener('mousemove', onMouseMove, {
                signal,
                passive: true,
            });
            document.addEventListener('mouseup', onMouseUp, {
                signal,
                passive: true,
            });
        };
        resizer.addEventListener('mousedown', onMouseDown);
        return () => {
            resizer.removeEventListener('mousedown', onMouseDown);
            wrapper.removeChild(resizer);
        };
    }, [updateAttributes, editorWidth]);
    useEffect(() => {
        const media = mediaRef.current;
        if (!media)
            return;
        const elements = media.querySelectorAll('iframe, video');
        elements.forEach(el => {
            el.style.pointerEvents = selected ? '' : 'none';
        });
    }, [selected]);
    return (_jsx(NodeViewWrapper, { ref: wrapperRef, as: "div", "data-type": "raw-html", style: {
            margin: '1rem 0',
            display: 'inline-flex',
            verticalAlign: 'middle',
            width: width ?? '100%',
            height: height ?? 'fit-content',
            textAlign: textAlign || 'inherit',
        }, children: React.createElement('div', {
            dangerouslySetInnerHTML: { __html: html },
            ref: mediaRef,
            style: {
                maxWidth: '100%',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            },
        }) }));
};
const RawHTML = Node.create({
    name: 'raw-html',
    group: 'block',
    atom: true,
    draggable: false,
    selectable: true,
    addAttributes() {
        return {
            html: {
                default: '',
                parseHTML: (element) => element.innerHTML,
                renderHTML: () => ({}),
            },
            width: { default: '100%' },
            height: { default: null },
            textAlign: { default: 'inherit' },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'div[data-type="raw-html"]',
                getAttrs: (dom) => ({
                    width: dom.style.width || '100%',
                    height: dom.style.height || null,
                    textAlign: dom.style.textAlign || 'inherit',
                }),
            },
        ];
    },
    renderHTML({ node }) {
        const { html, width, height, textAlign } = node.attrs;
        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-type', 'raw-html');
        wrapper.style.cssText = `display: block; margin: 1rem 0; width: ${width}; max-width: 100%;${height ? ` height: ${height}; overflow: hidden;` : ''}${textAlign ? ` text-align: ${textAlign};` : ''}`;
        wrapper.innerHTML = html;
        return wrapper;
    },
    addNodeView() {
        return ReactNodeViewRenderer(RawHTMLComponent, {
            as: 'div',
            attrs: ({ node }) => {
                const { textAlign } = node.attrs;
                return {
                    style: `-webkit-user-drag: none; user-drag: none; margin-bottom: 1rem; display: block; ${textAlign ? `text-align: ${textAlign};` : ''}`,
                };
            },
        });
    },
});
export default RawHTML;
