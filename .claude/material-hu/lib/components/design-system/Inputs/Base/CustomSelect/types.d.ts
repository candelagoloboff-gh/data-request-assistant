import { type ReactNode } from 'react';
import { type SelectProps } from '@mui/material';
export type CustomSelectOption = {
    label: string;
    value: string | number;
};
export type CustomSelectProps = Pick<SelectProps, 'placeholder' | 'inputRef' | 'disabled' | 'MenuProps'> & {
    value: string;
    success?: boolean;
    onChange: (value: string) => void;
    options: CustomSelectOption[];
    allowClear?: boolean;
    renderOption?: (option: CustomSelectOption) => ReactNode;
    renderValue?: (option: CustomSelectOption) => ReactNode;
    hideErrorAdornment?: boolean;
};
