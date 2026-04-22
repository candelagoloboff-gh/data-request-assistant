import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type CustomDatePickerProps } from '../Base/CustomDatePicker/types';
export type DatePickerProps = {
    /** Custom styles applied to the root element */
    sx?: FormControlProps['sx'];
    /** Makes the date picker expand to fill its container width */
    fullWidth?: FormControlProps['fullWidth'];
} & {
    /** Label displayed above the date picker */
    label?: string;
    /** Helper text shown below the date picker */
    helperText?: string;
    /** Error message shown when error is true */
    errorText?: string;
    /** Applies error styling */
    error?: boolean;
    /** Prevents user interaction with the date picker */
    disabled?: boolean;
    /** @deprecated This prop is not used anymore */
    placeholder?: string;
    /** Shows a button to clear the selected date */
    enableClear?: boolean;
} & CustomDatePickerProps;
export type FormDatePickerProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the DatePicker component */
    inputProps: Pick<DatePickerProps, 'label' | 'helperText' | 'placeholder' | 'disabled' | 'disableFuture' | 'disablePast' | 'minDate' | 'maxDate' | 'timezone' | 'enableClear' | 'size' | 'sx' | 'views' | 'fullWidth' | 'format' | 'slotProps' | 'onYearChange' | 'onMonthChange' | 'shouldDisableDate'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
