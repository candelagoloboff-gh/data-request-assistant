import { type CoachMarkStep, type CoachMarkStepWithRef } from './types';
export declare const useCoachRefs: (steps: CoachMarkStep[]) => {
    stepsWithRefs: CoachMarkStepWithRef[];
    setRef: (index: number) => (node: Element | null) => void;
};
