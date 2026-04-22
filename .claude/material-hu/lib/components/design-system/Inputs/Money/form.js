import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputMoney from '.';
const FormInputMoney = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { render: ({ field: { ref, onBlur, value, onChange, ...field }, fieldState: { error }, }) => (_jsx(InputMoney, { ...field, ...inputProps, value: value, onChange: newValue => onChange(newValue), inputRef: ref, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormInputMoney;
