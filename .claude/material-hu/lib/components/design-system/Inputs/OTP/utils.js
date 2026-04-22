export const getValueArray = (value, length) => value
    .replace(/[^0-9]/g, '')
    .slice(0, length)
    .split('');
