import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import Switcher from '.';
const FormSwitcher = ({ name, switcherProps, rules, }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { value, onChange } }) => (_jsx(Switcher, { ...switcherProps, value: Boolean(value), onChange: onChange })) }));
};
export default FormSwitcher;
