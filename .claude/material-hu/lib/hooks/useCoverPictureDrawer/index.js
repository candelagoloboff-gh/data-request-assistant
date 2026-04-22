import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormCoverPictureUploader from '../../components/composed-components/CoverPictureUploader/form';
import { useDrawerV2 } from '../useDrawerV2';
/** Provides a drawer for uploading and cropping a cover picture. */
export const useCoverPictureDrawer = ({ defaultSrc: src = null, loading = false, } = {}) => {
    const { t } = useTranslation('material_hu_only');
    const form = useForm({
        values: { coverPicture: { cropped: src, original: src } },
        defaultValues: { coverPicture: { cropped: src, original: src } },
    });
    const { handleSubmit, reset } = form;
    const getDrawerConfiguration = ({ onConfirm, onCancel, defaultSrc, slotProps, ...props }) => {
        const submit = handleSubmit((values) => {
            onConfirm?.(values);
        });
        const handleClose = () => {
            closeCoverPictureDrawer();
        };
        const handleCancel = () => {
            onCancel?.();
            handleClose();
            reset({ coverPicture: { cropped: src, original: src } });
        };
        return {
            ...props,
            component: 'form',
            onSubmit: submit,
            onClose: handleClose,
            title: t('use_cover_picture_drawer.change_cover'),
            primaryButtonProps: {
                children: t('use_cover_picture_drawer.save'),
                loading,
                disabled: loading,
                type: 'submit',
            },
            secondaryButtonProps: {
                children: t('use_cover_picture_drawer.cancel'),
                disabled: loading,
                onClick: handleCancel,
            },
            children: (_jsx(FormCoverPictureUploader, { name: "coverPicture", uploaderProps: {
                    label: t('use_cover_picture_drawer.preview'),
                    defaultSrc,
                    sx: {
                        ...slotProps?.uploader?.sx,
                        '& img': { maxWidth: '100%' },
                        '& .HuCoverPictureUploader-image': { px: 0 },
                    },
                    ...slotProps?.uploader,
                } })),
        };
    };
    const { drawer: coverPictureDrawer, showDrawer: showCoverPictureDrawer, closeDrawer: closeCoverPictureDrawer, } = useDrawerV2(getDrawerConfiguration);
    return {
        coverPictureDrawer: (_jsx(FormProvider, { ...form, children: coverPictureDrawer })),
        showCoverPictureDrawer: showCoverPictureDrawer,
        closeCoverPictureDrawer: closeCoverPictureDrawer,
    };
};
export default useCoverPictureDrawer;
