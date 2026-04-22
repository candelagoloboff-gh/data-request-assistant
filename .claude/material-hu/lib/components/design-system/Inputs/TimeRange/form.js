import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputTimeRange from '.';
const FormInputTimeRange = ({ name, inputProps, rules, }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { ref, ...field }, fieldState: { error } }) => (_jsx(InputTimeRange, { value: field.value || [null, null], onChange: field.onChange, ...inputProps, error: inputProps.error || !!error, errorText: error?.message || inputProps.errorText })) }));
};
export default FormInputTimeRange;
