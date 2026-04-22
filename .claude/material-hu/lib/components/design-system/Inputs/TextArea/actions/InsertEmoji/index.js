import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Stack } from '@mui/material';
import { IconMoodHappy } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import EmojiMenu from './menu';
const InsertEmoji = ({ title }) => {
    const { editor } = useTextArea();
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    if (!editor) {
        return null;
    }
    const handleOpen = () => setOpen(true);
    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
    };
    const handleSelect = (emojiData, event) => {
        handleClose(event);
        editor.chain().focus().insertContent(emojiData.emoji).run();
    };
    return (_jsxs(Stack, { children: [_jsx(ActionButton, { ref: anchorRef, title: title, icon: _jsx(IconMoodHappy, {}), onClick: handleOpen, isActive: editor.isActive('image') }), _jsx(EmojiMenu, { anchorRef: anchorRef, open: open, onClose: handleClose, onSelect: handleSelect })] }));
};
export default InsertEmoji;
