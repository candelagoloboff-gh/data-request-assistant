import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import Checkbox from '.';
const FormCheckbox = ({ name, checkBoxProps, rules }) => {
    return (_jsx(Controller, { render: ({ field: { value, ref, ...field }, fieldState: { error } }) => (_jsx(Checkbox, { checked: Boolean(value), ...field, ...checkBoxProps, inputRef: ref, error: !!error })), name: name, rules: rules }));
};
export default FormCheckbox;
