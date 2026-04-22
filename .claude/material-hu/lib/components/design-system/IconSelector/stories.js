import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, TextField } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';
import IconSelector, { GifPickerProvider } from '.';
const defaultIcon = _jsx(IconMoodSmile, { size: 24 });
const meta = {
    component: IconSelector,
    title: 'Design System/IconSelector',
    tags: ['autodocs'],
    args: { icon: defaultIcon, mode: 'emoji' },
    decorators: [
        Story => (_jsx(Stack, { sx: {
                minHeight: 300,
                bgcolor: theme => theme.palette.new.background.layout.default,
                width: '100%',
                py: 4,
            }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    tags: ['!autodocs'],
    render: args => (_jsx(GifPickerProvider, { apiKey: import.meta.env.VITE_GIPHY_API_KEY ?? '', children: _jsx(IconSelector, { ...args }) })),
    args: {
        mode: 'emoji-and-gif',
        onEmojiSelect: data => {
            console.log('Selected emoji', data);
        },
        onGifSelect: gif => {
            console.log('Selected GIF', gif);
        },
    },
};
/** Emoji picker stays open after selecting an emoji; close with click outside or ESC. */
/** Trigger with only text (no icon). */
export const KeepOpenOnEmojiSelect = {
    args: {
        text: 'Emoji',
        icon: undefined,
        closeOnEmojiSelect: false,
        onEmojiSelect: data => {
            console.log('Selected emoji', data);
        },
    },
};
/** Gif tab only: no tab bar, only the Gif picker with title. */
export const GifOnly = {
    render: args => (_jsx(GifPickerProvider, { apiKey: import.meta.env.VITE_GIPHY_API_KEY ?? '', children: _jsx(IconSelector, { ...args }) })),
    args: {
        mode: 'gif',
        icon: defaultIcon,
        text: 'GIF',
        slotProps: { text: { gifTitle: 'Choose a GIF' } },
        onGifSelect: gif => {
            console.log('Selected GIF', gif);
        },
    },
};
/** Gif tab only without GifPickerProvider: trigger is disabled. */
export const GifOnlyWithoutProvider = {
    args: {
        mode: 'gif',
        icon: defaultIcon,
        text: 'GIF',
        slotProps: { text: { gifTitle: 'Choose a GIF' } },
    },
};
/** Emoji + GIF tabs without GifPickerProvider: emojis work; GIF tab has no API key. */
export const EmojiAndGifWithoutProvider = {
    args: {
        mode: 'emoji-and-gif',
        icon: defaultIcon,
        onEmojiSelect: data => {
            console.log('Selected emoji', data);
        },
        onGifSelect: gif => {
            console.log('Selected GIF', gif);
        },
    },
};
const SIDEBAR_WIDTH = 240;
const CONTAINED_CHAT_HEIGHT = 380;
/** Chat-like container with only bubbles. IconSelector uses disablePortal so the menu is clipped and does not escape the container. */
export const ContainedInChat = {
    render: args => (_jsx(GifPickerProvider, { apiKey: import.meta.env.VITE_GIPHY_API_KEY ?? '', children: _jsxs(Stack, { direction: "row", sx: {
                overflow: 'hidden',
                maxHeight: CONTAINED_CHAT_HEIGHT,
                width: '100%',
                border: 1,
                borderColor: theme => theme.palette.new.border.neutral.divider,
                borderRadius: 2,
            }, children: [_jsx(Stack, { sx: {
                        width: SIDEBAR_WIDTH,
                        flexShrink: 0,
                        borderRight: theme => `1px solid ${theme.palette.new.border.neutral.divider}`,
                        bgcolor: theme => theme.palette.new.background.layout.tertiary,
                        py: 2,
                        px: 1.5,
                    }, children: _jsx(Stack, { sx: { gap: 0.5 }, children: [1, 2, 3].map(i => (_jsx(Stack, { sx: {
                                height: 40,
                                borderRadius: 1,
                                bgcolor: theme => i === 1
                                    ? theme.palette.new.background.elements.default
                                    : 'transparent',
                            } }, i))) }) }), _jsxs(Stack, { sx: {
                        flex: 1,
                        minHeight: 0,
                        overflow: 'hidden',
                        gap: 2,
                        px: 2,
                        py: 2,
                    }, children: [_jsx(Stack, { sx: {
                                alignSelf: 'flex-start',
                                width: 280,
                                height: 72,
                                borderTopRightRadius: '16px',
                                borderBottomRightRadius: theme => theme.shape.borderRadiusL,
                                borderBottomLeftRadius: theme => theme.shape.borderRadiusL,
                                bgcolor: theme => theme.palette.newBase?.brand[200],
                            } }), _jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                gap: 2,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, children: [_jsx(IconSelector, { ...args, mode: "emoji", slotProps: { menu: { disablePortal: true } }, onEmojiSelect: data => {
                                        console.log('Selected emoji', data);
                                    } }), _jsx(Stack, { sx: {
                                        width: 280,
                                        height: 72,
                                        borderTopLeftRadius: '16px',
                                        borderBottomRightRadius: theme => theme.shape.borderRadiusL,
                                        borderBottomLeftRadius: theme => theme.shape.borderRadiusL,
                                        bgcolor: theme => theme.palette.newBase?.brand[200],
                                    } })] })] })] }) })),
    args: {
        icon: defaultIcon,
    },
};
/** Chat screen: message bubbles and input. The icon in the right bubble or next to the input opens the IconSelector. */
export const ChatScreen = {
    render: args => (_jsx(GifPickerProvider, { apiKey: import.meta.env.VITE_GIPHY_API_KEY ?? '', children: _jsxs(Stack, { direction: "row", sx: { flex: 1, width: '100%', minHeight: 400 }, children: [_jsx(Stack, { sx: {
                        width: SIDEBAR_WIDTH,
                        flexShrink: 0,
                        borderRight: theme => `1px solid ${theme.palette.new.border.neutral.divider}`,
                        bgcolor: theme => theme.palette.new.background.layout.tertiary,
                        py: 2,
                        px: 1.5,
                    }, children: _jsx(Stack, { sx: { gap: 0.5 }, children: [1, 2, 3].map(i => (_jsx(Stack, { sx: {
                                height: 40,
                                borderRadius: 1,
                                bgcolor: theme => i === 1
                                    ? theme.palette.new.background.elements.default
                                    : 'transparent',
                            } }, i))) }) }), _jsxs(Stack, { sx: { flex: 1, width: '100%', gap: 2, minWidth: 0 }, children: [_jsxs(Stack, { sx: { flex: 1, gap: 2, px: 2 }, children: [_jsx(Stack, { sx: {
                                        alignSelf: 'flex-start',
                                        width: 300,
                                        height: 80,
                                        borderTopRightRadius: '16px',
                                        borderBottomRightRadius: theme => theme.shape.borderRadiusL,
                                        borderBottomLeftRadius: theme => theme.shape.borderRadiusL,
                                        bgcolor: theme => theme.palette.newBase?.brand[200],
                                    } }), _jsxs(Stack, { sx: {
                                        flexDirection: 'row',
                                        gap: 2,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',
                                    }, children: [_jsx(IconSelector, { ...args, mode: "emoji", onEmojiSelect: data => {
                                                console.log('Selected emoji', data);
                                            } }), _jsx(Stack, { sx: {
                                                width: 300,
                                                height: 80,
                                                borderTopLeftRadius: '16px',
                                                borderBottomRightRadius: theme => theme.shape.borderRadiusL,
                                                borderBottomLeftRadius: theme => theme.shape.borderRadiusL,
                                                bgcolor: theme => theme.palette.newBase?.brand[200],
                                            } })] })] }), _jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                            }, children: [_jsx(IconSelector, { ...args, mode: "emoji-and-gif", onEmojiSelect: data => {
                                        console.log('Selected emoji', data);
                                    }, onGifSelect: gif => {
                                        console.log('Selected GIF', gif);
                                    } }), _jsx(TextField, { placeholder: "Type a message...", size: "small", fullWidth: true, sx: { '& fieldset': { borderRadius: 2 } } })] })] })] }) })),
    args: {
        icon: defaultIcon,
    },
};
