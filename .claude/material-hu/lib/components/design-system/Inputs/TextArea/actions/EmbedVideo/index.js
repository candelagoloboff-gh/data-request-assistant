import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconVideo } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import EmbedVideoModal from './modal';
const EmbedVideo = ({ title, transformer }) => {
    const { editor } = useTextArea();
    const [open, setOpen] = useState(false);
    if (!editor) {
        return null;
    }
    return (_jsxs(Stack, { children: [_jsx(EmbedVideoModal, { open: open, onClose: () => setOpen(false), transformer: transformer }), _jsx(ActionButton, { title: title, icon: _jsx(IconVideo, {}), onClick: () => setOpen(true), isActive: editor.isActive('embed'), disabled: editor.isActive('code') })] }));
};
export default EmbedVideo;
