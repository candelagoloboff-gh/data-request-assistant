import { type ControllerProps } from 'react-hook-form';
import { type TextFieldProps } from '@mui/material';
export type InputOtpProps = {
    /** Custom styles applied to the root element */
    sx?: TextFieldProps['sx'];
    /** Applies error styling to the digit boxes */
    error?: TextFieldProps['error'];
    /** Prevents user interaction with the input */
    disabled?: TextFieldProps['disabled'];
    /** Focuses the first digit box on mount */
    autoFocus?: TextFieldProps['autoFocus'];
} & {
    /** Number of individual digit boxes to render */
    length?: number;
    /** Callback fired when any digit changes */
    onChange: (value: string) => void;
    /** Callback fired when all digits have been filled */
    onComplete?: () => void;
    /** Current OTP string value */
    value: string;
    /** Renders the digit boxes with rounded corners */
    rounded?: boolean;
    /** Masks the input like a password field */
    password?: boolean;
    /** Label displayed above the OTP input */
    label?: string;
    /** Helper text shown below the input */
    helperText?: string;
    /** Applies success styling to the input */
    success?: boolean;
};
export type FormInputOtpProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
    /** Props forwarded to the OTP input component */
    inputOtpProps?: Omit<InputOtpProps, 'value' | 'onChange'>;
};
