import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import DatePicker from '.';
const FormDatePicker = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { render: ({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (_jsx(DatePicker, { ...field, ...inputProps, inputRef: ref, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormDatePicker;
