import { jsx as _jsx } from "react/jsx-runtime";
import Menu from '../../../../Menu';
import { Stack } from '@mui/material';
import Picker, { EmojiStyle } from 'emoji-picker-react';
const EmojiMenu = ({ anchorRef, open, onClose, onSelect }) => {
    return (_jsx(Menu, { open: open, anchorEl: anchorRef.current, onClose: onClose, fixedDimensions: false, position: "left", sx: {
            '& .MuiList-root': {
                p: 0,
            },
        }, children: _jsx(Stack, { sx: { '& .EmojiPickerReact .epr-category-nav': { py: 1 } }, children: _jsx(Stack, { sx: {
                    '& .EmojiPickerReact': {
                        '& .epr-category-nav': {
                            py: '2px',
                        },
                        '--epr-emoji-size': '25px',
                    },
                }, children: _jsx(Picker, { skinTonesDisabled: true, previewConfig: { showPreview: false }, emojiStyle: EmojiStyle.NATIVE, onEmojiClick: onSelect, width: 376, height: 360 }) }) }) }));
};
export default EmojiMenu;
