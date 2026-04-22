import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import RadioButton from '.';
const FormRadioButton = ({ name, radioButtonProps, rules, isOnlyOption = false, allowDeselect = false, }) => {
    const { getValues, setValue } = useFormContext();
    const handleOnClick = (param) => {
        if (!param && !allowDeselect) {
            return; // Radio buttons should not be deselected unless allowDeselect is true
        }
        setValue(name, param, { shouldDirty: true });
        if (isOnlyOption) {
            const nameParts = name.split('.');
            const baseRoute = nameParts.slice(0, -1).join('.');
            const currentProperty = nameParts[nameParts.length - 1];
            const baseObject = getValues(baseRoute);
            Object.keys(baseObject).forEach(key => key !== currentProperty &&
                setValue(`${baseRoute}.${key}`, false, { shouldDirty: true }));
        }
    };
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { value, ref, ...rest }, fieldState: { error } }) => (_jsx(RadioButton, { ...rest, ...radioButtonProps, onChange: e => {
                e.preventDefault();
                handleOnClick(e.target.checked);
            }, isActive: Boolean(value), inputRef: ref, error: !!error, onClick: param => handleOnClick(param) })) }));
};
export default FormRadioButton;
