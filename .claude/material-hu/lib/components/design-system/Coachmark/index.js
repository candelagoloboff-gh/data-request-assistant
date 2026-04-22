import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useTheme } from '@mui/material';
import Tooltip from '../Tooltip';
import TooltipContent from './components/TooltipContent';
// Module-level variable that persists until page reload
const dismissedCoachmarks = new Set();
const placementOffsets = {
    'left-start': -38,
    'right-start': -38,
    'left-end': 38,
    'right-end': 38,
};
const Coachmark = ({ id, steps, hideFooterOnOnlyOneStep = false, disableCoachmark, customEndLabel, finishOnClose = false, onClose, onStepChange, }) => {
    const theme = useTheme();
    const { spacing } = theme;
    const [currentStep, setCurrentStep] = useState(1);
    const [isDismissed, setIsDismissed] = useState(dismissedCoachmarks.has(id));
    const isFinished = localStorage.getItem(id) === 'true';
    const shouldHideCoachmarks = isFinished || isDismissed || disableCoachmark;
    const handleDismiss = () => {
        dismissedCoachmarks.add(id);
        setIsDismissed(true);
        onClose?.();
    };
    const handleFinish = () => {
        localStorage.setItem(id, 'true');
        handleDismiss();
    };
    return (_jsx(_Fragment, { children: steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCurrentStep = currentStep === stepNumber;
            const showTooltip = isCurrentStep && !shouldHideCoachmarks && Boolean(step.ref);
            return (_jsx(Tooltip, { open: showTooltip, title: showTooltip ? (_jsx(TooltipContent, { step: step, currentStep: currentStep, steps: steps, hideFooterOnOnlyOneStep: hideFooterOnOnlyOneStep, setCurrentStep: setCurrentStep, onDismiss: finishOnClose ? handleFinish : handleDismiss, onFinish: handleFinish, customEndLabel: customEndLabel, onStepChange: onStepChange })) : null, disableTooltip: !showTooltip, slotProps: {
                    arrow: {
                        sx: {
                            opacity: showTooltip ? 1 : 0,
                            color: theme.palette.new.background.elements.inverted,
                            fontSize: 24,
                            ...(step.arrowTransform && {
                                transform: `${step.arrowTransform} !important`,
                            }),
                            ...(!step.arrowTransform &&
                                (step.placement === 'left-start' ||
                                    step.placement === 'right-start') && {
                                transform: 'translate3d(0, 38px, 0px) !important',
                            }),
                        },
                    },
                    popper: {
                        anchorEl: step.ref,
                        placement: step.placement || 'top',
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [
                                        step.placement &&
                                            Object.keys(placementOffsets).includes(step.placement)
                                            ? placementOffsets[step.placement]
                                            : 0,
                                        32,
                                    ],
                                },
                            },
                        ],
                        sx: {
                            width: '312px',
                            '.MuiTooltip-tooltip': {
                                position: 'relative',
                                background: theme.palette.new.background.elements.inverted,
                                borderRadius: spacing(2),
                                p: 0,
                                maxWidth: 'unset',
                                '& > .MuiStack-root': {
                                    p: 0,
                                },
                            },
                        },
                    },
                }, children: _jsx("span", {}) }, `${id}-${stepNumber}`));
        }) }));
};
export default Coachmark;
