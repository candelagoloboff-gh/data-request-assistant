import { type ReactNode } from 'react';
import { type ButtonProps } from '../Buttons/Button';
import { type MenuProps } from '../Menu';
import { type IGif } from '@giphy/js-types';
import { type IconButtonProps } from '@mui/material';
import { type EmojiClickData } from 'emoji-picker-react';
/** Which tabs to show: only emoji, only gif, both, or all (same as both for now). */
export type IconSelectorMode = 'emoji' | 'gif' | 'emoji-and-gif' | 'all';
export type IconSelectorSlotProps = {
    /** Text / copy for the GIF tab (title, no results message, search placeholder). */
    text?: {
        gifTitle?: string;
        gifNoResultsMessage?: string;
        gifSearchPlaceholder?: string;
    };
    /** Props for the Button trigger (when `text` is set or icon is omitted). `ref` and `onClick` are controlled by IconSelector. */
    button?: Omit<ButtonProps, 'ref' | 'onClick'>;
    /** Props for the IconButton trigger (icon without text). `ref` and `onClick` are controlled by IconSelector. */
    iconButton?: Omit<IconButtonProps, 'ref' | 'onClick'>;
    /** Props for the dropdown menu. open, onClose, anchorEl and children are controlled by IconSelector. */
    menu?: Omit<MenuProps, 'open' | 'onClose' | 'anchorEl' | 'children'>;
};
export type IconSelectorProps = {
    /** Which tabs to show. Default `'all'` (emoji + gif). */
    mode?: IconSelectorMode;
    /** Icon to show in the trigger. If provided without `text`, renders an IconButton; otherwise a Button. */
    icon?: ReactNode;
    /** Optional label. When provided (or when `icon` is omitted), the trigger is a Button. */
    text?: string;
    /** Props for internal slots (text, button, iconButton, menu). */
    slotProps?: IconSelectorSlotProps;
    /** Callback when an emoji is selected. */
    onEmojiSelect?: (data: EmojiClickData) => void;
    /**
     * If true (default), the menu closes after selecting an emoji.
     * If false, the emoji picker stays open until the user closes it (click outside or ESC).
     * Only affects the Emojis tab; GIF selection still closes the menu.
     */
    closeOnEmojiSelect?: boolean;
    /**
     * If true (default), pressing Enter closes the menu.
     * If false, Enter does not close the menu.
     */
    closeOnEnter?: boolean;
    /** Callback when a GIF is selected. */
    onGifSelect?: (gif: IGif) => void;
};
export type IconSelectorTabProps = {
    /** Display label for the tab */
    label: string;
    /** Tab identifier value */
    value: IconSelectorTab;
};
export declare enum IconSelectorTab {
    EMOJI = "EMOJI",
    GIF = "GIF",
    PERSONALIZED = "PERSONALIZED"
}
