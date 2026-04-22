import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconPhoto } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import InsertImageModal from './modal';
const InsertImage = ({ title, uploaderProps }) => {
    const { editor } = useTextArea();
    const [open, setOpen] = useState(false);
    if (!editor)
        return null;
    return (_jsxs(Stack, { children: [!!uploaderProps && (_jsx(InsertImageModal, { open: open, onClose: () => setOpen(false), uploaderProps: uploaderProps })), _jsx(ActionButton, { title: title, icon: _jsx(IconPhoto, {}), onClick: () => setOpen(true), isActive: editor.isActive('image'), disabled: !uploaderProps || editor.isActive('code') })] }));
};
export default InsertImage;
