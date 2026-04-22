import { type PillsProps } from '../../Pills/types';
import { type HeaderBaseProps, type HeaderExtraAction, type HeaderMainAction, type HeaderSlotProps } from '../types';
/** Primary action button or dropdown rendered in the TaskFocus header toolbar */
export type TaskFocusMainAction = HeaderMainAction;
/** Secondary action shown in the TaskFocus header overflow menu */
export type TaskFocusExtraAction = HeaderExtraAction;
/** Slot props for customising individual sub-components of TaskFocusHeader */
export type SlotProps = HeaderSlotProps;
/** Props for the TaskFocusHeader component */
export type TaskFocusHeaderProps = HeaderBaseProps & {
    /**
     * @deprecated Use pillLabel instead for label and slotProps.pill for props
     */
    pillProps?: PillsProps | undefined;
};
