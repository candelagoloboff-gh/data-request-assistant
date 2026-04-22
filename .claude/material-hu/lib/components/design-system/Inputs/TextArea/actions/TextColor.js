import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { IconTextColor } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import ColorSelectMenu from '../components/ColorSelectMenu';
import { useTextArea } from '../context';
const TextColor = ({ title }) => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    const currentColor = editor.getAttributes('textStyle').color;
    return (_jsxs(_Fragment, { children: [_jsx(ActionButton, { title: title, icon: _jsx(IconTextColor, { color: currentColor }), onClick: () => setOpen(true), isActive: currentColor, ref: anchorRef, sx: {
                    position: 'relative',
                    boxSizing: 'border-box',
                    '& svg': {
                        stroke: `${currentColor} !important`,
                        transition: 'stroke 0.125s ease-in-out',
                    },
                } }), _jsx(ColorSelectMenu, { anchorRef: anchorRef, open: open, setOpen: setOpen, onColorSelect: color => editor.chain().focus().setColor(color).run(), currentColor: currentColor })] }));
};
export default TextColor;
