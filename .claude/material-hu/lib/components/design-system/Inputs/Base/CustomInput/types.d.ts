import { type ReactNode } from 'react';
import { type OutlinedInputProps, type SxProps } from '@mui/material';
import { type InputValueTransform } from '../../Classic/types';
export type CustomInputProps = Pick<OutlinedInputProps, 'placeholder' | 'inputRef' | 'multiline' | 'disabled' | 'minRows' | 'maxRows' | 'onFocus' | 'autoFocus' | 'autoComplete' | 'autoCorrect' | 'autoCapitalize' | 'aria-autocomplete' | 'aria-labelledby' | 'aria-describedby' | 'type' | 'onKeyDown' | 'onBlur' | 'name' | 'inputMode' | 'onPaste'> & {
    value: string;
    success?: boolean;
    loading?: boolean;
    maxLength?: number;
    onChange?: (value: string) => void;
    startAdornment?: ReactNode;
    sxInput?: SxProps;
    showClear?: boolean;
    startAdormentPosition?: 'start' | 'center' | 'end';
    id?: string;
    transform?: InputValueTransform;
    endAdornment?: ReactNode;
    size?: 'small' | 'medium';
    step?: number;
};
