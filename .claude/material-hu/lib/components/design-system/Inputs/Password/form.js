import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputPassword from '.';
const FormInputPassword = ({ name, inputProps, rules, customOnChange, }) => {
    const handleChange = (callback) => (value) => {
        callback(value);
        if (customOnChange) {
            customOnChange(value);
        }
    };
    return (_jsx(Controller, { render: ({ field: { ref, onBlur, value, onChange, ...field }, fieldState: { error }, }) => (_jsx(InputPassword, { ...field, ...inputProps, value: value, onChange: handleChange(onChange), inputRef: ref, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormInputPassword;
