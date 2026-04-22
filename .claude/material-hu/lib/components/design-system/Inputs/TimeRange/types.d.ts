import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type InputTimeProps } from '../Time/types';
export type TimeRangeValue = [Date | null, Date | null];
type SharedInputTimeProps = Omit<InputTimeProps, 'value' | 'onChange' | 'label' | 'helperText' | 'errorText' | 'error' | 'sx' | 'fullWidth'>;
export type InputTimeRangeProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    disabled?: boolean;
    value: TimeRangeValue;
    onChange: (value: TimeRangeValue) => void;
    startProps?: SharedInputTimeProps;
    endProps?: SharedInputTimeProps;
};
export type FormInputTimeRangeProps = {
    name: string;
    inputProps: Omit<InputTimeRangeProps, 'value' | 'onChange'>;
    rules?: ControllerProps['rules'];
};
export {};
