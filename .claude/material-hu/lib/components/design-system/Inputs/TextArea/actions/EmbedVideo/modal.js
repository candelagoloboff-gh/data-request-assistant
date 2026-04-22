import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../../../../hooks/useModal';
import Dialog from '../../../../Dialog';
import InputClassic from '../../../../Inputs/Classic';
import useTextAreaModal from '../../hooks/useTextAreaModal';
import { getEmbedUrl } from './transformers';
const EmbedVideoModal = (props) => {
    const { open, onClose, transformer } = props;
    const { editor, close } = useTextAreaModal({ onClose });
    const [url, setUrl] = useState('');
    const { t } = useTranslation('material_hu_only');
    const onCancel = () => {
        close();
        setUrl('');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (editor) {
            const transformedUrl = transformer ? transformer(url) : getEmbedUrl(url);
            editor.chain().focus().setIframe({ src: transformedUrl }).run();
        }
        close();
        setUrl('');
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: <We dont want callbacks as deps>
    useEffect(() => {
        if (open)
            showModal();
        else
            closeModal();
    }, [open]);
    const { modal, showModal, closeModal } = useModal(Dialog, {
        onClose: close,
        maxWidth: 'sm',
        fullWidth: true,
    }, {
        onClose: close,
        title: t('top_bar_rich_text_editor.embed_video'),
        body: (_jsxs(_Fragment, { children: [_jsx("form", { onSubmit: onSubmit, onReset: onCancel, id: "embed-video-modal" }), _jsx(InputClassic, { fullWidth: true, label: t('top_bar_rich_text_editor.url'), placeholder: t('top_bar_rich_text_editor.url_placeholder'), type: "text", onChange: value => setUrl(value), value: url, hasCounter: false, autoFocus: true })] })),
        primaryButtonProps: {
            children: t('top_bar_rich_text_editor.confirm'),
            disabled: !url,
            type: 'submit',
            form: 'embed-video-modal',
        },
        secondaryButtonProps: {
            children: t('top_bar_rich_text_editor.cancel'),
            type: 'reset',
            form: 'embed-video-modal',
        },
    });
    return modal;
};
export default EmbedVideoModal;
