import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { FormControl, Stack } from '@mui/material';
import { megabytesToBytes } from '../../../utils/bytes';
import { urlToFile } from '../../../utils/files';
import CustomHelperText from '../../design-system/Inputs/Base/CustomHelperText';
import CustomLabel from '../../design-system/Inputs/Base/CustomLabel';
import CoverPictureActions from './components/CoverPictureActions';
import CoverPictureImage from './components/CoverPictureImage';
import useHandleCrop from './hooks/useHandleCrop';
import useHandleDropzone from './hooks/useHandleDropzone';
const CoverPictureUploader = forwardRef(({ sx, label, value, defaultSrc, helperText, recommendedSizeTooltip, recommendedWidth, recommendedHeight, onChange = () => null, onDropAccepted = () => null, onDropRejected = () => null, maxSize = megabytesToBytes(50), error, disabled = false, onFileChange = () => null, aspectRatio = '2/1', }, ref) => {
    const [loadingReposition, setLoadingReposition] = useState(false);
    const { modal, showModal } = useHandleCrop({
        recommendedWidth,
        recommendedHeight,
        onSave: (file, event) => {
            onChange({ ...value, cropped: file }, event);
            onFileChange(file, event);
        },
    });
    const { getInputProps, open } = useHandleDropzone({
        maxSize,
        disabled,
        onDropRejected,
        onDropAccepted: (file, event) => {
            onChange({ cropped: null, original: file }, event);
            showModal({ file });
            onDropAccepted(file, event);
        },
    });
    const handleDelete = (event) => {
        onChange({ cropped: null, original: null }, event);
    };
    const handleReposition = async () => {
        setLoadingReposition(true);
        const file = value?.original || value?.cropped;
        const fileToCrop = typeof file === 'string' ? await urlToFile(file) : file;
        showModal({ file: fileToCrop });
        setLoadingReposition(false);
    };
    return (_jsxs(_Fragment, { children: [modal, _jsxs(Stack, { ref: ref, className: "HuCoverPictureUploader-root", component: FormControl, error: error, sx: { gap: 1, width: '100%', ...sx }, children: [_jsxs(Stack, { sx: { gap: 1.5 }, children: [_jsx(CustomLabel, { label: label }), _jsx(CoverPictureImage, { image: value?.cropped || defaultSrc, aspectRatio: aspectRatio })] }), error && (_jsx(CustomHelperText, { value: "", helperText: helperText })), _jsx(CoverPictureActions, { onChange: open, onDelete: handleDelete, onReposition: handleReposition, inputProps: getInputProps(), loadingReposition: loadingReposition, isEdit: !!value?.cropped, disabled: disabled, recommendedSizeTooltip: recommendedSizeTooltip })] })] }));
});
CoverPictureUploader.displayName = 'CoverPictureUploader';
export default CoverPictureUploader;
