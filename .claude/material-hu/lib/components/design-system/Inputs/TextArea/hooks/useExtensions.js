import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Emoji from '@tiptap/extension-emoji';
import FileHandler from '@tiptap/extension-file-handler';
import Highlight from '@tiptap/extension-highlight';
import { Image } from '@tiptap/extension-image';
import { TableKit } from '@tiptap/extension-table';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { CharacterCount, Placeholder } from '@tiptap/extensions';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Extension } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { isFileToPaste } from '../../../../../utils/attachments';
import Iframe from '../extensions/iframe';
import ImageLoader from '../extensions/imageLoader';
import Indent from '../extensions/indent';
import RawHTML from '../extensions/rawHTML';
import ResizableInlineMedia from '../extensions/resizableMedia';
import Video from '../extensions/video';
import { handleImageDrop, handleVideoDrop } from '../utils';
export const EventHandler = Extension.create({
    name: 'eventHandler',
    addOptions() {
        return {
            handlePaste: null,
        };
    },
    addProseMirrorPlugins() {
        const { handlePaste } = this.options;
        return [
            new Plugin({
                key: new PluginKey('eventHandler'),
                props: {
                    handlePaste(_, event) {
                        if (!isFileToPaste(event))
                            return false;
                        if (!handlePaste)
                            return false;
                        return handlePaste(event);
                    },
                },
            }),
        ];
    },
});
const useExtensions = ({ placeholder, handlePaste, slotProps, } = {}) => {
    const theme = useTheme();
    const uploadImageFunction = slotProps?.insertImage?.uploaderProps?.uploadFunction;
    const uploadVideoFunction = slotProps?.uploadVideo?.uploaderProps?.uploadFunction;
    return useMemo(() => {
        return [
            StarterKit.configure({
                horizontalRule: false,
                undoRedo: {
                    depth: 1,
                },
                heading: {
                    levels: [1, 2, 3, 4],
                },
                link: {
                    openOnClick: false,
                    autolink: true,
                    linkOnPaste: true,
                    defaultProtocol: 'https',
                },
                dropcursor: {
                    color: theme.palette.new.action.button.background.primary.default,
                    width: 4,
                },
            }),
            Emoji,
            CharacterCount.configure({
                limit: 10000,
            }),
            Placeholder.configure({
                placeholder,
            }),
            TextAlign.configure({
                types: [
                    'heading',
                    'paragraph',
                    'image',
                    'video',
                    'iframe',
                    'div',
                    'resizable-media',
                    'raw-html',
                    'tableCell',
                ],
            }),
            Indent.configure({
                margin: 20,
            }),
            TextStyleKit,
            Highlight.configure({
                multicolor: true,
            }),
            Image.configure({
                inline: false,
            }),
            Video,
            Iframe,
            TableKit.configure({
                table: {
                    resizable: true,
                    renderWrapper: true,
                },
            }),
            EventHandler.configure({
                handlePaste, // Pass the handlePaste function to the EventHandler
            }),
            ResizableInlineMedia,
            ImageLoader,
            RawHTML,
            FileHandler.configure({
                allowedMimeTypes: [
                    'image/png',
                    'image/jpeg',
                    'image/gif',
                    'image/webp',
                    'video/mp4',
                    'video/webm',
                    'video/ogg',
                    'video/quicktime',
                    'video/mov',
                ],
                onDrop: async (currentEditor, files, pos) => {
                    const images = files.filter(file => file.type.includes('image'));
                    const videos = files.filter(file => file.type.includes('video'));
                    let currentPos = pos;
                    if (images.length > 0) {
                        await handleImageDrop(currentEditor, images, currentPos, {
                            uploadImageFunction,
                        });
                        currentPos += images.length;
                    }
                    if (videos.length > 0) {
                        await handleVideoDrop(currentEditor, videos, currentPos, {
                            uploadVideoFunction,
                        });
                    }
                },
                onPaste: async (currentEditor, files, htmlContent) => {
                    if (htmlContent && files.length === 0) {
                        return false;
                    }
                    const images = files.filter(file => file.type.includes('image'));
                    const videos = files.filter(file => file.type.includes('video'));
                    const pos = currentEditor.state.selection.anchor;
                    let currentPos = pos;
                    if (images.length > 0) {
                        await handleImageDrop(currentEditor, images, currentPos, {
                            uploadImageFunction,
                        });
                        currentPos += images.length;
                    }
                    if (videos.length > 0) {
                        await handleVideoDrop(currentEditor, videos, currentPos, {
                            uploadVideoFunction,
                        });
                    }
                },
            }),
            // TODO: Add in the future.
            // Mention.configure({
            //   HTMLAttributes: {
            //     class: 'mention',
            //   },
            //   suggestion: mentionOptions,
            //   renderHTML({ options, node }) {
            //     return [
            //       'a',
            //       mergeAttributes(
            //         {
            //           href: getProfileDetailHref(node.attrs.id),
            //         },
            //         options.HTMLAttributes,
            //       ),
            //       `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`,
            //     ];
            //   },
            // }),
        ];
    }, [
        placeholder,
        handlePaste,
        theme.palette.new.action.button.background.primary.default,
        uploadImageFunction,
        uploadVideoFunction,
    ]);
};
export default useExtensions;
