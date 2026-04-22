import { type InputProps } from '../Classic/types';
type InputPasswordProps = Omit<InputProps, 'transform'>;
declare const InputPassword: ({ onChange, value, label, success, error, errorText, helperText, disabled, sx, fullWidth, hasCounter, maxLength, showClear, size, ...inputProps }: InputPasswordProps) => import("react/jsx-runtime").JSX.Element;
export type { InputPasswordProps };
export default InputPassword;
