import { IconCheck, IconExclamationCircle, IconInfoCircle, IconInfoTriangle, IconSquareRoundedPlus, } from '@tabler/icons-react';
export const getBadgeProps = (type, theme) => {
    if (!type)
        return null;
    switch (type) {
        case 'success':
            return {
                icon: IconCheck,
                backgroundColor: theme.palette.new.background.feedback.success,
                borderColor: theme.palette.new.border.states.success,
                fontColor: theme.palette.new.text.feedback.success,
            };
        case 'warning':
            return {
                icon: IconInfoTriangle,
                backgroundColor: theme.palette.new.background.feedback.warning,
                borderColor: theme.palette.new.border.states.warning,
                fontColor: theme.palette.new.text.feedback.warning,
            };
        case 'info':
            return {
                icon: IconInfoCircle,
                backgroundColor: theme.palette.new.background.feedback.info,
                borderColor: theme.palette.new.border.states.info,
                fontColor: theme.palette.new.text.feedback.info,
            };
        case 'highlight':
            return {
                icon: IconSquareRoundedPlus,
                backgroundColor: theme.palette.new.background.feedback.highlight,
                borderColor: theme.palette.new.border.states.highlight,
                fontColor: theme.palette.new.text.feedback.highlight,
            };
        case 'error':
        default:
            return {
                icon: IconExclamationCircle,
                backgroundColor: theme.palette.new.background.feedback.error,
                borderColor: theme.palette.new.border.states.error,
                fontColor: theme.palette.new.text.feedback.error,
            };
    }
};
export const getBackgroundColor = (color, theme) => {
    if (color === 'grey')
        return theme.palette.new.background.elements.grey;
    return theme.palette.new.background.elements.default;
};
export const getBorderColor = (color, hasShadow, theme) => {
    if (color === 'grey' || hasShadow)
        return 'transparent';
    return theme.palette.new.border.neutral.default;
};
