import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconImageInPicture } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import EmbedHTMLModal from './modal';
const EmbedHTML = ({ title, transformer }) => {
    const { editor } = useTextArea();
    const [open, setOpen] = useState(false);
    if (!editor)
        return null;
    return (_jsxs(Stack, { children: [_jsx(EmbedHTMLModal, { open: open, onClose: () => setOpen(false), transformer: transformer }), _jsx(ActionButton, { title: title, icon: _jsx(IconImageInPicture, {}), onClick: () => setOpen(true), isActive: editor.isActive('html'), disabled: editor.isActive('code') })] }));
};
export default EmbedHTML;
