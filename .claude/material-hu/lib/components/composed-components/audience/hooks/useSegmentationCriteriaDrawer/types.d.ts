import { type CollaboratorsReachProps, type CriteriaDrawerProps } from '../../../audience/hooks/useCriteriaDrawer/types';
import { type ConditionGroupValues, type FormConditionGroupProps } from '../../../ConditionGroup/types';
import { type DefaultItemType } from '../../../ConditionLine/types';
/**
 * Form values managed by the segmentation criteria drawer.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType).
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType).
 */
export type SegmentationCriteriaValues<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Array of condition lines that define the segmentation rules. */
    conditions: ConditionGroupValues<FieldItemType, ValueItemType>;
};
/**
 * Props for the `useSegmentationCriteriaDrawer` hook.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType).
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType).
 */
export type UseSegmentationCriteriaDrawerProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Initial form values used to populate the segmentation criteria form. */
    defaultValues: SegmentationCriteriaValues<FieldItemType, ValueItemType>;
    /**
     * Reactive collaborators-reach configuration.
     * When provided, a footer alert is rendered showing the collaborator count,
     * a loading skeleton, or an empty-state message depending on form and fetch state.
     */
    collaboratorsReach?: CollaboratorsReachProps<SegmentationCriteriaValues<FieldItemType, ValueItemType>>;
};
/**
 * Props passed to `showSegmentationCriteriaDrawer` to open the drawer.
 *
 * Inherits most props from `CriteriaDrawerProps` while omitting `title`,
 * `description`, `cancelDescription`, and `children`, which are provided
 * internally by the hook with translated values.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType).
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType).
 */
export type SegmentationCriteriaDrawerProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = Omit<CriteriaDrawerProps<SegmentationCriteriaValues<FieldItemType, ValueItemType>>, 'title' | 'description' | 'cancelDescription' | 'children'> & Pick<FormConditionGroupProps<FieldItemType, ValueItemType>, 'inputProps'>;
