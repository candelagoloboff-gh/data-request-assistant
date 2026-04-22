import { type Meta, type StoryObj } from '@storybook/react-vite';
import IconSelector from '.';
declare const meta: Meta<typeof IconSelector>;
export default meta;
type Story = StoryObj<typeof IconSelector>;
export declare const Default: Story;
/** Emoji picker stays open after selecting an emoji; close with click outside or ESC. */
/** Trigger with only text (no icon). */
export declare const KeepOpenOnEmojiSelect: Story;
/** Gif tab only: no tab bar, only the Gif picker with title. */
export declare const GifOnly: Story;
/** Gif tab only without GifPickerProvider: trigger is disabled. */
export declare const GifOnlyWithoutProvider: Story;
/** Emoji + GIF tabs without GifPickerProvider: emojis work; GIF tab has no API key. */
export declare const EmojiAndGifWithoutProvider: Story;
/** Chat-like container with only bubbles. IconSelector uses disablePortal so the menu is clipped and does not escape the container. */
export declare const ContainedInChat: Story;
/** Chat screen: message bubbles and input. The icon in the right bubble or next to the input opens the IconSelector. */
export declare const ChatScreen: Story;
