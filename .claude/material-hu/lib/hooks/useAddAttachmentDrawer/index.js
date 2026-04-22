import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDrawerV2 } from '../useDrawerV2';
import { uniqueId } from 'lodash';
import AddAttachmentFormContent from './components/AddAttachmentFormContent';
/** Provides a drawer for uploading and adding new attachments. */
export const useAddAttachmentDrawer = (upload) => {
    const { t } = useTranslation();
    const form = useForm({
        defaultValues: { fileCards: [] },
    });
    const { handleSubmit, reset, control } = form;
    const fileCards = useWatch({ name: 'fileCards', control });
    const getDrawerConfiguration = ({ onConfirm, onCancel, ...props }) => {
        const submit = handleSubmit((values) => {
            const attachments = values.fileCards
                .filter(fileCard => fileCard.status === 'success' && !!fileCard.attachment)
                .map(fileCard => ({
                ...fileCard.attachment,
                file: fileCard.file,
                id: -1 * Number(uniqueId()),
            }));
            onConfirm?.(attachments);
            handleClose();
        });
        const handleClose = () => {
            closeAddAttachmentDrawer();
            reset({ fileCards: [] });
        };
        const handleCancel = () => {
            onCancel?.();
            handleClose();
        };
        const uploading = fileCards.some(fileCard => fileCard.status === 'uploading');
        return {
            ...props,
            component: 'form',
            onSubmit: submit,
            onClose: handleClose,
            title: t('general:attachment.add.title_long_other'),
            primaryButtonProps: {
                children: t('general:save'),
                disabled: uploading,
                type: 'submit',
            },
            secondaryButtonProps: {
                children: t('general:cancel'),
                onClick: handleCancel,
            },
            children: _jsx(AddAttachmentFormContent, { upload: upload }),
        };
    };
    const { drawer: addDrawer, showDrawer: showAddAttachmentDrawer, closeDrawer: closeAddAttachmentDrawer, } = useDrawerV2(getDrawerConfiguration);
    return {
        addAttachmentDrawer: _jsx(FormProvider, { ...form, children: addDrawer }),
        showAddAttachmentDrawer,
        closeAddAttachmentDrawer,
    };
};
