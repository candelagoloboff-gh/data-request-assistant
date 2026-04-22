import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type CustomTimePickerProps } from '../Base/CustomTimePicker/types';
export type InputTimeProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium';
    minutesStep?: number;
    value: Date | null;
    placeholder?: string;
    timezone?: string;
    /** @default false */
    noIcon?: boolean;
    /** @default new Date() */
    referenceDate?: Date;
    /** @default false */
    hideErrorText?: boolean;
    /** Forwarded to the underlying TimePicker via CustomTimePicker */
    slotProps?: CustomTimePickerProps['slotProps'];
} & Omit<CustomTimePickerProps, 'value' | 'error' | 'disabled' | 'size' | 'placeholder' | 'noIcon' | 'onTextFieldClick' | 'onTextFieldBlur' | 'sx' | 'slotProps'>;
export type FormInputTimeProps = {
    name: string;
    inputProps: Omit<InputTimeProps, 'onChange' | 'value'>;
    rules?: ControllerProps['rules'];
};
