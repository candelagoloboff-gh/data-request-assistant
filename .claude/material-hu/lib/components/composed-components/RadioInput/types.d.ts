import { type ControllerProps } from 'react-hook-form';
import { type CustomLabelProps } from '../../design-system/Inputs/Base/CustomLabel/types';
import { type RadioButtonProps } from '../../design-system/RadioButton/RadioButton/types';
import { type FormControlProps, type RadioGroupProps, type SxProps } from '@mui/material';
export type RadioInputValue = number | string;
export type RadioInputOption = {
    /** The value of the option */
    value: RadioInputValue;
    /** The label */
    label: string;
    /** The description, shown behind the label */
    description?: string;
    /** Whether the component is disabled */
    disabled?: boolean;
};
export type RadioInputProps = {
    /** Name of the input */
    name: string;
    /** Current value of the input */
    value?: RadioInputValue;
    /** Callback for when the value changes */
    onChange?: (value: RadioInputValue) => void;
    /** Label of the input */
    label?: string;
    /** Whether the component is in error state */
    error?: boolean;
    /** Whether the component is in success state */
    success?: boolean;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Array of options to show as radio buttons */
    options: RadioInputOption[];
    /** Component styles */
    sx?: SxProps;
    /** Props for inner components */
    slotProps?: {
        root?: FormControlProps;
        label?: CustomLabelProps;
        radioGroup?: RadioGroupProps;
        radioButton?: RadioButtonProps;
    };
};
export type FormRadioInputProps = {
    name: string;
    inputProps: Omit<RadioInputProps, 'onChange' | 'value' | 'name'>;
    rules?: ControllerProps['rules'];
};
