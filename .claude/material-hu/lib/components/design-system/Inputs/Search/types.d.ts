import { type ControllerProps } from 'react-hook-form';
import { type InputProps } from '../Classic/types';
export type InputSearchProps = Omit<InputProps, 'startAdornment' | 'hasCounter'> & {
    /** Visual style variant for the search input */
    variant?: 'classic' | 'custom';
};
export type FormInputSearchProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Search input component */
    inputProps?: Pick<InputSearchProps, 'label' | 'placeholder' | 'variant' | 'sx' | 'disabled' | 'loading' | 'onChange' | 'onFocus' | 'autoFocus' | 'helperText'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
