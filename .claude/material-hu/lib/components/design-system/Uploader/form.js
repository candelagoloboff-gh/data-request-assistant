import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { exceedsMaxFiles } from './utils';
import Uploader from '.';
const FormUploader = ({ children, name, uploaderProps, rules, fileCardProps, }) => {
    const form = useFormContext();
    const { t } = useTranslation('material_hu_only');
    const maxFiles = uploaderProps.maxFiles;
    const files = form.watch(name);
    const onDropAccepted = (filesAccepted) => {
        const countFilesUploaded = filesAccepted?.length + files?.length;
        if (exceedsMaxFiles(countFilesUploaded, maxFiles)) {
            return form.setError(name, {
                message: t('uploader.max_files_error', {
                    maxFiles: maxFiles,
                }),
            });
        }
        form.clearErrors();
        return uploaderProps.onDropAccepted?.(filesAccepted);
    };
    const onDropRejected = (filesRejected, event) => {
        if (exceedsMaxFiles(filesRejected.length, maxFiles)) {
            form.setError(name, {
                message: t('uploader.max_files_error', {
                    maxFiles: maxFiles,
                }),
            });
        }
        else {
            form.setError(name, {
                message: !uploaderProps.maxFiles || uploaderProps.maxFiles > 1
                    ? t('uploader.some_file_not_uploaded')
                    : t('uploader.file_not_uploaded'),
            });
        }
        return uploaderProps.onDropRejected?.(filesRejected, event);
    };
    const onFilesUploaded = (filesUploaded) => {
        uploaderProps.onFilesUploaded?.(filesUploaded);
    };
    const disabled = (maxFiles && files?.length >= maxFiles) || uploaderProps.disabled;
    return (_jsx(Controller, { render: ({ field, fieldState }) => {
            return (_jsx(Uploader, { ...field, ...uploaderProps, onDropRejected: onDropRejected, helperText: fieldState.error?.message || uploaderProps.helperText, error: !!fieldState.error, disabled: disabled, onDropAccepted: onDropAccepted, onFilesUploaded: onFilesUploaded, fileCardProps: fileCardProps, children: children }));
        }, name: name, rules: rules }));
};
export default FormUploader;
