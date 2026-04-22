import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { isFileAsset } from '../../../dynamic-forms/utils/extraUtils';
import FormSign from '../../../sign/documents/SignDialog/form';
import Button from '../../../../design-system/Buttons/Button';
import { useModal } from '../../../../../hooks/useModal';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconExclamationCircle, IconSignature, IconTrash, } from '@tabler/icons-react';
import { processFile } from '../../../../../utils/attachments';
import { urlToFile } from '../../../../../utils/files';
const InputSign = ({ name, disabled, buttonProps, deleteButtonProps, editButtonProps, signProps, }) => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const { setValue: setFormValue, control } = useFormContext();
    const { fieldState, field } = useController({ name, control: control });
    const handleSaveFileAsset = async (newSignature) => {
        signModal.closeModal();
        if (!newSignature)
            return;
        if (!signProps?.uploadFn) {
            throw new Error('uploadFn is required');
        }
        setPreviewUrl(newSignature);
        // Convert the new signature to a file
        const signatureFile = await urlToFile(newSignature);
        // Process the file to get the correct type
        const processedSignature = await processFile(signatureFile);
        // Upload the file to S3
        const [uploadedFile] = await signProps?.uploadFn?.([processedSignature]);
        signProps?.onSave?.(newSignature);
        setFormValue(name, uploadedFile, { shouldValidate: true });
    };
    const signModal = useModal(FormSign, { fullWidth: true }, {
        name,
        disabled,
        signProps: {
            ...signProps,
            onSave: handleSaveFileAsset,
            onClose: () => {
                signModal.closeModal();
                signProps?.onClose?.();
            },
        },
    });
    const urlToDisplay = previewUrl || (isFileAsset(field.value) ? field.value.url : null);
    return (_jsxs(_Fragment, { children: [urlToDisplay && (_jsxs(Stack, { sx: {
                    marginX: 'auto',
                    height: '200px',
                    width: '100%',
                    borderRadius: '8px',
                    backgroundColor: theme => theme.palette.new.background.layout.default,
                    overflow: 'hidden',
                    mb: 2,
                    position: 'relative',
                }, children: [_jsx("img", { src: urlToDisplay, alt: "signature", style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            aspectRatio: '2.8/1',
                        } }), _jsxs(Stack, { sx: {
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            flexDirection: 'row',
                            gap: 1,
                        }, children: [_jsx(Button, { variant: "tertiary", size: "small", disabled: disabled, onClick: () => {
                                    setFormValue(name, null, { shouldValidate: true });
                                    setPreviewUrl(null);
                                }, startIcon: !deleteButtonProps?.startIcon &&
                                    !deleteButtonProps?.children && _jsx(IconTrash, {}), ...deleteButtonProps }), _jsx(Button, { variant: "secondary", size: "small", onClick: () => signModal.showModal(), disabled: disabled, startIcon: !editButtonProps?.startIcon &&
                                    !editButtonProps?.children && _jsx(IconSignature, {}), ...editButtonProps })] })] })), !urlToDisplay && (_jsx(Button, { onClick: () => signModal.showModal(), disabled: disabled, variant: "secondary", size: "large", endIcon: _jsx(IconSignature, {}), sx: {
                    display: 'flex',
                    marginX: 'auto',
                    ...buttonProps?.sx,
                }, ...buttonProps })), _jsx(FormHelperText, { sx: {
                    mx: 0,
                    '& *': {
                        color: theme => `${theme.palette.textColors?.errorText} !important`,
                    },
                }, children: _jsx(Stack, { component: "span", sx: { alignItems: 'center', flexDirection: 'row', gap: 0.5 }, children: fieldState.error?.message && (_jsxs(_Fragment, { children: [fieldState.error && _jsx(IconExclamationCircle, { size: "1rem" }), _jsx(Typography, { variant: "globalS", children: fieldState.error?.message })] })) }) }), signModal.modal] }));
};
export default InputSign;
