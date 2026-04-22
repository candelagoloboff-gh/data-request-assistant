import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import FileCard from '../FileCard';
import CustomHelperText from '../Inputs/Base/CustomHelperText';
import Title from '../Title';
import { Button, FormControl, Stack, Typography, } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import { bytesToSize, megabytesToBytes } from '../../../utils/bytes';
import { typeMap } from './constants';
import { useUploaderUpload } from './hooks/useUploaderUpload';
const Uploader = forwardRef(({ children, title, description, helperText, label, value: files = [], fileSizeLimit = megabytesToBytes(50), onDropRejected, onDropAccepted, uploadFunction, onChange, error, sx = {}, acceptedTypes = ['image', 'pdf'], maxFiles, disabled, fileCardProps, triggerOnChangeWhenUploading, showUploadButtonOnMaxFiles = true, slotProps = {}, readOnly = false, }, ref) => {
    const { t } = useTranslation('material_hu_only');
    const { handleDropAccepted, handleRemoveFile } = useUploaderUpload({
        files,
        onChange,
        uploadFunction,
        maxFiles,
        triggerOnChangeWhenUploading,
        onDropAccepted,
        fileCardProps,
    });
    const types = acceptedTypes?.reduce((acc, type) => {
        const { mimeType, extensions } = typeMap[type];
        acc[mimeType] = extensions;
        return acc;
    }, {});
    const allowMultiples = !maxFiles || maxFiles > 1;
    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted: handleDropAccepted,
        onDropRejected,
        accept: types,
        multiple: allowMultiples,
        maxSize: fileSizeLimit,
        maxFiles,
        disabled,
    });
    const maxFilesReached = maxFiles ? files.length >= maxFiles : false;
    const showUploadButton = showUploadButtonOnMaxFiles || !maxFilesReached;
    return (_jsx(FormControl, { ref: ref, error: error, ...slotProps.root, sx: {
            ...sx,
            ...slotProps.root?.sx,
        }, children: _jsxs(Stack, { children: [label && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                        color: theme => theme.palette.new.text.neutral.default,
                        mb: 1,
                    }, children: label })), showUploadButton && !readOnly && (_jsxs(Stack, { sx: {
                        borderStyle: 'dashed',
                        borderColor: theme => theme.palette.new.border.neutral.default,
                        py: 3,
                        alignItems: 'center',
                        gap: 1,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        borderRadius: 2,
                        mb: files.length > 0 ? 1 : 0,
                    }, ...getRootProps(), children: [_jsx("input", { ...getInputProps() }), children ?? (_jsxs(_Fragment, { children: [_jsx(Title, { centered: true, variant: "S", title: title || t('uploader.title'), description: description ||
                                        (maxFiles
                                            ? t('uploader.allowed_with_max_files_and_formats_size_limit', {
                                                count: maxFiles,
                                                fileSizeLimit: bytesToSize(fileSizeLimit),
                                            })
                                            : t('uploader.allowed_formats_size_limit', {
                                                fileSizeLimit: bytesToSize(fileSizeLimit),
                                            })) }), _jsx(Button, { variant: "secondary", size: "small", endIcon: _jsx(IconUpload, { size: 16 }), disabled: disabled, sx: { '&:disabled': { cursor: 'not-allowed' } }, children: t('uploader.upload_file') })] }))] })), (error || !files.length) && (_jsx(CustomHelperText, { value: "", helperText: helperText })), _jsx(Stack, { sx: { gap: 1 }, children: files?.map((fileCard, index) => {
                        if (!(fileCard?.file || fileCard?.attachment))
                            return null;
                        const key = fileCard.fileAsset?.id ??
                            fileCard.attachment?.url ??
                            `${(fileCard.file || fileCard.attachment)?.name}-${index}`;
                        return (_jsx(FileCard, { readOnly: readOnly, showRemoveButton: !readOnly, onRemove: () => handleRemoveFile(fileCard), onReupload: () => fileCard.file
                                ? handleDropAccepted([fileCard.file])
                                : undefined, disabled: fileCardProps?.disabled, ...slotProps.fileCard, ...fileCard, sx: {
                                alignSelf: 'stretch',
                                width: 'auto',
                                ...slotProps.fileCard?.sx,
                            } }, key));
                    }) })] }) }));
});
Uploader.displayName = 'Uploader';
export default Uploader;
