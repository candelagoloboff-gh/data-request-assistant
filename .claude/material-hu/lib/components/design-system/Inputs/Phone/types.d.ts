import { type UseControllerProps } from 'react-hook-form';
import { type TextFieldProps } from '@mui/material';
import { type CountryCode } from 'libphonenumber-js/types';
import { type InputProps } from '../Classic/types';
export type InputPhoneProps = {
    /** Callback fired when content is pasted into the input */
    onPaste?: TextFieldProps['onPaste'];
    /** Focuses the input on mount */
    autoFocus?: TextFieldProps['autoFocus'];
    /** Callback fired on key down inside the input */
    onKeyDown?: TextFieldProps['onKeyDown'];
    /** Outer margin of the text field */
    margin?: TextFieldProps['margin'];
    /** Callback fired when the input is clicked */
    onClick?: TextFieldProps['onClick'];
    /** Props forwarded to the underlying HTML input element */
    inputProps?: TextFieldProps['inputProps'];
    /** Label displayed above the phone input */
    label?: InputProps['label'];
    /** Applies success styling */
    success?: InputProps['success'];
    /** Makes the input expand to fill its container width */
    fullWidth?: InputProps['fullWidth'];
    /** Prevents user interaction with the input */
    disabled?: InputProps['disabled'];
    /** Custom styles applied to the root element */
    sx?: InputProps['sx'];
    /** Helper text shown below the input */
    helperText?: InputProps['helperText'];
    /** Placeholder text shown when the input is empty */
    placeholder?: InputProps['placeholder'];
    /** Applies error styling */
    error?: InputProps['error'];
    /** Current phone number value */
    value?: InputProps['value'];
} & {
    /** Callback fired when the phone number or country changes */
    onChange: (value: string, countryCallingCode?: string) => void;
    /** Default country selected when the component mounts */
    defaultCountry?: CountryCode;
    /** Countries listed at the top of the country selector */
    preferredCountries?: CountryCode[];
};
export type FormInputPhoneProps = {
    /** Field name used by react-hook-form */
    name: UseControllerProps['name'];
    /** Validation rules for react-hook-form */
    rules?: UseControllerProps['rules'];
    /** Prevents user interaction with the field */
    disabled?: UseControllerProps['disabled'];
} & {
    /** Props forwarded to the Phone input component */
    inputProps: Omit<InputPhoneProps, 'value' | 'onChange'> & {
        /** Displays validation error messages below the field */
        showErrors?: boolean;
        /** When true, applies success styling to valid fields after the form is submitted. Defaults to `true`. */
        showSuccessOnSubmitted?: boolean;
    };
    /** When true, adds built-in `isPossiblePhoneNumber` validation. Defaults to `true`. */
    validatePhoneNumber?: boolean;
};
