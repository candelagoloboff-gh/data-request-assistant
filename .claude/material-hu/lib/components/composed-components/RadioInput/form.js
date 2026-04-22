import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import RadioInput from '.';
const FormRadioInput = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field, fieldState: { error } }) => (_jsx(RadioInput, { ...field, ...inputProps, name: name, error: !!error })) }));
};
export default FormRadioInput;
