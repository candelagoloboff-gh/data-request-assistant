import { type ReactNode } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps, type TooltipProps } from '@mui/material';
import { type CustomInputProps } from '../Base/CustomInput/types';
import { type CustomSelectOption } from '../Base/CustomSelect/types';
export type InputValueTransform = {
    /** Transforms the value before displaying it in the input */
    input?: (value: string) => string;
    /** Transforms the value before passing it to onChange */
    output?: (value: string) => string;
};
export type LabelTooltipProps = Omit<TooltipProps, 'children'> & {
    /** Size of the tooltip trigger icon in pixels */
    iconSize?: number;
};
export type InputProps = {
    /** Custom styles applied to the root element */
    sx?: FormControlProps['sx'];
    /** Makes the input expand to fill its container width */
    fullWidth?: FormControlProps['fullWidth'];
    /** Prevents user interaction with the input */
    disabled?: FormControlProps['disabled'];
} & {
    /** Label displayed above the input */
    label?: string;
    /** Helper text shown below the input */
    helperText?: string | ((value: CustomSelectOption['value']) => string);
    /** Error message shown below the input when error is true */
    errorText?: string;
    /** Applies error styling */
    error?: boolean;
    /** Shows a character counter below the input */
    hasCounter?: boolean;
    /** Node rendered at the start of the input */
    startAdornment?: ReactNode;
    /** Shows a clear button to reset the input value */
    showClear?: boolean;
    /** Vertical alignment of the start adornment */
    startAdormentPosition?: 'start' | 'center' | 'end';
    /** HTML id attribute for the input element */
    id?: string;
    /** Functions to transform the input value on read and write */
    transform?: InputValueTransform;
    /** Callback fired on key down inside the input */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Callback fired when the input loses focus */
    onBlur?: () => void;
    /** HTML name attribute for the input element */
    name?: string;
    /** Shows a bullet point before the helper text */
    hasHelperBullet?: boolean;
    /** Tooltip text shown next to the label via an info icon */
    labelTooltip?: string;
    /** Props forwarded to inner slot components */
    slotProps?: {
        labelTooltip?: Omit<TooltipProps, 'title' | 'children'>;
    };
    /** Hides the error text even when error is true */
    hideErrorText?: boolean;
} & CustomInputProps;
export type FormInputClassicProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Classic input component */
    inputProps: Omit<InputProps, 'onChange' | 'value'> & {
        onBlur?: () => void;
        size?: 'small' | 'medium';
    };
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
