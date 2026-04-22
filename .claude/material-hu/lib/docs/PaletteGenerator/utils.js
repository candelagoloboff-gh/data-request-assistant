export const normalizeHex = (value) => {
    const trimmed = value.trim().replace(/^#/, '');
    return trimmed.length === 6 ? `#${trimmed}` : '';
};
