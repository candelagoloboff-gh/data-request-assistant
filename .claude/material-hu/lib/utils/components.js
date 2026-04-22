/**
 * Compose sx values into a SINGLE SxProps value.
 * Safe to pass directly to `sx={...}`.
 */
export function composeSx(...sx) {
    const items = sx.filter(Boolean);
    if (items.length === 0)
        return {};
    if (items.length === 1)
        return items[0];
    // If ANY item is a function → return ONE function
    if (items.some(item => typeof item === 'function')) {
        return (theme) => items.reduce((acc, item) => {
            const resolved = typeof item === 'function' ? item(theme) : item;
            return { ...acc, ...resolved };
        }, {});
    }
    // Otherwise return ONE sx-array (valid SxProps)
    return items;
}
