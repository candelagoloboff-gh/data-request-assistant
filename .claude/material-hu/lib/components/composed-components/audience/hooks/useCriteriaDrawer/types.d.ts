import { type DefaultValues, type FieldValues } from 'react-hook-form';
import { type StackProps, type SxProps, type TypographyProps } from '@mui/material';
import { type SelectedCollaboratorsDrawerContentProps } from '../useSelectedCollaboratorsDrawer/types';
/**
 * Result returned by the count service when fetching audience size reactively.
 */
export type CountServiceResult = {
    /** Total number of matching collaborators. */
    count: number;
    /** Whether the count is currently being fetched. */
    loading: boolean;
};
/**
 * Configuration for the collaborators-reach footer shown at the bottom of criteria drawers.
 *
 * Passed at **hook level** (not show level) so that `count` and `loading`
 * stay reactive while the drawer is open.
 */
export type CollaboratorsReachProps<TValues extends FieldValues> = {
    /**
     * Base cache key used by the selected-collaborators drawer's `useInfiniteQuery`.
     */
    queryKey: SelectedCollaboratorsDrawerContentProps['queryKey'];
    /** Optional callback fired when the "View collaborators" button is clicked, useful for event tracking. */
    onViewCollaborators?: () => void;
    /**
     * Hook that reactively returns the collaborator count based on the
     * current drawer form values. The footer updates as the user edits conditions.
     *
     * Must be a stable function reference (module-level or memoised).
     */
    useCount: (formValues: TValues) => CountServiceResult;
    /**
     * Hook that reactively returns a service function based on the
     * current drawer form values. The collaborators list reflects
     * the criteria being edited in the drawer.
     *
     * Must be a stable function reference (module-level or memoised).
     */
    useService: (formValues: TValues) => SelectedCollaboratorsDrawerContentProps['service'];
};
/**
 * Internal collaborators-reach configuration used by `useCriteriaDrawer`.
 * Extends the consumer-facing props with a form-aware emptiness check.
 */
export type CriteriaCollaboratorsReachConfig<TValues extends FieldValues> = CollaboratorsReachProps<TValues> & {
    /** Returns `true` when the form should be considered empty (no criteria selected). */
    isFormEmpty: (values: TValues) => boolean;
};
/** Props for the `useCriteriaDrawer` hook. */
export type UseCriteriaDrawerProps<TValues extends FieldValues> = {
    /** Initial form values used to populate the criteria form via react-hook-form. */
    defaultValues: DefaultValues<TValues>;
    /**
     * Reactive collaborators-reach configuration.
     * When provided, a footer alert is rendered showing the collaborator count,
     * a loading skeleton, or an empty-state message depending on form and fetch state.
     */
    collaboratorsReach?: CriteriaCollaboratorsReachConfig<TValues>;
};
/** Props passed to `showCriteriaDrawer` to configure the drawer instance. */
export type CriteriaDrawerProps<TValues extends FieldValues> = React.PropsWithChildren<{
    /** Callback fired when the drawer is closed (via overlay, close button, or cancel). */
    onClose?: () => void;
    /** Callback fired when the user confirms the form. Receives the submitted form values. */
    onConfirm: (values: TValues) => void;
    /** Title displayed in the drawer header. */
    title: string;
    /** Description text rendered at the top of the drawer content. */
    description: string;
    /** Custom body text shown in the cancel confirmation modal. Falls back to a default translation when not provided. */
    cancelDescription?: string;
    /** Whether the confirm and cancel buttons should be disabled. */
    disabled?: boolean;
    /** Whether to show a loading indicator on the confirm button. */
    loading?: boolean;
}>;
/** Props for the internal drawer content layout component. */
export type CriteriaDrawerContentProps = React.PropsWithChildren<{
    /** Description text displayed above the drawer body. */
    description: string;
    /** Custom styles applied to the root container. */
    sx?: SxProps;
    /** Props forwarded to inner sub-components. */
    slotProps?: CriteriaDrawerContentSlotProps;
}>;
/** Slot props for customising the inner elements of `CriteriaDrawerContent`. */
export type CriteriaDrawerContentSlotProps = {
    /** Props forwarded to the root `Stack` container. */
    root?: Partial<StackProps>;
    /** Props forwarded to the description `Typography` element. */
    description?: Partial<TypographyProps>;
};
/** Props for the cancel confirmation modal shown when closing with unsaved changes. */
export type CancelCriteriaModalProps = {
    /** Callback fired when the modal is dismissed without confirming. */
    onClose: () => void;
    /** Callback fired when the user confirms they want to discard changes and leave. */
    onConfirm: () => void;
    /** Custom body text for the confirmation modal. Falls back to a default translation. */
    body?: string;
};
