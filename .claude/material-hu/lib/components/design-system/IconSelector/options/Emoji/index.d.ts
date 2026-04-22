import { type EmojiClickData } from 'emoji-picker-react';
type EmojiPickerOptionProps = {
    onEmojiSelect?: (data: EmojiClickData) => void;
    onClose?: () => void;
    /** When false, the menu stays open after selecting an emoji (close manually via click outside or ESC). */
    closeOnEmojiSelect?: boolean;
};
declare const EmojiPickerOption: ({ onEmojiSelect, onClose, closeOnEmojiSelect, }: EmojiPickerOptionProps) => import("react/jsx-runtime").JSX.Element;
export default EmojiPickerOption;
