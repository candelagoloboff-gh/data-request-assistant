import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../../../../hooks/useModal';
import Dialog from '../../../../Dialog';
import Uploader from '../../../../Uploader';
import useTextAreaModal from '../../hooks/useTextAreaModal';
const InsertImageModal = (props) => {
    const { open, onClose, uploaderProps } = props;
    const { editor, close } = useTextAreaModal({ onClose });
    const [files, setFiles] = useState([]);
    const { t } = useTranslation('material_hu_only');
    const onCancel = () => {
        close();
        setFiles([]);
    };
    const onSubmit = () => {
        if (editor) {
            const file = files[0]?.file;
            const attachmentUrl = files[0]?.attachment?.url;
            if (!file && !attachmentUrl) {
                return;
            }
            const imageUrl = file
                ? URL.createObjectURL(file)
                : attachmentUrl;
            editor
                .chain()
                .insertContent([
                {
                    type: 'resizable-media',
                    attrs: { tag: 'img', src: imageUrl },
                },
                { type: 'paragraph' },
            ])
                .run();
        }
        close();
        setFiles([]);
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
        title: t('top_bar_rich_text_editor.insert_image'),
        body: (_jsx(Uploader, { onChange: setFiles, value: files, maxFiles: 1, acceptedTypes: ['image'], triggerOnChangeWhenUploading: true, showUploadButtonOnMaxFiles: false, sx: { width: '100%', ...uploaderProps.sx }, ...uploaderProps })),
        primaryButtonProps: {
            children: t('top_bar_rich_text_editor.confirm'),
            disabled: !['success', 'default'].includes(files[0]?.status),
            onClick: onSubmit,
        },
        secondaryButtonProps: {
            children: t('top_bar_rich_text_editor.cancel'),
            onClick: onCancel,
        },
    });
    return modal;
};
export default InsertImageModal;
