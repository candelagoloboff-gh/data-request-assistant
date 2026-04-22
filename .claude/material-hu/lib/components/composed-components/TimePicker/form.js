import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import TimePicker from '.';
const FormTimePicker = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { ref, ...field }, fieldState: { error } }) => (_jsx(TimePicker, { ...field, ...inputProps, inputRef: ref, error: inputProps.error || !!error, errorText: inputProps.hideErrorText
                ? ''
                : error?.message || inputProps.errorText })) }));
};
export default FormTimePicker;
