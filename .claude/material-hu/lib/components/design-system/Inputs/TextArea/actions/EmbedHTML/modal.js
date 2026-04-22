import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../../../../Dialog';
import InputClassic from '../../../../Inputs/Classic';
import { useModal } from '../../../../../../hooks/useModal';
import useTextAreaModal from '../../hooks/useTextAreaModal';
import { getEmbedHTML } from './transformers';
const EmbedHTMLModal = ({ open, onClose, transformer, }) => {
    const [value, setValue] = useState('');
    const { t } = useTranslation('material_hu_only');
    const { editor, close } = useTextAreaModal({ onClose });
    const onCancel = () => {
        close();
        setValue('');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (editor) {
            const rawValue = transformer ? transformer(value) : value;
            const sanitizedHTML = getEmbedHTML(rawValue);
            editor
                .chain()
                .insertContent([
                { type: 'raw-html', attrs: { html: sanitizedHTML } },
                { type: 'paragraph' },
            ])
                .run();
        }
        close();
        setValue('');
    };
    const { modal, showModal, closeModal } = useModal(Dialog, {
        onClose: close,
        maxWidth: 'sm',
        fullWidth: true,
    }, {
        onClose: close,
        title: t('top_bar_rich_text_editor.embed_html'),
        body: (_jsxs(_Fragment, { children: [_jsx("form", { onSubmit: onSubmit, onReset: onCancel, id: "embed-html-modal" }), _jsx(InputClassic, { fullWidth: true, label: t('top_bar_rich_text_editor.html'), placeholder: t('top_bar_rich_text_editor.html_placeholder'), type: "text", multiline: true, minRows: 1, maxRows: 13, onChange: newValue => setValue(newValue), value: value, hasCounter: false, maxLength: Infinity, autoFocus: true })] })),
        primaryButtonProps: {
            children: t('top_bar_rich_text_editor.confirm'),
            disabled: !value,
            type: 'submit',
            form: 'embed-html-modal',
        },
        secondaryButtonProps: {
            children: t('top_bar_rich_text_editor.cancel'),
            type: 'reset',
            form: 'embed-html-modal',
        },
    });
    useEffect(() => {
        if (open)
            showModal();
        else {
            closeModal();
            setValue('');
        }
    }, [open, closeModal, showModal]);
    return modal;
};
export default EmbedHTMLModal;
