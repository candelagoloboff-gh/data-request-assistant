import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import SelectionCard from '.';
// this component can work either as a checkbox or a radio button, depending on the isOnlyOption prop.
const FormSelectionCard = props => {
    const { name, rules, children, isOnlyOption = false, sx, disabled = false, } = props;
    const { getValues, setValue } = useFormContext();
    const valueInput = getValues(name);
    const handleOnClick = (onChange, param) => {
        onChange(param);
        if (isOnlyOption) {
            // deselect all other options
            const nameParts = name.split('.');
            const baseRoute = nameParts.slice(0, -1).join('.');
            const currentProperty = nameParts[nameParts.length - 1];
            const baseObject = getValues(baseRoute);
            Object.keys(baseObject).forEach(key => key !== currentProperty && setValue(`${baseRoute}.${key}`, false));
        }
    };
    // can't change value if it is the only option and it is already selected
    const canChange = !(isOnlyOption && valueInput);
    return (_jsx(Controller, { render: ({ field: { onChange } }) => (_jsx(SelectionCard, { onClick: param => canChange && handleOnClick(onChange, param), checked: valueInput, sx: sx, disabled: disabled, fullWidth: true, children: children })), name: name, rules: rules }));
};
export default FormSelectionCard;
