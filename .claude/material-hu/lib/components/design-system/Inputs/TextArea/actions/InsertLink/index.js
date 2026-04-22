import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconLink } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import InsertLinkModal from './modal';
const InsertLink = ({ title }) => {
    const { editor } = useTextArea();
    const [open, setOpen] = useState(false);
    if (!editor) {
        return null;
    }
    return (_jsxs(Stack, { children: [_jsx(InsertLinkModal, { open: open, onClose: () => setOpen(false) }), _jsx(ActionButton, { title: title, icon: _jsx(IconLink, {}), onClick: () => setOpen(true), isActive: editor.isActive('link'), disabled: editor.isActive('code') })] }));
};
export default InsertLink;
