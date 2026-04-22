import { type ControllerProps } from 'react-hook-form';
import { type RadioGroupProps, type RadioProps } from '@mui/material';
type Option = {
    value: any;
    label: string;
    helperText?: string;
    disabled?: boolean;
};
export type FormRadioButtonGroupProps = Omit<RadioGroupProps, 'name'> & {
    name: string;
    options: Option[];
    radioProps?: RadioProps;
    rules?: ControllerProps['rules'];
    disabled?: boolean;
};
export {};
