import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import RangeDatePicker from '.';
const FormRangeDatePicker = ({ name, inputProps, rules, }) => {
    return (_jsx(Controller, { render: ({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (_jsx(RangeDatePicker, { value: field.value || [null, null], onChange: field.onChange, ...inputProps, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormRangeDatePicker;
