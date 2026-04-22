import { type EmojiClickData } from 'emoji-picker-react';
export type EmojiMenuProps = {
    anchorRef: React.RefObject<HTMLDivElement>;
    open: boolean;
    onClose: (event: MouseEvent) => void;
    onSelect: (emojiData: EmojiClickData, event: MouseEvent) => void;
};
export type InsertEmojiProps = {
    title: string;
};
