import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import { IconLink } from '@tabler/icons-react';
import { Node, NodeViewWrapper, ReactNodeViewRenderer, } from '@tiptap/react';
import { getMediaAttributes } from '../utils';
const ResizableInlineMediaComponent = ({ node, updateAttributes, editor, selected, }) => {
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
        let startWidth = 0;
        const onMouseDown = (mouseDownEvent) => {
            mouseDownEvent.preventDefault();
            mouseDownEvent.stopPropagation();
            startX = mouseDownEvent.clientX;
            startWidth = media.offsetWidth;
            media.style.pointerEvents = 'none';
            document.body.style.userSelect = 'none';
            wrapper.style.maxWidth = '100%';
            const controller = new AbortController();
            const { signal } = controller;
            const onMouseMove = (mouseMoveEvent) => {
                const newWidth = Math.max(50, startWidth + (mouseMoveEvent.clientX - startX));
                wrapper.style.width = editorWidth
                    ? `${(newWidth / editorWidth) * 100}%`
                    : '100%';
            };
            const onMouseUp = () => {
                media.style.pointerEvents = '';
                document.body.style.userSelect = '';
                updateAttributes({ width: wrapper.style.width });
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
    const { tag, src, srcdoc, width, textAlign, href, target } = node.attrs;
    const hasLink = !!href;
    const capturesClicks = tag === 'iframe' || tag === 'video';
    const handleClick = (e) => {
        e.preventDefault();
    };
    const handleLinkClick = (e) => {
        e.stopPropagation();
        if (href) {
            window.open(href, target || '_blank', 'noopener,noreferrer');
        }
    };
    return (_jsxs(NodeViewWrapper, { "data-type": "resizable-media", ref: wrapperRef, as: "span", onClick: handleClick, style: {
            display: 'inline-flex',
            verticalAlign: 'middle',
            width,
            textAlign: textAlign || 'inherit',
            position: 'relative',
        }, children: [React.createElement(tag, {
                ref: mediaRef,
                src,
                ...(tag === 'iframe' && srcdoc ? { srcDoc: srcdoc } : {}),
                controls: tag === 'video',
                allowFullScreen: tag === 'iframe',
                style: {
                    aspectRatio: tag === 'img' ? 'auto' : '16 / 9',
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    pointerEvents: capturesClicks && !selected ? 'none' : undefined,
                },
            }), hasLink && (_jsx(IconButton, { variant: "secondary", onClick: handleLinkClick, sx: {
                    position: 'absolute',
                    top: theme => theme.spacing(1),
                    right: theme => theme.spacing(1),
                    pointerEvents: 'auto',
                }, children: _jsx(IconLink, { size: 16 }) }))] }));
};
const ResizableInlineMedia = Node.create({
    name: 'resizable-media',
    group: 'block',
    atom: true,
    draggable: false,
    selectable: true,
    addAttributes() {
        return {
            src: { default: null },
            srcdoc: { default: null },
            tag: { default: 'img' },
            width: { default: 'auto' },
            href: { default: null },
            target: { default: null },
            rel: { default: null },
            textAlign: {
                default: 'inherit',
                parseHTML: element => element.style.textAlign || 'inherit',
                renderHTML: attributes => {
                    if (!attributes.textAlign || attributes.textAlign === 'inherit') {
                        return {};
                    }
                    return {
                        style: `text-align: ${attributes.textAlign};`,
                    };
                },
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'a[data-type="resizable-media"]',
                priority: 100,
                getAttrs: (dom) => {
                    const attrs = getMediaAttributes(dom);
                    if (!attrs)
                        return false;
                    const isIframe = attrs.tag === 'iframe';
                    const textAlign = dom.style.textAlign || attrs.textAlign || 'inherit';
                    return {
                        ...attrs,
                        textAlign,
                        href: dom.getAttribute('href'),
                        target: dom.getAttribute('target'),
                        rel: dom.getAttribute('rel'),
                        width: isIframe && attrs.width === 'auto' ? '100%' : attrs.width,
                        controls: attrs.tag === 'video',
                        allowFullScreen: attrs.tag === 'iframe',
                    };
                },
            },
            {
                tag: 'span[data-type="resizable-media"]',
                priority: 100,
                getAttrs: (dom) => {
                    const attrs = getMediaAttributes(dom);
                    if (!attrs)
                        return false;
                    const isIframe = attrs.tag === 'iframe';
                    return {
                        ...attrs,
                        width: isIframe && attrs.width === 'auto' ? '100%' : attrs.width,
                        controls: attrs.tag === 'video',
                        allowFullScreen: attrs.tag === 'iframe',
                    };
                },
            },
            {
                tag: 'div[data-type="resizable-media"]',
                priority: 100,
                getAttrs: (dom) => {
                    const attrs = getMediaAttributes(dom);
                    if (!attrs)
                        return false;
                    const isIframe = attrs.tag === 'iframe';
                    return {
                        ...attrs,
                        width: isIframe && attrs.width === 'auto' ? '100%' : attrs.width,
                        controls: attrs.tag === 'video',
                        allowFullScreen: attrs.tag === 'iframe',
                    };
                },
            },
        ];
    },
    renderHTML({ node }) {
        const { tag, width, textAlign, style, href, target, rel, ...attrs } = node.attrs;
        const hasLink = !!href;
        const innerContent = [
            'span',
            {
                style: `display: inline-block; width: ${width};`,
            },
            [tag, attrs],
        ];
        const wrapperTag = hasLink ? 'a' : 'span';
        const wrapperAttrs = {
            'data-type': 'resizable-media',
            style: `display: block; ${textAlign ? `text-align: ${textAlign};` : ''}; max-width: 100%;`,
        };
        if (hasLink) {
            wrapperAttrs.href = href;
            wrapperAttrs.target = target || '_blank';
            wrapperAttrs.rel = rel || 'noopener noreferrer nofollow';
        }
        return [wrapperTag, wrapperAttrs, innerContent];
    },
    addNodeView() {
        return ReactNodeViewRenderer(ResizableInlineMediaComponent, {
            as: 'span',
            attrs: ({ node }) => {
                const { textAlign } = node.attrs;
                return {
                    style: `-webkit-user-drag: none; user-drag: none; margin-bottom: 1rem; display: block; ${textAlign ? `text-align: ${textAlign};` : ''}`,
                };
            },
        });
    },
});
export default ResizableInlineMedia;
