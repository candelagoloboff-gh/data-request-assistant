import { type AutocompleteOption, type AutocompleteProps } from '../../../design-system/Inputs/Autocomplete/types';
import { type SxProps } from '@mui/material';
/** Props for the CriteriaAutocomplete component. */
export type CriteriaAutocompleteProps = {
    /** Callback fired when the individual collaborator option is selected. If omitted the option is not shown. */
    onIndividual?: () => void;
    /** Callback fired when the segmentation group option is selected. If omitted the option is not shown. */
    onSegmentation?: () => void;
    /** Callback fired when the entire community option is selected. If omitted the option is not shown. */
    onAll?: () => void;
    /** When `true`, disables the autocomplete input. @default false */
    disabled?: boolean;
    /** MUI `sx` style overrides applied to the root `Autocomplete`. */
    sx?: SxProps;
    /** Props forwarded to each inner slot of the component. */
    slotProps?: CriteriaAutocompleteSlotProps;
};
/** Slot-level prop overrides for inner elements of CriteriaAutocomplete. */
export type CriteriaAutocompleteSlotProps = {
    /** Props forwarded to the root `Autocomplete` component. */
    root?: Partial<AutocompleteProps<CriteriaAutocompleteOption>>;
};
/** Shape of each option rendered in the criteria dropdown. Extends the base autocomplete option with a custom card component and click handler. */
export type CriteriaAutocompleteOption = AutocompleteOption & {
    /** React component rendered as the option row (e.g. IndividualCriteriaCard, SegmentationCriteriaCard, AllCriteriaCard). */
    Item: React.ElementType;
    /** Callback invoked when the option is selected. */
    onClick: () => void;
};
export declare enum CriteriaTypes {
    USERS = "USERS",
    ITEMS = "ITEMS",
    ALL = "ALL"
}
