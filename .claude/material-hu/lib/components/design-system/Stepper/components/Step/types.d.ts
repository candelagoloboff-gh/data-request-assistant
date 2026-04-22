import { type StepConfig } from '../../types';
export type StepProps = StepConfig & {
    /** Whether this step is the currently active step */
    isCurrent?: boolean;
    /** Whether this step has been completed */
    isCompleted?: boolean;
    /** Whether this step is the last in the sequence */
    isLast?: boolean;
    /** Whether this step is in an error state */
    hasError?: boolean;
};
