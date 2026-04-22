import { type CollaboratorsReachProps, type CriteriaDrawerProps } from '../../../audience/hooks/useCriteriaDrawer/types';
import { type FormIndividualSelectionProps } from '../../../audience/IndividualSelection/types';
/** Form values managed by the individual criteria drawer. */
export type IndividualCriteriaValues = {
    /** Set of selected collaborator IDs. */
    userIds?: Set<string | number>;
    /** Current search text used to filter the collaborator list. */
    search?: string;
};
/**
 * Props for the `useIndividualCriteriaDrawer` hook.
 *
 * `inputProps` is accepted at hook level (instead of show level) so that
 * reactive dependencies like `usersQuery` stay up-to-date while the drawer
 * is open.
 */
export type UseIndividualCriteriaDrawerProps = {
    /** Initial form values used to populate the individual criteria form. */
    defaultValues: IndividualCriteriaValues;
    /** Props forwarded to the underlying `IndividualSelection` component. Reactive — updates are reflected while the drawer is open. */
    inputProps: FormIndividualSelectionProps['inputProps'];
    /**
     * Reactive collaborators-reach configuration.
     * When provided, a footer alert is rendered showing the collaborator count,
     * a loading skeleton, or an empty-state message depending on form and fetch state.
     */
    collaboratorsReach?: CollaboratorsReachProps<IndividualCriteriaValues>;
};
/**
 * Props passed to `showIndividualCriteriaDrawer` to open the drawer.
 *
 * Inherits most props from `CriteriaDrawerProps` while omitting `title`,
 * `description`, `cancelDescription`, and `children`, which are provided
 * internally by the hook with translated values.
 */
export type IndividualCriteriaDrawerProps = Omit<CriteriaDrawerProps<IndividualCriteriaValues>, 'title' | 'description' | 'cancelDescription' | 'children'>;
