export type CheckboxAutocompleteOption = {
    /** Unique identifier for the option. */
    id: number;
    /** Primary text displayed for the option. */
    label: string;
    /** Secondary descriptive text for the option. */
    description: string;
    /** Whether the option is selected. */
    checked: boolean;
    /** Disables interaction with this option. */
    disabled?: boolean;
    /** Additional info text displayed to the right of the option. */
    info?: string;
};
export type CheckboxAutocompleteProps = {
    /** Field name used to register the value in the form. */
    name: string;
    /** Label text displayed on the search input. */
    label: string;
    /** List of available options to select from. */
    options: CheckboxAutocompleteOption[];
    /** Disables deletion of selected chips. */
    disabled?: boolean;
    /** Disables options that are not currently selected. */
    uncheckedDisabled?: boolean;
    /** Shows a loading state in the search input and menu. */
    searchLoading?: boolean;
    /** Disables the search input and closes the dropdown menu. */
    searchDisabled?: boolean;
    /** Indicates the search returned no results. */
    searchEmpty?: boolean;
    /** Title shown in the menu while results are loading. */
    searchLoadingTitle: string;
    /** Title shown in the menu when there are no results. */
    searchEmptyTitle: string;
    /** Helper text displayed below the search input. */
    helperText?: string;
};
