import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers';
export type TimePickerProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium';
    hasHelperBullet?: boolean;
    minutesStep?: number;
    value: Date | null;
    placeholder?: string;
    timezone?: string;
    /** Hides the clock icon and disables opening the picker dropdown
     * @default false */
    noIcon?: boolean;
    /** Reference date used for time calculations and display
     * @default new Date() */
    referenceDate?: Date;
    /** Hide error text on input
     * @default false */
    hideErrorText?: boolean;
} & Omit<MuiTimePickerProps<Date>, 'value' | 'referenceDate'>;
export type FormTimePickerProps = {
    name: string;
    inputProps: Omit<TimePickerProps, 'onChange' | 'value'>;
    rules?: ControllerProps['rules'];
};
