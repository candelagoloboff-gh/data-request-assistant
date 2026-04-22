import { type ReactNode } from 'react';
import { type StepperProps } from '@mui/material';
export type CustomStepperProps = {
    steps: {
        label: string;
        content?: ReactNode;
        completed?: boolean;
        expanded?: boolean;
        substeps?: {
            label: string;
        }[];
    }[];
    activeSubstep?: number;
    stepperProps?: StepperProps;
    onStepClick?: Function;
};
/**
 * @deprecated Use HuStepper instead
 */
declare const CustomStepper: ({ steps, stepperProps, onStepClick, activeSubstep, }: CustomStepperProps) => import("react/jsx-runtime").JSX.Element;
export default CustomStepper;
