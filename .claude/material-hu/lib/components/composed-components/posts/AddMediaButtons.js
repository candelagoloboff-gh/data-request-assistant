import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IconButton, Stack } from '@mui/material';
import { IconCamera, IconFileUpload } from '@tabler/icons-react';
import { sumBy, uniqueId } from 'lodash';
import { bytesToMB } from '../../../utils/bytes';
import useSnackbar from '../../design-system/Snackbar';
export const AddMediaButtons = ({ uploadMedia, uploadFile, maxAttachedSize, }) => {
    const { t } = useTranslation('material_hu_only');
    const { enqueueSnackbar } = useSnackbar();
    const form = useFormContext();
    const { files: filesValue, media: mediaValue } = form.watch();
    const options = {
        media: {
            field: 'media',
            upload: uploadMedia,
        },
        files: {
            field: 'files',
            upload: uploadFile,
        },
    };
    const handleFileDropAccepted = (option) => (newFiles) => {
        const { field, upload } = option;
        const newFilesSize = sumBy(newFiles, f => f.size);
        const oldFilesSize = sumBy([...filesValue, ...mediaValue], f => f.file?.size || f.attachment.bytes);
        if (bytesToMB(newFilesSize + oldFilesSize) > maxAttachedSize) {
            form.setError('files', { type: 'max', message: `${Math.random()}` });
            return;
        }
        const filesWithId = newFiles.map(file => ({
            file,
            id: uniqueId(Math.random().toString()),
        }));
        form.setValue(field, form.getValues(field).concat(filesWithId), {
            shouldDirty: true,
        });
        filesWithId.map(async (newFile) => {
            const newUploadedFile = await upload(newFile);
            form.setValue(field, form
                .getValues(field)
                .map((mediaFile) => mediaFile.file === newFile.file ? newUploadedFile : mediaFile));
        });
    };
    const handleDropRejected = () => {
        enqueueSnackbar({
            title: t('posts.size_and_type_error'),
            variant: 'error',
        });
    };
    const types = {
        'video/mp4': ['.mp4'],
        'video/avi': ['.avi'],
        'video/mpeg': ['.mpeg'],
        'video/webm': ['.webm'],
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/webp': ['.webp'],
    };
    const mediaDropzone = useDropzone({
        noClick: true,
        onDropAccepted: handleFileDropAccepted(options.media),
        onDropRejected: handleDropRejected,
        accept: types,
        multiple: true,
    });
    const filesDropzone = useDropzone({
        noClick: true,
        onDropAccepted: handleFileDropAccepted(options.files),
        onDropRejected: handleDropRejected,
        multiple: true,
    });
    const actions = [
        {
            dropZone: mediaDropzone,
            Icon: IconCamera,
            action: uploadMedia,
        },
        {
            dropZone: filesDropzone,
            Icon: IconFileUpload,
            action: uploadFile,
        },
    ].filter(({ action }) => !!action);
    return (_jsx(Stack, { children: actions.map((action, index) => (_jsxs("div", { ...action.dropZone.getRootProps(), children: [_jsx("input", { ...action.dropZone.getInputProps() }), _jsx(IconButton, { onClick: action.dropZone.open, children: _jsx(action.Icon, { size: 24 }) })] }, index))) }));
};
export default AddMediaButtons;
