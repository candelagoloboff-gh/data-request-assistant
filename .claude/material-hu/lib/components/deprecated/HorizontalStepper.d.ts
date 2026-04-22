import { type FC, type ReactNode } from 'react';
import { type StepButtonProps, type StepLabelProps, type StepProps, type StepperProps } from '@mui/material';
export type StepType = {
    id: string;
    label: string;
    content: (info: {
        id: string;
        activeStep: number;
    }) => ReactNode;
    completed?: boolean;
    disabled?: boolean;
    stepProps?: StepProps;
    stepLabelProps?: StepLabelProps;
    stepButtonProps?: StepButtonProps;
};
export type HorizontalStepperProps = StepperProps & {
    steps: StepType[];
    disabled?: boolean;
    clickable?: boolean;
    onSelectStep?: (index: number) => void;
    onClose?: () => void;
    closeLabel?: string;
    title?: string;
    titleRightComponent?: ReactNode;
    actions?: ReactNode;
    backButton?: {
        onClick?: () => void;
        getLabel?: (step: StepType) => string | null;
        disabled?: boolean;
    };
    nextButton?: {
        onClick?: () => void;
        getLabel?: (step: StepType) => string | null;
        disabled?: boolean;
    };
    finishButton?: {
        onClick?: () => void;
        label?: string;
        disabled?: boolean;
    };
    stateLabels?: {
        active?: string;
        completed?: string;
        pending?: string;
    };
};
/**
 * @deprecated Use HuStepper instead
 */
export declare const HorizontalStepper: FC<HorizontalStepperProps>;
export default HorizontalStepper;
