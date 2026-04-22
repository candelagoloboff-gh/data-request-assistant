import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDrawerV2 } from '../useDrawerV2';
import SortAttachmentsFormContent from './components/SortAttachmentsFormContent';
/** Provides a drawer for reordering attachments via drag-and-drop. */
export const useSortAttachmentsDrawer = () => {
    const { t } = useTranslation();
    const form = useForm({
        defaultValues: { attachments: [] },
    });
    const { handleSubmit, reset } = form;
    const getDrawerConfiguration = ({ onConfirm, onCancel, ...props }) => {
        const submit = handleSubmit((values) => {
            const attachments = values.attachments;
            onConfirm?.(attachments);
            handleClose();
        });
        const handleClose = () => {
            closeSortAttachmentsDrawer();
            reset();
        };
        const handleCancel = () => {
            onCancel?.();
            handleClose();
        };
        return {
            ...props,
            component: 'form',
            onSubmit: submit,
            onClose: handleClose,
            title: t('general:attachment.sort.title'),
            primaryButtonProps: {
                children: t('general:save'),
                type: 'submit',
            },
            secondaryButtonProps: {
                children: t('general:cancel'),
                onClick: handleCancel,
            },
            children: _jsx(SortAttachmentsFormContent, {}),
        };
    };
    const handleShow = (props) => {
        reset({ attachments: props.attachments || [] }, { keepDefaultValues: true });
        showSortAttachmentsDrawer(props);
    };
    const { drawer: sortDrawer, showDrawer: showSortAttachmentsDrawer, closeDrawer: closeSortAttachmentsDrawer, } = useDrawerV2(getDrawerConfiguration);
    return {
        sortAttachmentsDrawer: _jsx(FormProvider, { ...form, children: sortDrawer }),
        showSortAttachmentsDrawer: handleShow,
        closeSortAttachmentsDrawer,
    };
};
