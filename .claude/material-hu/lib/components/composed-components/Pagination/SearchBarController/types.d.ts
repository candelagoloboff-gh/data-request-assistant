import { type Control, type FieldValues } from 'react-hook-form';
import { type TextFieldProps } from '@mui/material';
export type BuildSearchbarParams<T extends FieldValues> = {
    control: Control<T>;
    setValue: (name: keyof T, value: T[keyof T]) => void;
    defaultQuery?: string;
};
export type SearchBarControllerParams = {
    hasCounter?: boolean;
    helperText?: string;
} & Omit<TextFieldProps, 'helperText'>;
