import { type IconInterface } from '../../../types/icons';
export declare const isImageIcon: (icon: IconInterface | null) => boolean;
export declare const isEmojiIcon: (icon: IconInterface | null) => boolean;
/**
 * Loose match between a selected image URL and an option's name.
 * Useful because image URLs often include cache-busting query params
 * while the option name is a stable substring of the path.
 */
export declare const matchesImageOption: (selectedUrl: string | undefined, optionName: string) => boolean;
