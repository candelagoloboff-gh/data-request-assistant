import { type GifsResult } from '@giphy/js-fetch-api';
import { type IconSelectorMode, type IconSelectorTabProps } from './types';
export declare const MAX_WIDTH = 512;
export declare const MAX_WIDTH_EMOJI_ONLY = 360;
export declare const CONTENT_HEIGHT = 400;
/** Gif picker (Giphy) */
export declare const GIF_DEBOUNCE_MS = 500;
export declare const GIF_LIMIT = 10;
export declare const GIF_RATING: "pg";
export declare const GIF_GRID_WIDTH: number;
export declare const EMPTY_GIFS_RESULT: GifsResult;
export declare function getTabsForMode(mode: IconSelectorMode): IconSelectorTabProps[];
