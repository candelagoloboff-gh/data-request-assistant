export const getLabelColor = (theme, disabled, error) => {
    if (disabled) {
        return theme.palette.new?.text.neutral.disabled;
    }
    if (error) {
        return theme.palette.new?.text.feedback.error;
    }
    return theme.palette.new?.text.neutral.default;
};
export const getSecondaryTextColor = (theme, disabled) => {
    if (disabled) {
        return theme.palette.new?.text.neutral.disabled;
    }
    return theme.palette.new?.text.neutral.lighter;
};
