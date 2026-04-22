/** Converts bytes to megabytes. */
export declare const bytesToMB: (bytes: number) => number;
/** Converts megabytes to gigabytes. */
export declare const megabytesToGB: (megabytes: number) => number;
/** Converts megabytes to bytes. */
export declare const megabytesToBytes: (megabytes: number) => number;
/** Formats a byte count into a human-readable string (e.g. "1.5 MB"). */
export declare const bytesToSize: (bytes?: number | null, decimals?: number) => string;
/** Parses a human-readable size string (e.g. "1.5 MB") back into bytes. */
export declare const sizeToBytes: (str: string, decimals?: number) => number;
/** Returns a formatted usage string like "500 MB / 1 GB". */
export declare const getUsage: (bytes: number, maxBytes: number, decimals?: number) => string;
/** Converts a size in the given unit back to bytes. */
export declare const bytesFrom: (size: number, unit: number | string, decimals?: number) => number;
/** Converts bytes to the specified unit. */
export declare const bytesTo: (bytes: number, unit: number | string, decimals?: number) => number;
/** Converts a unit string (e.g. "MB") to its numeric index. */
export declare const ston: (unit: string) => number;
/** Checks whether the given unit (string or index) is a valid byte unit. */
export declare const isValidUnit: (unit: string | number) => boolean;
/** Checks whether a string is a recognized byte unit (B, KB, MB, etc.). */
export declare const isValidStringUnit: (unit: string) => boolean;
/** Checks whether a numeric index is a valid byte unit index (0-8). */
export declare const isValidNumberUnit: (unit: number) => boolean;
