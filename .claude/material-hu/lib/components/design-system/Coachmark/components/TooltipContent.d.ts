import { type CoachMarkStepWithRef } from '../types';
type TooltipContentProps = {
    step: CoachMarkStepWithRef;
    currentStep: number;
    steps: CoachMarkStepWithRef[];
    hideFooterOnOnlyOneStep: boolean;
    setCurrentStep: (step: number) => void;
    onDismiss: () => void;
    onFinish: () => void;
    customEndLabel?: string;
    onStepChange?: (step: number) => void;
};
declare const TooltipContent: ({ step, currentStep, steps, hideFooterOnOnlyOneStep, setCurrentStep, onDismiss, onFinish, customEndLabel, onStepChange, }: TooltipContentProps) => import("react/jsx-runtime").JSX.Element;
export default TooltipContent;
