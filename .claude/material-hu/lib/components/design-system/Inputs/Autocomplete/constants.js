export const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};
export const isEqualText = (textA, textB) => {
    return normalizeText(textA) === normalizeText(textB);
};
export const isCreatableOption = (value) => typeof value === 'string' && /^__(.*?)__$/.test(value);
export const getCreatableValue = (value) => `__${value}__`;
export const getCreatableInputText = (value) => {
    const match = value.match(/^__(.*?)__$/);
    return match ? match[1] : value;
};
