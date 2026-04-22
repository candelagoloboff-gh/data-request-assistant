export const getRadioColor = (theme, checked, disabled, error) => {
    if (disabled) {
        return theme.palette.new?.icon.neutral.disabled;
    }
    if (error) {
        return theme.palette.new?.text.feedback.error;
    }
    if (checked) {
        return theme.palette.new?.action.button.background.primary.default;
    }
    return theme.palette.new?.icon.neutral.lighter;
};
