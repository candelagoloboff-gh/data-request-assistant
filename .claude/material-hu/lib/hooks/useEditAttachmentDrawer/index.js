import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDrawerV2 } from '../useDrawerV2';
import { splitFileName } from '../../utils/attachments';
import EditAttachmentFormContent from './components/EditAttachmentFormContent';
/** Provides a drawer for renaming an existing attachment. */
export const useEditAttachmentDrawer = (rules) => {
    const { t } = useTranslation();
    const form = useForm({
        defaultValues: {
            name: '',
            extension: '',
        },
    });
    const { handleSubmit, reset } = form;
    const getDrawerConfiguration = ({ onConfirm, onCancel, attachment, ...props }) => {
        const submit = handleSubmit(values => {
            onConfirm?.(attachment, values);
            handleClose();
        });
        const handleClose = () => {
            closeEditAttachmentDrawer();
            reset();
        };
        const handleCancel = () => {
            onCancel?.(attachment);
            handleClose();
        };
        return {
            ...props,
            component: 'form',
            onSubmit: submit,
            onClose: handleClose,
            title: t('general:attachment.rename.title'),
            primaryButtonProps: {
                children: t('general:save'),
                type: 'submit',
            },
            secondaryButtonProps: {
                children: t('general:cancel'),
                onClick: handleCancel,
            },
            children: _jsx(EditAttachmentFormContent, { rules: rules }),
        };
    };
    const handleShow = (props) => {
        reset(splitFileName(props.attachment?.name || ''), {
            keepDefaultValues: true,
        });
        showEditAttachmentDrawer(props);
    };
    const { drawer: editDrawer, showDrawer: showEditAttachmentDrawer, closeDrawer: closeEditAttachmentDrawer, } = useDrawerV2(getDrawerConfiguration);
    return {
        editAttachmentDrawer: _jsx(FormProvider, { ...form, children: editDrawer }),
        showEditAttachmentDrawer: handleShow,
        closeEditAttachmentDrawer,
    };
};
