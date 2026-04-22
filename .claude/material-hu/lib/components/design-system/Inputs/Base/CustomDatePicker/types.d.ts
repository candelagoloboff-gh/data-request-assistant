import { type SxProps } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type DatePickerProps } from '@mui/x-date-pickers';
import { type PickersDayProps } from '@mui/x-date-pickers/PickersDay';
export type CustomDatePickerProps = DatePickerProps<Date> & {
    value: Date | null;
    /** @deprecated This prop is not used anymore */
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    enableClear?: boolean;
    size?: 'small' | 'medium';
    slotProps?: {
        day?: {
            sx?: SxProps<Theme>;
        };
        actionBar?: {
            sx?: SxProps<Theme>;
        };
    };
};
export type DatePickerDayProps = PickersDayProps<Date> & {
    timezone?: string;
};
