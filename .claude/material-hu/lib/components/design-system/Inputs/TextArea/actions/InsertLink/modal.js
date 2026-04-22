import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../../../../Dialog';
import InputClassic from '../../../../Inputs/Classic';
import { useModal } from '../../../../../../hooks/useModal';
import { Stack } from '@mui/material';
import { getFullLink } from '../../../../../../utils/links';
import useTextAreaModal from '../../hooks/useTextAreaModal';
const InsertLinkModal = (props) => {
    const { open, onClose } = props;
    const { editor, close } = useTextAreaModal({ onClose });
    const [text, setText] = useState('');
    const [link, setLink] = useState('');
    const selectionType = editor?.state.selection.content().content.content?.[0]?.type.name;
    const selectionAttrs = editor?.state.selection.content().content.content?.[0]?.attrs;
    const isResizableMedia = selectionType === 'resizable-media';
    const { t } = useTranslation('material_hu_only');
    const onCancel = () => {
        close();
    };
    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (editor) {
            const fullLink = getFullLink({ link, withHttp: false });
            const selectionText = editor.state.selection.$head.parent.content.content
                .map(el => el.text)
                .join('');
            if (!link) {
                if (isResizableMedia) {
                    editor
                        .chain()
                        .focus()
                        .updateAttributes('resizable-media', {
                        href: null,
                        target: null,
                        rel: null,
                    })
                        .run();
                }
                else {
                    editor.chain().focus().extendMarkRange('link').unsetLink().run();
                }
                close();
                return;
            }
            if (isResizableMedia) {
                editor
                    .chain()
                    .focus()
                    .updateAttributes('resizable-media', {
                    href: fullLink,
                    target: '_blank',
                    rel: 'noopener noreferrer nofollow',
                })
                    .run();
            }
            else if (selectionText !== text) {
                editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .insertContentAt(editor.state.selection, {
                    type: 'text',
                    text: text,
                    marks: [
                        {
                            type: 'link',
                            attrs: {
                                href: fullLink,
                                target: '_blank',
                                rel: 'noopener noreferrer nofollow',
                            },
                        },
                    ],
                })
                    .run();
            }
            else {
                editor
                    .chain()
                    .focus()
                    .selectParentNode()
                    .extendMarkRange('link')
                    .setLink({ href: fullLink })
                    .run();
            }
        }
        close();
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: <We dont want callbacks as deps>
    useEffect(() => {
        if (open)
            showModal();
        else
            closeModal();
    }, [open]);
    useEffect(() => {
        if (editor && open) {
            const from = editor.state.selection.from;
            const to = editor.state.selection.to;
            const noSelection = from === to;
            const selectionText = noSelection
                ? editor.state.selection.$head.parent.content.content
                    .map(el => el.text)
                    .join('')
                : editor.state.doc.textBetween(editor.state.selection.from, editor.state.selection.to, ' ');
            const previousUrl = isResizableMedia
                ? selectionAttrs?.href || ''
                : editor.getAttributes('link').href || '';
            setText(selectionText || '');
            setLink(previousUrl);
        }
    }, [editor, open, isResizableMedia, selectionAttrs]);
    const { modal, showModal, closeModal } = useModal(Dialog, {
        onClose: close,
        maxWidth: 'sm',
        fullWidth: true,
    }, {
        onClose: close,
        title: t('top_bar_rich_text_editor.insert_link'),
        body: (_jsxs(_Fragment, { children: [_jsx("form", { onSubmit: onSubmit, onReset: onCancel, id: "insert-link-modal" }), _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(InputClassic, { fullWidth: true, label: t('top_bar_rich_text_editor.link'), placeholder: t('top_bar_rich_text_editor.insert_link_url_placeholder'), type: "text", onChange: value => setLink(value), value: link, hasCounter: false, maxLength: 2000, autoFocus: true }), !isResizableMedia && (_jsx(InputClassic, { fullWidth: true, label: t('top_bar_rich_text_editor.text'), placeholder: t('top_bar_rich_text_editor.insert_link_text_placeholder'), type: "text", onChange: value => setText(value), value: text, hasCounter: false, maxLength: 1000 }))] })] })),
        primaryButtonProps: {
            children: t('top_bar_rich_text_editor.confirm'),
            disabled: !link || (!isResizableMedia && !text),
            type: 'submit',
            form: 'insert-link-modal',
        },
        secondaryButtonProps: {
            children: t('top_bar_rich_text_editor.cancel'),
            type: 'reset',
            form: 'insert-link-modal',
        },
    });
    return modal;
};
export default InsertLinkModal;
