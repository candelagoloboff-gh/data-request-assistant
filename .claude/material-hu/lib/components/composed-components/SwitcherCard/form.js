import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import SwitcherCard from '.';
const FormSwitcherCard = ({ name, switcherCardProps, rules, children, }) => {
    return (_jsx(Controller, { render: ({ field: { value, ref, ...field } }) => (_jsx(SwitcherCard, { open: Boolean(value), onContentToggle: field.onChange, ...field, ...switcherCardProps, children: children })), name: name, rules: rules }));
};
export default FormSwitcherCard;
