export const getBorderColor = (theme, focused, error, success, hasValue) => {
    if (error) {
        return theme.palette.new.border.states.error;
    }
    if (success) {
        return theme.palette.new.border.states.success;
    }
    // When focused and has value, use brand border (selection state)
    if (focused && hasValue) {
        return theme.palette.new.border.neutral.brand;
    }
    // When just focused (no value), use brand border
    if (focused) {
        return theme.palette.new.border.neutral.brand;
    }
    // When filled but not focused, use default border
    return theme.palette.new.border.neutral.default;
};
