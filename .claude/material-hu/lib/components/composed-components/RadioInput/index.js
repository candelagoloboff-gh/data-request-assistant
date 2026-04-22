import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomLabel from '../../design-system/Inputs/Base/CustomLabel';
import RadioButton from '../../design-system/RadioButton/RadioButton';
import { FormControl, RadioGroup } from '@mui/material';
const RadioInput = ({ name, options, value, onChange, label, error = false, success = false, disabled = false, slotProps = {}, sx = {}, }) => {
    const handleChange = (option) => () => {
        if (!option.disabled && onChange) {
            onChange(option.value);
        }
    };
    return (_jsxs(FormControl, { error: error, disabled: disabled, fullWidth: true, ...slotProps.root, sx: {
            gap: 2,
            ...sx,
            ...slotProps.root?.sx,
        }, children: [label && (_jsx(CustomLabel, { id: `${name}-label`, label: label, success: success, ...slotProps.label })), _jsx(RadioGroup, { name: name, "aria-labelledby": `${name}-label`, ...slotProps.radioGroup, sx: {
                    gap: 2,
                    ...slotProps.radioGroup?.sx,
                }, children: options.map(option => (_jsx(RadioButton, { label: option.label, description: option.description, isActive: value === option.value, disabled: disabled || option.disabled, error: error, value: option.value, onClick: handleChange(option), ...slotProps.radioButton }, option.value))) })] }));
};
export default RadioInput;
