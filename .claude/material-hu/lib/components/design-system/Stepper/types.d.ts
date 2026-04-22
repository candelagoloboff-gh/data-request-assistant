import { type StackProps } from '@mui/material';
export type StepConfig = {
    /** Unique identifier for the step */
    id: string;
    /** Display label for the step */
    title?: string;
    /** Secondary label shown below the title */
    subtitle?: string;
    /** Custom number to display inside the step indicator */
    number?: number;
    /** Whether to render the step number inside the indicator */
    showNumber?: boolean;
};
export type StepperProps = {
    /** Marks all steps before the current one as completed */
    completeBeforeCurrent?: boolean;
    /** Indexes of steps that are marked as completed */
    completedSteps?: number[];
    /** Index of the currently active step */
    currentStep?: number;
    /** Indexes of steps that are in an error state */
    errorSteps?: number[];
    /** Array of step configuration objects */
    steps: StepConfig[];
    /** Custom styles applied to the root element */
    sx?: StackProps['sx'];
};
