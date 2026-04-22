import { type PopperPlacementType } from '@mui/material';
export type CoachmarkProps = {
    /** Unique identifier for the coachmark instance */
    id: string;
    /** List of steps with their associated DOM element refs */
    steps: CoachMarkStepWithRef[];
    /** Hides the footer navigation when there is only one step */
    hideFooterOnOnlyOneStep?: boolean;
    /** Disables the coachmark entirely */
    disableCoachmark?: boolean;
    /** Custom label for the finish/end button */
    customEndLabel?: string;
    /** Whether closing the coachmark marks it as finished */
    finishOnClose?: boolean;
    /** Callback fired when the coachmark is closed */
    onClose?: () => void;
    /** Callback fired when the active step changes */
    onStepChange?: (step: number) => void;
};
export type CoachMarkStep = {
    /** Optional image URL displayed at the top of the step */
    image?: string;
    /** Title text for the step */
    title: string;
    /** Body description text for the step */
    description: string;
    /** Popper placement relative to the target element */
    placement?: PopperPlacementType;
    /** CSS transform applied to the arrow element */
    arrowTransform?: string;
};
export type CoachMarkStepWithRef = CoachMarkStep & {
    /** DOM element the coachmark step is anchored to */
    ref: Element | null;
};
