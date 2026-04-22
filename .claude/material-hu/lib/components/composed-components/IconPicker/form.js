import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import IconPicker from '.';
const FormIconPicker = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field }) => (_jsx(IconPicker, { ...inputProps, value: field.value, onChange: field.onChange })) }));
};
export default FormIconPicker;
