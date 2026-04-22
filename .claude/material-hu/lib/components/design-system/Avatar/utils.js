import { skeletonVariantMap } from './constants';
export const getSkeletonVariant = (variant) => skeletonVariantMap[variant ?? 'circular'];
export const getSizeInPixels = (size) => {
    switch (size) {
        case 'small':
            return '32px';
        case 'large':
            return '60px';
        default:
            return '40px';
    }
};
export const getIconSize = (size) => {
    switch (size) {
        case 'small':
            return 24;
        case 'large':
            return 32;
        default:
            return 24;
    }
};
export const getBorderVariant = (color, theme) => {
    switch (color) {
        case 'white':
            return `1px solid ${theme.palette.new.border.neutral.default}`;
        default:
            return undefined;
    }
};
export const getColorsVariant = (color, theme) => {
    switch (color) {
        case 'white':
            return {
                backgroundColor: theme.palette.new.background.elements.default,
                color: theme.palette.new.icon.neutral.lighter,
            };
        case 'primary':
            return {
                backgroundColor: theme.palette.new.background.layout.brand,
                color: theme.palette.new.icon.neutral.brand,
            };
        case 'highlight':
            return {
                backgroundColor: theme.palette.new.background.feedback.highlight,
                color: theme.palette.new.icon.feedback.highlight,
            };
        case 'success':
            return {
                backgroundColor: theme.palette.new.background.feedback.success,
                color: theme.palette.new.icon.feedback.success,
            };
        case 'error':
            return {
                backgroundColor: theme.palette.new.background.feedback.error,
                color: theme.palette.new.icon.feedback.error,
            };
        case 'warning':
            return {
                backgroundColor: theme.palette.new.background.feedback.warning,
                color: theme.palette.new.icon.feedback.warning,
            };
        case 'info':
            return {
                backgroundColor: theme.palette.new.background.feedback.info,
                color: theme.palette.new.icon.feedback.info,
            };
        default:
            return {
                backgroundColor: theme.palette.new.background.elements.grey,
                color: theme.palette.new.icon.neutral.default,
            };
    }
};
export const getOffset = (size, variant) => {
    if (variant === 'dot') {
        const dotLarge = '-4px';
        const dotSmallMedium = '-0.5px';
        const translateOffset = size === 'medium' || size === 'small' ? dotSmallMedium : dotLarge;
        return {
            '& .MuiBadge-badge': {
                transform: `translate(${translateOffset}, ${translateOffset})`,
            },
        };
    }
    else if (variant === 'standard') {
        const standardLarge = '0px';
        const standardMedium = '6px';
        const translateOffset = size === 'large' ? standardLarge : standardMedium;
        return {
            '& .MuiBadge-badge': {
                transform: `translate(${translateOffset}, ${translateOffset})`,
            },
        };
    }
    return {};
};
