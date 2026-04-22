export const getHelperColor = (theme, error, success, disabled) => {
    if (error) {
        return theme.palette.new?.text.feedback.error;
    }
    if (success) {
        return theme.palette.new?.text.feedback.success;
    }
    if (disabled) {
        return theme.palette.new?.action.button.text.disabled.darker;
    }
    return theme.palette.new?.text.neutral.lighter;
};
export const getCounterColor = (theme, error, success) => {
    if (error) {
        return theme.palette.new?.text.feedback.error;
    }
    if (success) {
        return theme.palette.new?.text.feedback.success;
    }
    return theme.palette.new?.text.neutral.lighter;
};
export const shouldShowHelperText = (hasCounter, helperText, error) => {
    return !!(hasCounter || helperText || error);
};
export const getCounterValue = (value, maxLength) => {
    const length = value?.length || 0;
    return `${length}/${maxLength || 0}`;
};
