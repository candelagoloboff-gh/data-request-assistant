import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { bytesToSize } from '../../../utils/bytes';
import CoverPictureUploader from '.';
const FormCoverPictureUploader = ({ name, uploaderProps = {}, rules, }) => {
    const { t } = useTranslation('material_hu_only');
    const form = useFormContext();
    const handleDropAccepted = (file, event) => {
        uploaderProps.onDropAccepted?.(file, event);
        form.clearErrors();
    };
    const handleDropRejected = (filesRejected, event) => {
        uploaderProps.onDropRejected?.(filesRejected, event);
        if (!filesRejected?.length && !filesRejected[0]?.errors?.length)
            return;
        const errorCode = filesRejected[0].errors[0].code;
        form.setError(name, {
            type: 'custom',
            message: t('cover_picture_uploader.cover_picture_error', {
                context: errorCode,
                max: bytesToSize(uploaderProps.maxSize),
                count: 1,
            }),
        });
    };
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field, fieldState }) => {
            return (_jsx(CoverPictureUploader, { ...field, ...uploaderProps, error: !!fieldState.error, helperText: fieldState.error?.message || uploaderProps.helperText, onDropAccepted: handleDropAccepted, onDropRejected: handleDropRejected, onFileChange: uploaderProps.onFileChange }));
        } }));
};
export default FormCoverPictureUploader;
