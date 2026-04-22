import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type CustomSelectOption, type CustomSelectProps } from '../Base/CustomSelect/types';
export type InputSelectProps = {
    /** Custom styles applied to the root element */
    sx?: FormControlProps['sx'];
    /** Makes the select expand to fill its container width */
    fullWidth?: FormControlProps['fullWidth'];
    /** Prevents user interaction with the select */
    disabled?: FormControlProps['disabled'];
} & CustomSelectProps & {
    /** Label displayed above the select */
    label?: string;
    /** Helper text shown below the select */
    helperText?: string | ((value: CustomSelectOption['value']) => string);
    /** Error message shown when error is true */
    errorText?: string;
    /** Applies error styling */
    error?: boolean;
    /** Applies success styling */
    success?: boolean;
};
export type FormInputSelectProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Select input component */
    inputProps: Pick<InputSelectProps, 'label' | 'placeholder' | 'sx' | 'helperText' | 'options' | 'disabled' | 'allowClear' | 'renderOption' | 'success'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
