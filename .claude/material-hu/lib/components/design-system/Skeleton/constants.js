export const getBorderRadius = (variant, theme) => {
    // This method repeats MUI's internal code for the 'circular' variant but is necessary to set a diferent border radius default
    switch (variant) {
        case 'circular':
            return '50%';
        case 'rectangular':
            return undefined;
        default:
            return theme.shape.borderRadiusS;
    }
};
