import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import UploadVideoModal from './modal';
const UploadVideo = ({ title, uploaderProps }) => {
    const { editor } = useTextArea();
    const [open, setOpen] = useState(false);
    if (!editor) {
        return null;
    }
    return (_jsxs(Stack, { children: [!!uploaderProps && (_jsx(UploadVideoModal, { open: open, onClose: () => setOpen(false), uploaderProps: uploaderProps })), _jsx(ActionButton, { title: title, icon: _jsx(IconUpload, {}), onClick: () => setOpen(true), isActive: editor.isActive('video'), disabled: !uploaderProps || editor.isActive('code') })] }));
};
export default UploadVideo;
