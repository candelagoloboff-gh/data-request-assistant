import { type ControllerProps } from 'react-hook-form';
import { type InputProps } from '../Classic/types';
export type FormInputPasswordProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Classic input component */
    inputProps: Omit<InputProps, 'value' | 'onChange'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
    /** Additional onChange handler called alongside the form controller */
    customOnChange?: (value: string) => void;
};
