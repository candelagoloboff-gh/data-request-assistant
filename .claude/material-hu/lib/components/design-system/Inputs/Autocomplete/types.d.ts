import { type Ref } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type AutocompleteChangeReason, type AutocompleteValue, type AutocompleteProps as MUIAutocompleteProps } from '@mui/material';
/**
 * @deprecated Use HuAutocomplete and HuAutocompleteProps instead.
 */
export type { MUIAutocompleteProps };
type BaseAutocompleteOption<TValue> = {
    /** Display text shown in the dropdown list */
    label: string;
    /** Underlying value submitted when this option is selected */
    value: TValue;
    /** Optional secondary text shown below the label in the dropdown */
    description?: string;
};
export type AutocompleteOption = BaseAutocompleteOption<string | number>;
export type TypedValueAutocompleteOption<TValue extends string | number = number> = BaseAutocompleteOption<TValue>;
/**
 * Extra props for the Autocomplete component
 */
type ExtraProps = {
    /** Applies error styling to the autocomplete field */
    hasError?: boolean;
    /** Helper text shown below the field */
    helperText?: string;
    /** Placeholder text shown when the input is empty */
    placeholder?: string;
    /** Label displayed above the input */
    label?: string;
    /** Ref forwarded to the underlying input element */
    fieldRef?: Ref<unknown>;
    /**
     * Callback fired when the create option is selected (instead of the `onChange` function).
     * Called with the input value as argument.
     */
    onCreate?: (inputValue: string) => void;
    /**
     * Callback fired when more options need to be loaded.
     * Used for infinite scrolling functionality.
     */
    onLoadMore?: () => void;
    /**
     * Whether there are more options available to load.
     * Used in conjunction with onLoadMore for infinite scrolling
     */
    hasMoreOptions?: boolean;
    /**
     * Whether the options are filtered on the server side. This means the `onInputChange`
     * is debounced and the options are the same as the ones passed in the `options` prop.
     */
    isServerFiltered?: boolean;
    /**
     * Enables list virtualization via react-window so only visible options are
     * rendered in the DOM. Opt-in to avoid affecting existing consumers.
     * @default false
     */
    virtualized?: boolean;
    /**
     * Caps the number of results returned by client-side filtering
     * (`createFilterOptions`). Only relevant when `isServerFiltered` is `false`.
     * Useful for large option sets where rendering all matches is unnecessary.
     * @default undefined (no limit)
     */
    filterLimit?: number;
    /**
     * HTML input type passed to the underlying TextField (e.g. `'number'`).
     */
    type?: React.HTMLInputTypeAttribute;
};
/**
 * Props for the Autocomplete component
 */
export type AutocompleteProps<TValue extends AutocompleteOption = AutocompleteOption, TMultiple extends boolean | undefined = false> = Omit<MUIAutocompleteProps<TValue, TMultiple, boolean, false>, 'ref' | 'renderInput' | 'getOptionLabel' | 'getOptionKey' | 'filterOptions' | 'onChange' | 'value' | 'noOptionsText'> & {
    onChange: (nextValue: AutocompleteValue<TValue, TMultiple, boolean, false>, reason?: AutocompleteChangeReason) => void;
    value: AutocompleteValue<TValue, TMultiple, boolean, false>;
    /** Message to display when no options match the current input value.
     * Can include both a title and optional description.
     */
    noOptionsMessage?: {
        title: string;
        description?: string;
    };
    /** Offset to determine when to show loading indicator relative to last option.
     * Default is 0, meaning loading indicator shows after last option.
     * Negative values will show loading indicator before last option(s).
     */
    loadMoreIndexOffset?: number;
} & ExtraProps;
export type FormAutocompleteProps<TValue extends AutocompleteOption = AutocompleteOption, TMultiple extends boolean | undefined = false> = {
    /** Field name used by react-hook-form */
    name: string;
    /** Options list passed to the autocomplete */
    options: AutocompleteProps<TValue, TMultiple>['options'];
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
    /** Props forwarded to the Autocomplete component */
    autocompleteProps?: Omit<AutocompleteProps<TValue, TMultiple>, 'value' | 'onChange' | 'options'>;
};
