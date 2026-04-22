import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../Buttons/Button';
import Menu from '../Menu';
import Tabs from '../Tabs';
import { IconButton, Stack, useTheme } from '@mui/material';
import { composeSx } from '../../../utils/components';
import { CONTENT_HEIGHT, getTabsForMode, MAX_WIDTH, MAX_WIDTH_EMOJI_ONLY, } from './constants';
import EmojiPickerOption from './options/Emoji';
import GifPicker from './options/Gif';
import { IconSelectorTab, } from './types';
const DEFAULT_MENU_SLOT = {
    position: 'center',
};
const TRIGGER_BASE_SX = {
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto',
};
const TabsComponent = ({ tabs, value, onTabChange, }) => {
    return (_jsx(Tabs, { tabs: tabs, value: value, sx: {
            pt: 2,
            px: 2,
            width: 'fit-content',
        }, onTabChange: (_value, index) => onTabChange(tabs[index].value) }));
};
const TabContent = ({ tab, onEmojiSelect, onGifSelect, onClose, closeOnEmojiSelect, textSlot, showTitle, }) => {
    if (tab === IconSelectorTab.EMOJI) {
        return (_jsx(EmojiPickerOption, { onEmojiSelect: onEmojiSelect, onClose: onClose, closeOnEmojiSelect: closeOnEmojiSelect }));
    }
    if (tab === IconSelectorTab.PERSONALIZED) {
        return (_jsx(Stack, { sx: {
                height: CONTENT_HEIGHT,
                bgcolor: theme => theme.palette.new.background.elements.grey,
                alignItems: 'center',
                justifyContent: 'center',
                color: theme => theme.palette.new.text.neutral.lighter,
            }, children: "Custom icons (coming soon)" }));
    }
    if (tab === IconSelectorTab.GIF) {
        return (_jsx(GifPicker, { title: showTitle ? textSlot?.gifTitle : undefined, noResultsMessage: textSlot?.gifNoResultsMessage, searchPlaceholder: textSlot?.gifSearchPlaceholder, onGifSelect: onGifSelect, onClose: onClose }));
    }
    return null;
};
export const IconSelector = ({ mode = 'all', slotProps = {}, icon, text, onEmojiSelect, onGifSelect, closeOnEmojiSelect = true, closeOnEnter = true, }) => {
    const menuProps = { ...DEFAULT_MENU_SLOT, ...slotProps.menu };
    const buttonProps = slotProps.button;
    const iconButtonProps = slotProps.iconButton;
    const theme = useTheme();
    const anchorRef = useRef(null);
    const [pickerOpen, setPickerOpen] = useState(false);
    const tabs = useMemo(() => getTabsForMode(mode), [mode]);
    const [tab, setTab] = useState(tabs[0]?.value);
    const onTogglePicker = useCallback(() => setPickerOpen(prev => !prev), []);
    const onCloseMenu = useCallback(() => {
        setPickerOpen(false);
        setTab(tabs[0]?.value ?? tab);
    }, [tabs, tab]);
    const onCloseMenuRef = useRef(onCloseMenu);
    onCloseMenuRef.current = onCloseMenu;
    useEffect(() => {
        if (!pickerOpen || !closeOnEnter)
            return;
        const handleKeyDown = (e) => {
            if (e.key === 'Enter')
                onCloseMenuRef.current();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [pickerOpen, closeOnEnter]);
    const maxWidth = useMemo(() => {
        return tabs.length <= 1 && tab === IconSelectorTab.EMOJI
            ? MAX_WIDTH_EMOJI_ONLY
            : MAX_WIDTH;
    }, [tabs, tab]);
    const hideTabs = useMemo(() => tabs.length <= 1, [tabs]);
    const isIconOnlyTrigger = icon != null && text == null;
    const triggerCommonProps = {
        ref: anchorRef,
        onClick: onTogglePicker,
    };
    const trigger = isIconOnlyTrigger ? (_jsx(IconButton, { ...iconButtonProps, ...triggerCommonProps, sx: composeSx(TRIGGER_BASE_SX, iconButtonProps?.sx), children: icon })) : (_jsx(Button, { ...buttonProps, ...triggerCommonProps, startIcon: icon, sx: composeSx(TRIGGER_BASE_SX, buttonProps?.sx), children: text ?? '' }));
    return (_jsxs(_Fragment, { children: [trigger, _jsx(Menu, { open: pickerOpen, anchorEl: anchorRef.current, onClose: onCloseMenu, fixedDimensions: false, ...menuProps, children: _jsxs(Stack, { sx: {
                        width: maxWidth,
                        bgcolor: theme.palette.new.background.layout.tertiary,
                        border: 1,
                        borderColor: theme.palette.new.border.neutral.default,
                        borderRadius: 2,
                        overflow: 'hidden',
                    }, children: [!hideTabs && (_jsx(TabsComponent, { tabs: tabs, value: tab, onTabChange: setTab })), _jsx(Stack, { sx: {
                                height: CONTENT_HEIGHT,
                                overflow: 'hidden',
                            }, children: _jsx(TabContent, { tab: tab, onEmojiSelect: onEmojiSelect, onGifSelect: onGifSelect, onClose: onCloseMenu, closeOnEmojiSelect: closeOnEmojiSelect, textSlot: slotProps.text, showTitle: hideTabs }) })] }) })] }));
};
export { IconSelectorTab };
export { getTabsForMode } from './constants';
export { GifPickerProvider, useGifPicker, } from './options/Gif/GifPickerContext';
export default IconSelector;
