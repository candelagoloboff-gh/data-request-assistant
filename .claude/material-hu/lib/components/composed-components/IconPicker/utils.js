import { IconType } from '../../../types/icons';
export const isImageIcon = (icon) => icon?.type === IconType.IMAGE;
export const isEmojiIcon = (icon) => icon?.type === IconType.EMOJI;
/**
 * Loose match between a selected image URL and an option's name.
 * Useful because image URLs often include cache-busting query params
 * while the option name is a stable substring of the path.
 */
export const matchesImageOption = (selectedUrl, optionName) => !!selectedUrl && selectedUrl.includes(optionName);
