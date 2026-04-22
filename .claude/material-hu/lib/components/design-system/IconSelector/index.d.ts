import { type IconSelectorMode, type IconSelectorProps, type IconSelectorSlotProps, IconSelectorTab, type IconSelectorTabProps } from './types';
export declare const IconSelector: ({ mode, slotProps, icon, text, onEmojiSelect, onGifSelect, closeOnEmojiSelect, closeOnEnter, }: IconSelectorProps) => import("react/jsx-runtime").JSX.Element;
export type { IconSelectorMode, IconSelectorProps, IconSelectorSlotProps, IconSelectorTabProps, };
export { IconSelectorTab };
export { getTabsForMode } from './constants';
export { GifPickerProvider, useGifPicker, } from './options/Gif/GifPickerContext';
export default IconSelector;
