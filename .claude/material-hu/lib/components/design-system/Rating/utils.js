const SIZE_MAP = {
    small: 18,
    medium: 24,
    large: 30,
};
export const getValidMax = (max) => {
    return Math.max(max || 5, 1);
};
export const getValidSize = (size) => {
    return SIZE_MAP[size || 'medium'];
};
export const getNumericValue = (value) => {
    if (value === undefined || value === null) {
        return value;
    }
    return Number(value);
};
