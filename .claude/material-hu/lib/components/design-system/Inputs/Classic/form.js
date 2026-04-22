import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputClassic from '.';
const FormInputClassic = ({ name, inputProps, rules, }) => {
    return (_jsx(Controller, { render: ({ field: { ref, onBlur: fieldOnBlur, ...field }, fieldState: { error }, }) => (_jsx(InputClassic, { ...field, ...inputProps, inputRef: ref, error: !!error || !!inputProps.error, errorText: inputProps.errorText || error?.message, onBlur: () => {
                fieldOnBlur();
                inputProps.onBlur?.();
            } })), name: name, rules: rules }));
};
export default FormInputClassic;
