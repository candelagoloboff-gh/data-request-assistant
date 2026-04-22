import { type UseInfiniteQueryResult } from 'react-query';
import { type ConditionGroupValues } from '../../ConditionGroup/types';
import { type DefaultItemType } from '../../ConditionLine/types';
import { type AlertProps } from '../../../design-system/Alert/types';
import { type TitleProps } from '../../../design-system/Title/types';
import { type SxProps } from '@mui/material';
import { type CountServiceResult } from '../hooks/useCriteriaDrawer/types';
import { type UseIndividualCriteriaDrawerProps } from '../hooks/useIndividualCriteriaDrawer/types';
import { type SegmentationCriteriaDrawerProps, type UseSegmentationCriteriaDrawerProps } from '../hooks/useSegmentationCriteriaDrawer/types';
import { type SelectedCollaboratorsDrawerProps } from '../hooks/useSelectedCollaboratorsDrawer/types';
/** Supported audience criteria types. */
export declare enum CriteriaType {
    ALL = "ALL",
    SEGMENTATION = "SEGMENTATION",
    INDIVIDUAL = "INDIVIDUAL"
}
/**
 * Data stored for the "entire community" criteria.
 * Contains no additional configuration beyond the type discriminator.
 */
export type AllCriteriaEntry = {
    type: CriteriaType.ALL;
};
/**
 * Data stored for a segmentation-based criteria.
 *
 * @template FieldItemType - Type for selectable field items.
 * @template ValueItemType - Type for selectable value items.
 */
export type SegmentationCriteriaEntry<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = {
    type: CriteriaType.SEGMENTATION;
    /** Condition rules that define the segmentation. */
    conditions: ConditionGroupValues<FieldItemType, ValueItemType>;
};
/**
 * Data stored for an individual-collaborator criteria.
 */
export type IndividualCriteriaEntry = {
    type: CriteriaType.INDIVIDUAL;
    /** Set of manually selected collaborator IDs. */
    userIds: Set<string | number>;
};
/** Union of all possible criteria entries. */
export type CriteriaEntry<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = AllCriteriaEntry | SegmentationCriteriaEntry<FieldItemType, ValueItemType> | IndividualCriteriaEntry;
/**
 * Form values shape managed by the external `useFormContext`.
 *
 * @template FieldItemType - Type for selectable field items.
 * @template ValueItemType - Type for selectable value items.
 */
export type AudienceFormValues<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = {
    /** List of audience criteria entries currently configured. */
    criterias: CriteriaEntry<FieldItemType, ValueItemType>[];
};
/**
 * Props for the Audience component.
 *
 * @template FieldItemType - Type for selectable field items.
 * @template ValueItemType - Type for selectable value items.
 */
export type AudienceProps<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = {
    /** Custom title. Falls back to translated "Asignación". */
    title?: string;
    /** Custom description. Falls back to translated default. */
    description?: string;
    /** Props forwarded to `useSegmentationCriteriaDrawer` (excluding `defaultValues`) and `inputProps` forwarded when the drawer is shown. */
    segmentationDrawerProps: Omit<UseSegmentationCriteriaDrawerProps<FieldItemType, ValueItemType>, 'defaultValues'> & Pick<SegmentationCriteriaDrawerProps<FieldItemType, ValueItemType>, 'inputProps'>;
    /**
     * Props forwarded to `useIndividualCriteriaDrawer` (excluding `defaultValues`).
     *
     * Replaces the static `usersQuery` with a `useUsersQuery` hook so the
     * query stays reactive to the drawer's internal search field.
     */
    individualDrawerProps: Omit<UseIndividualCriteriaDrawerProps, 'defaultValues' | 'inputProps'> & {
        inputProps: Omit<UseIndividualCriteriaDrawerProps['inputProps'], 'usersQuery'> & {
            useUsersQuery: (search: string) => UseInfiniteQueryResult;
        };
    };
    /** Props for the selected collaborators drawer. */
    selectedCollaboratorsDrawerProps: Pick<SelectedCollaboratorsDrawerProps, 'service' | 'queryKey'>;
    /** Callback that returns a human-readable description for a segmentation criteria entry. */
    getSegmentationDescription: (entry: SegmentationCriteriaEntry<FieldItemType, ValueItemType>) => string;
    /** Callback that returns a human-readable description for an individual criteria entry. */
    getIndividualDescription: (entry: IndividualCriteriaEntry) => string;
    /**
     * Hook that reactively computes the collaborator count
     * from the current form values (criterias). The button shows
     * a loading state while the count is fetching.
     *
     * Must be a stable function reference (module-level or memoised).
     */
    useCount: (formValues: AudienceFormValues<FieldItemType, ValueItemType>) => CountServiceResult;
    /**
     * Intercepts the delete action on a criteria card.
     * When provided, clicking the delete icon calls this function instead of
     * removing the entry immediately. Call `confirmDelete` when ready to
     * proceed with the removal (e.g. after the user confirms in a modal).
     */
    onBeforeDelete?: (index: number, entry: CriteriaEntry<FieldItemType, ValueItemType>, confirmDelete: () => void) => void;
    /** Props forwarded to inner slot components. */
    slotProps?: {
        title?: Partial<TitleProps>;
        /** When provided, renders a HuAlert between the title and the criteria content. */
        alert?: AlertProps;
    };
    /** MUI `sx` style overrides applied to the root `Stack`. */
    sx?: SxProps;
};
/** Props for the CriteriaSelector sub-component (empty state). */
export type CriteriaSelectorProps<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = Pick<AudienceProps<FieldItemType, ValueItemType>, 'segmentationDrawerProps' | 'individualDrawerProps'>;
/** Props for the CriteriaSummary sub-component (selected state). */
export type CriteriaSummaryProps<FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType> = Pick<AudienceProps<FieldItemType, ValueItemType>, 'segmentationDrawerProps' | 'individualDrawerProps' | 'getSegmentationDescription' | 'getIndividualDescription' | 'onBeforeDelete'>;
