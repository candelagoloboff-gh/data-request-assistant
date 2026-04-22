import { type ControllerProps } from 'react-hook-form';
import { type RadioGroupProps as MUIRadioGroupProps, type StackProps } from '@mui/material';
import { type RadioButtonProps } from '../../design-system/RadioButton/RadioButton/types';
import { type SelectionCardProps } from '../SelectionCard/types';
export type Option = {
    value: any;
    label: string;
    helperText?: string;
    disabled?: boolean;
};
export type RadioGroupSlotProps = {
    radioButton?: Omit<RadioButtonProps, 'label' | 'description' | 'onClick' | 'isActive' | 'value' | 'disabled'>;
    selectionCard?: Omit<SelectionCardProps, 'onClick' | 'checked'>;
    root?: StackProps;
};
export type RadioGroupProps = Omit<MUIRadioGroupProps, 'name'> & {
    options: Option[];
    value?: any;
    onChange?: (value: any) => void;
    error?: boolean;
    slotProps?: RadioGroupSlotProps;
};
export type FormRadioGroupProps = Omit<RadioGroupProps, 'name'> & {
    name: string;
    options: Option[];
    slotProps?: RadioGroupSlotProps;
    rules?: ControllerProps['rules'];
};
