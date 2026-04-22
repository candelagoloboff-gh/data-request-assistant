export const getColorConfig = (theme, { isCurrent, hasError, isCompleted, }) => {
    if (hasError) {
        return {
            background: theme.palette.new.background.feedback.error,
            barBG: theme.palette.new.action.button.background.error.default,
            border: theme.palette.new.background.feedback.error,
            text: theme.palette.new.text.feedback.error,
            titleText: theme.palette.new.text.feedback.error,
        };
    }
    if (isCompleted) {
        return {
            background: theme.palette.new.background.layout.brand,
            barBG: theme.palette.new.action.button.background.primary.default,
            border: theme.palette.new.border.neutral.brand,
            text: theme.palette.new.text.neutral.brand,
            titleText: theme.palette.new.text.neutral.default,
        };
    }
    if (isCurrent) {
        return {
            background: theme.palette.new.background.elements.default,
            barBG: theme.palette.new.background.layout.default,
            border: theme.palette.new.border.neutral.brand,
            text: theme.palette.new.text.neutral.brand,
            titleText: theme.palette.new.text.neutral.default,
        };
    }
    return {
        background: theme.palette.new.action.background.brand.disabled,
        barBG: theme.palette.new.action.background.brand.disabled,
        border: theme.palette.new.action.background.brand.disabled,
        text: theme.palette.new.text.neutral.default,
        titleText: theme.palette.new.text.neutral.default,
    };
};
