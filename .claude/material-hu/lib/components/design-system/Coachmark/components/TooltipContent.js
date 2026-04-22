import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconX } from '@tabler/icons-react';
import Title from '../../Title';
const TooltipContent = ({ step, currentStep, steps, hideFooterOnOnlyOneStep, setCurrentStep, onDismiss, onFinish, customEndLabel, onStepChange, }) => {
    const theme = useTheme();
    const { spacing } = theme;
    const { t } = useTranslation();
    const isLastStep = currentStep === steps.length;
    const textColor = theme.palette.new.text.neutral.inverted;
    const hideFooter = steps.length === 1 && hideFooterOnOnlyOneStep;
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { "aria-label": t('general:close'), onClick: () => {
                    onDismiss();
                }, sx: {
                    position: 'absolute',
                    top: spacing(1.5),
                    right: spacing(1.5),
                    backgroundColor: theme.palette.new.action.button.background.tertiary.hover,
                    p: spacing(0.5),
                    svg: {
                        color: theme.palette.new.background.elements.inverted,
                    },
                }, children: _jsx(IconX, { size: 16 }) }), step.image && (_jsx("img", { src: step.image, alt: "", style: {
                    borderTopLeftRadius: spacing(2),
                    borderTopRightRadius: spacing(2),
                    height: 176,
                    width: '100%',
                } })), _jsx(Stack, { sx: { px: 2, my: 2 }, children: _jsx(Title, { variant: "S", title: step.title, description: step.description, sx: {
                        '.MuiTypography-root': {
                            color: textColor,
                        },
                    } }) }), !hideFooter && (_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: steps.length > 1 ? 'space-between' : 'flex-end',
                    borderTop: `1px solid ${theme.palette.new.border.neutral.divider}`,
                    p: 2,
                }, children: [steps.length > 1 && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalXS", sx: {
                                    color: textColor,
                                }, children: t('general:loaded_of_total', {
                                    loaded: currentStep,
                                    total: steps.length,
                                }) }), currentStep === 1 && (_jsx(Button, { variant: "secondary", onClick: onDismiss, children: t('general:skip') })), currentStep !== 1 && (_jsx(Button, { variant: "secondary", onClick: () => {
                                    setCurrentStep(currentStep - 1);
                                    onStepChange?.(currentStep - 1);
                                }, children: t('general:back_alt') }))] })), isLastStep && (_jsx(Button, { variant: "primary", onClick: onFinish, children: customEndLabel || t('general:finish') })), !isLastStep && (_jsx(Button, { variant: "primary", onClick: () => {
                            setCurrentStep(currentStep + 1);
                            onStepChange?.(currentStep + 1);
                        }, children: t('general:next') }))] }))] }));
};
export default TooltipContent;
