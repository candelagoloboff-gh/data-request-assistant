import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { useModal } from '../../../../../../hooks/useModal';
import Dialog from '../../../../Dialog';
import Uploader from '../../../../Uploader';
import useTextAreaModal from '../../hooks/useTextAreaModal';
const UploadVideoModal = (props) => {
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
            editor.chain().focus().setVideo(imageUrl).run();
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
        title: t('top_bar_rich_text_editor.upload_video'),
        body: (_jsx(Stack, { sx: { gap: 2 }, children: _jsx(Uploader, { onChange: setFiles, value: files, maxFiles: 1, acceptedTypes: ['video'], triggerOnChangeWhenUploading: true, showUploadButtonOnMaxFiles: false, ...uploaderProps }) })),
        primaryButtonProps: {
            type: 'button',
            children: t('top_bar_rich_text_editor.confirm'),
            disabled: !['success', 'default'].includes(files[0]?.status),
            onClick: onSubmit,
        },
        secondaryButtonProps: {
            type: 'button',
            children: t('top_bar_rich_text_editor.cancel'),
            onClick: onCancel,
        },
    });
    return modal;
};
export default UploadVideoModal;
