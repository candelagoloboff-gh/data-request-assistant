import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import LikertSlider from './index';
const FormLikertSlider = ({ name, rules, inputProps, }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { onChange, value, ...fieldRest } }) => (_jsx(LikertSlider, { ...inputProps, ...fieldRest, value: value, onChange: (_event, nextValue) => onChange(nextValue) })) }));
};
export default FormLikertSlider;
