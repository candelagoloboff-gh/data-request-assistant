import { type FC, type ReactNode } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type FormControlLabelProps, type FormHelperTextProps, type RadioGroupProps, type RadioProps, type StackProps } from '@mui/material';
export type Option = {
    value: any;
    label: ReactNode;
    helperText?: string;
};
export type FormRadioCustomGroupProps = Omit<RadioGroupProps, 'name'> & {
    name: string;
    options: Option[];
    radioProps?: RadioProps;
    labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
    helperTextProps?: FormHelperTextProps;
    optionContainerProps?: StackProps;
    column?: boolean;
    fullWidth?: boolean;
    rules?: ControllerProps['rules'];
};
/**
 * @deprecated Use HuFormRadioGroup instead
 */
export declare const FormRadioCustomGroup: FC<FormRadioCustomGroupProps>;
export default FormRadioCustomGroup;
