export const getBackgroundColor = (headerRow, selected, theme) => {
    if (headerRow) {
        return {
            backgroundColor: theme.palette.new.action.background.neutral.hover,
            '&:hover': {
                backgroundColor: theme.palette.new.action.background.neutral.hover,
            },
        };
    }
    if (selected == null) {
        return {
            backgroundColor: theme.palette.new.background.elements.default,
            '&:hover': {
                backgroundColor: theme.palette.new.background.elements.default,
            },
        };
    }
    if (selected) {
        return {
            backgroundColor: `${theme.palette.new.background.elements.brand} !important`,
            '&:hover': {
                backgroundColor: `${theme.palette.new.action.background.brand.hover} !important`,
            },
        };
    }
    return {
        backgroundColor: theme.palette.new.background.elements.default,
        '&:hover': {
            backgroundColor: theme.palette.new.action.background.neutral.hover,
        },
    };
};
