export const getJustifyContent = (centered = false, right = false) => {
    if (right)
        return 'flex-end';
    if (centered)
        return 'center';
    return 'flex-start';
};
export const getTextAlign = (centered = false, right = false) => {
    if (right)
        return 'right';
    if (centered)
        return 'center';
    return 'left';
};
