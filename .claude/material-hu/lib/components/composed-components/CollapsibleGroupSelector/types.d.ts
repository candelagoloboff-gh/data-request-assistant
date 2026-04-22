import { type SxProps, type Theme } from '@mui/material';
import { type SELECT_ALL_ROW } from './constants';
/** A single selectable option within a group */
export type GroupItem = {
    /** Unique identifier used as the form field key */
    value: string;
    /** Display text shown next to the checkbox */
    label: string;
};
/** A named collection of selectable items rendered inside an accordion */
export type Group = {
    /** Display name shown in the accordion header */
    name: string;
    /** Unique identifier for the group */
    value: string;
    /** Selectable options belonging to this group */
    items: GroupItem[];
};
export type CollapsibleGroupSelectorProps = {
    /** react-hook-form field path that maps to a `Record<string, boolean>` */
    fieldName: string;
    /** Groups of selectable items to render */
    groups: Group[];
    /** Heading displayed above the group list */
    title?: string;
    /**
     * Controls which accordion is expanded.
     * When omitted the component manages its own expanded state (uncontrolled).
     */
    expanded?: boolean;
    /** Fired when the expanded state changes (controlled mode) */
    onExpandedChange?: (expanded: boolean) => void;
    /** Shows a skeleton placeholder while data is loading */
    isLoading?: boolean;
    /** Label for the "select all" checkbox inside each group (defaults to `"Select all"`) */
    selectAllLabel?: string;
    /** Enables a search input inside each group accordion (defaults to `false`) */
    withSearch?: boolean;
    /** MUI sx prop forwarded to the root `Stack` */
    sx?: SxProps<Theme>;
};
/** A single row of the list of items */
export type ListRow = typeof SELECT_ALL_ROW | GroupItem;
/** A virtual row of the list of items */
export type VirtualRow = {
    index: number;
    start: number;
};
export type GroupAccordionProps = Pick<CollapsibleGroupSelectorProps, 'withSearch' | 'selectAllLabel'> & {
    /** The group of items to render */
    group: Group;
    /** react-hook-form field path for this group */
    groupFieldName: string;
    /** Whether the parent accordion is expanded */
    isParentExpanded: boolean;
    /** Whether this group's accordion is expanded */
    isExpanded: boolean;
    /** Callback to set the parent expanded state */
    setParentExpanded: (expanded: boolean) => void;
    /** Callback to set the expanded group by name */
    setExpandedGroup: (name: string | null) => void;
};
