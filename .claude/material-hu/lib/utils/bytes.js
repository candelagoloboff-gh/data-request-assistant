const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const K = 1024;
/** Converts bytes to megabytes. */
export const bytesToMB = (bytes) => bytes / 1024 / 1024;
/** Converts megabytes to gigabytes. */
export const megabytesToGB = (megabytes) => megabytes / 1024;
/** Converts megabytes to bytes. */
export const megabytesToBytes = (megabytes) => megabytes * 1024 * 1024;
/** Formats a byte count into a human-readable string (e.g. "1.5 MB"). */
export const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0)
        return '0 Bytes';
    if (!bytes)
        return '';
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(K));
    return `${parseFloat((bytes / K ** i).toFixed(dm))} ${UNITS[i]}`;
};
/** Parses a human-readable size string (e.g. "1.5 MB") back into bytes. */
export const sizeToBytes = (str, decimals = 2) => {
    if (!str)
        return 0;
    const [size, unit] = str.split(' ');
    if (!Number(size))
        return 0;
    const i = unit === 'Bytes' ? 'B' : unit;
    return bytesFrom(Number(size), i, decimals);
};
/** Returns a formatted usage string like "500 MB / 1 GB". */
export const getUsage = (bytes, maxBytes, decimals = 0) => {
    const max = bytesToSize(maxBytes, decimals);
    const unit = max.split(' ')[1];
    const size = bytesTo(bytes, unit, decimals);
    return `${size} / ${max}`;
};
/** Converts a size in the given unit back to bytes. */
export const bytesFrom = (size, unit, decimals = 2) => {
    if (!size)
        return 0;
    if (!isValidUnit(unit))
        return size;
    const dm = decimals < 0 ? 0 : decimals;
    const i = typeof unit === 'string' ? ston(unit) : unit;
    return parseFloat((size * K ** i).toFixed(dm));
};
/** Converts bytes to the specified unit. */
export const bytesTo = (bytes, unit, decimals = 2) => {
    if (bytes <= 0)
        return 0;
    if (!isValidUnit(unit) || unit === 0)
        return bytes;
    const dm = decimals < 0 ? 0 : decimals;
    const i = typeof unit === 'string' ? ston(unit) : unit;
    return parseFloat((bytes / K ** i).toFixed(dm));
};
/** Converts a unit string (e.g. "MB") to its numeric index. */
export const ston = (unit) => UNITS.indexOf(unit);
/** Checks whether the given unit (string or index) is a valid byte unit. */
export const isValidUnit = (unit) => (typeof unit === 'string' && isValidStringUnit(unit)) ||
    (typeof unit === 'number' && isValidNumberUnit(unit));
/** Checks whether a string is a recognized byte unit (B, KB, MB, etc.). */
export const isValidStringUnit = (unit) => unit === 'B' ||
    unit === 'KB' ||
    unit === 'MB' ||
    unit === 'GB' ||
    unit === 'TB' ||
    unit === 'PB' ||
    unit === 'EB' ||
    unit === 'ZB' ||
    unit === 'YB';
/** Checks whether a numeric index is a valid byte unit index (0-8). */
export const isValidNumberUnit = (unit) => unit >= 0 && unit <= 8;
