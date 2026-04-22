import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type CustomRangePickerProps, type DateRange } from '../Base/CustomRangeDatePicker/types';
export type RangeDatePickerProps = {
    /** Custom styles applied to the root element */
    sx?: FormControlProps['sx'];
    /** Makes the range picker expand to fill its container width */
    fullWidth?: FormControlProps['fullWidth'];
} & {
    /** Label displayed above the date range picker */
    label?: string;
    /** Helper text shown below the picker */
    helperText?: string;
    /** Error message shown when error is true */
    errorText?: string;
    /** Applies error styling */
    error?: boolean;
    /** Prevents user interaction with the picker */
    disabled?: boolean;
    /** Currently selected date range */
    value: DateRange;
    /** Shows a button to clear the selected range */
    enableClear?: boolean;
    /** Callback fired when the date range changes */
    onChange: (value: DateRange) => void;
} & Omit<CustomRangePickerProps, 'value' | 'onChange'>;
export type FormRangePickerProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the RangeDatePicker component */
    inputProps: Pick<RangeDatePickerProps, 'label' | 'helperText' | 'dateFormatter' | 'disabled' | 'sx' | 'minMaxDatesDifference' | 'datePlaceholder' | 'minDate' | 'enableClear' | 'maxDate' | 'fullWidth' | 'slotProps'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
