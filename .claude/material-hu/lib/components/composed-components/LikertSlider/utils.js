export const isSingleValue = (value) => {
    return typeof value === 'number';
};
export const isRangeValue = (value) => {
    return Array.isArray(value) && value.length === 2;
};
export const formatPropsValue = (value) => {
    if (isSingleValue(value)) {
        return value + 1;
    }
    if (isRangeValue(value)) {
        return [value[0] + 1, value[1] + 1];
    }
    return value;
};
export const formatInternalValue = (value) => {
    if (isSingleValue(value)) {
        return value - 1;
    }
    if (isRangeValue(value)) {
        return [value[0] - 1, value[1] - 1];
    }
    return value;
};
export const buildGetPercentage = (min, max) => (value) => {
    return ((value - min) / (max - min)) * 100;
};
export const isBarredValue = (value, min, max) => (isSingleValue(value) && (value === min || value === max)) ||
    (isRangeValue(value) &&
        (value[0] === min || value[1] === max || value[0] >= value[1])) ||
    value === undefined;
