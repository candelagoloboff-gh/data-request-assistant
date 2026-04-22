import { IconAlertSquareRounded, IconBulb, IconCheck, IconExclamationCircle, IconInfoCircle, IconInfoTriangle, } from '@tabler/icons-react';
export const getPillProps = (type, theme) => {
    const palette = theme.palette;
    switch (type) {
        case 'success':
            return {
                icon: IconCheck,
                backgroundColor: palette.new?.background.feedback.success,
                borderColor: palette.new?.border.states.success,
                fontColor: palette.new?.text.feedback.success,
            };
        case 'warning':
            return {
                icon: IconInfoTriangle,
                backgroundColor: palette.new?.background.feedback.warning,
                borderColor: palette.new?.border.states.warning,
                fontColor: palette.new?.text.feedback.warning,
            };
        case 'info':
            return {
                icon: IconInfoCircle,
                backgroundColor: palette.new?.background.feedback.info,
                borderColor: palette.new?.border.states.info,
                fontColor: palette.new?.text.feedback.info,
            };
        case 'highlight':
            return {
                icon: IconBulb,
                backgroundColor: palette.new?.background.feedback.highlight,
                borderColor: palette.new?.border.states.highlight,
                fontColor: palette.new?.text.feedback.highlight,
            };
        case 'neutral':
            return {
                icon: IconAlertSquareRounded,
                backgroundColor: palette.new?.background.elements.default,
                borderColor: palette.new?.border.neutral.default,
                fontColor: palette.new?.text.neutral.lighter,
            };
        case 'disabled':
            return {
                backgroundColor: palette.new?.background.elements.disabled,
                borderColor: palette.new?.border.neutral.default,
                fontColor: palette.new?.text.neutral.disabled,
            };
        case 'error':
        default:
            return {
                icon: IconExclamationCircle,
                backgroundColor: palette.new?.background.feedback.error,
                borderColor: palette.new?.border.states.error,
                fontColor: palette.new?.text.feedback.error,
            };
    }
};
