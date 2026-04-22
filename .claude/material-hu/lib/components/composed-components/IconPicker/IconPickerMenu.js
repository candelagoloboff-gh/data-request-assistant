import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Menu from '../../design-system/Menu';
import Tabs from '../../design-system/Tabs';
import { Stack, useTheme } from '@mui/material';
import { IconType } from '../../../types/icons';
import EmojiPicker, { EmojiStyle, SuggestionMode, } from 'emoji-picker-react';
import { CONTENT_HEIGHT, DEFAULT_MENU_WIDTH, DEFAULT_TABS } from './constants';
import ImageGrid from './ImageGrid';
import { IconPickerTab } from './types';
import { isImageIcon } from './utils';
const IconPickerMenu = ({ open, anchorEl, onClose, onSelect, imageOptions, selectedValue, onUpload, width = DEFAULT_MENU_WIDTH, text, tabs = DEFAULT_TABS, }) => {
    const { palette } = useTheme();
    const tabsDef = tabs.map(tab => ({
        label: tab === IconPickerTab.ICONS ? text.iconsTab : text.emojisTab,
        value: tab,
    }));
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const handleEmojiClick = (data) => {
        const icon = { value: data.emoji, type: IconType.EMOJI };
        onSelect(icon);
        onClose();
    };
    const handleImageSelect = (icon) => {
        onSelect(icon);
        onClose();
    };
    const isDark = palette.mode === 'dark';
    const hideTabs = tabs.length <= 1;
    return (_jsx(Menu, { open: open, anchorEl: anchorEl, onClose: onClose, fixedDimensions: false, position: "left", children: _jsxs(Stack, { sx: { width }, children: [!hideTabs && (_jsx(Tabs, { tabs: tabsDef, value: currentTab, sx: { pt: 2, px: 2, width: 'fit-content' }, onTabChange: value => setCurrentTab(value) })), _jsxs(Stack, { sx: { height: CONTENT_HEIGHT, overflow: 'hidden' }, children: [currentTab === IconPickerTab.ICONS && (_jsx(ImageGrid, { options: imageOptions, selectedSource: isImageIcon(selectedValue) ? selectedValue?.value : undefined, onSelect: handleImageSelect, onUpload: onUpload, width: width })), currentTab === IconPickerTab.EMOJIS && (_jsx(Stack, { sx: {
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
                                    '--epr-bg': palette.new.background.layout.tertiary,
                                    '--epr-search-border-color': palette.new.border.neutral.default,
                                    '--epr-search-border-color-active': palette.new.border.neutral.brand,
                                    '--epr-search-input-placeholder-color': palette.new.text.neutral.lighter,
                                    '--epr-search-input-text-color': palette.new.text.neutral.default,
                                }, height: CONTENT_HEIGHT, width: "auto", skinTonesDisabled: true, lazyLoadEmojis: true, previewConfig: { showPreview: false }, emojiStyle: EmojiStyle.NATIVE, suggestedEmojisMode: SuggestionMode.RECENT, onEmojiClick: handleEmojiClick }) }))] })] }) }));
};
export default IconPickerMenu;
