import { type FC } from 'react';
import { type Control, type FieldValues } from 'react-hook-form';
import { type TextFieldProps } from '@mui/material';
import { type FormValues as ServerPaginationFormValues } from '../../../../hooks/useServerPagination';
type BuildSearchbarParams<T extends FieldValues> = {
    control: Control<T>;
    setValue: (name: keyof T, value: T[keyof T]) => void;
    defaultQuery?: string;
};
type SearchBarControllerParams = {
    hasCounter?: boolean;
    helperText?: string;
} & Omit<TextFieldProps, 'helperText'>;
declare const buildSearchbar: ({ control, setValue, defaultQuery, }: BuildSearchbarParams<ServerPaginationFormValues>) => FC<SearchBarControllerParams>;
export default buildSearchbar;
