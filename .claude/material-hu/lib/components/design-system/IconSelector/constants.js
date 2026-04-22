import { IconSelectorTab, } from './types';
export const MAX_WIDTH = 512;
export const MAX_WIDTH_EMOJI_ONLY = 360;
export const CONTENT_HEIGHT = 400;
/** Gif picker (Giphy) */
export const GIF_DEBOUNCE_MS = 500;
export const GIF_LIMIT = 10;
export const GIF_RATING = 'pg';
export const GIF_GRID_WIDTH = MAX_WIDTH - 36;
export const EMPTY_GIFS_RESULT = {
    meta: { status: 200, msg: 'OK', response_id: 'error' },
    data: [],
    pagination: { total_count: 0, count: 0, offset: 0 },
};
const TAB_EMOJI = [
    { label: 'Emojis', value: IconSelectorTab.EMOJI },
];
const TAB_GIF = [
    { label: 'Gifs', value: IconSelectorTab.GIF },
];
const TABS_EMOJI_AND_GIF = [...TAB_EMOJI, ...TAB_GIF];
const MODE_TO_TABS = {
    emoji: TAB_EMOJI,
    gif: TAB_GIF,
    'emoji-and-gif': TABS_EMOJI_AND_GIF,
    all: TABS_EMOJI_AND_GIF,
};
export function getTabsForMode(mode) {
    return MODE_TO_TABS[mode];
}
