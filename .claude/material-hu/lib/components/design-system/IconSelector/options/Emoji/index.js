import { jsx as _jsx } from "react/jsx-runtime";
import { CONTENT_HEIGHT } from '../../../IconSelector/constants';
import { Stack, useTheme } from '@mui/material';
import EmojiPicker, { EmojiStyle, SuggestionMode, } from 'emoji-picker-react';
const EmojiPickerOption = ({ onEmojiSelect, onClose, closeOnEmojiSelect = true, }) => {
    const theme = useTheme();
    const handleEmojiClick = (data) => {
        onEmojiSelect?.(data);
        if (closeOnEmojiSelect) {
            onClose?.();
        }
    };
    const isDark = theme.palette.mode === 'dark';
    return (_jsx(Stack, { sx: {
            '& .EmojiPickerReact': {
                borderColor: 'transparent !important',
            },
            '& .EmojiPickerReact input': {
                paddingLeft: 4.5,
                paddingRight: 1.5,
            },
        }, children: _jsx(EmojiPicker, { ...{
                theme: isDark ? 'dark' : 'light',
            }, style: {
                '--epr-emoji-size': '25px',
                '--epr-bg': theme.palette.new.background.layout.tertiary,
                '--epr-search-border-color': theme.palette.new.border.neutral.default,
                '--epr-search-border-color-active': theme.palette.new.border.neutral.brand,
                '--epr-search-input-placeholder-color': theme.palette.new.text.neutral.lighter,
                '--epr-search-input-text-color': theme.palette.new.text.neutral.default,
            }, height: CONTENT_HEIGHT - 16, width: "auto", skinTonesDisabled: true, lazyLoadEmojis: true, previewConfig: { showPreview: false }, emojiStyle: EmojiStyle.NATIVE, suggestedEmojisMode: SuggestionMode.RECENT, onEmojiClick: handleEmojiClick }) }));
};
export default EmojiPickerOption;
