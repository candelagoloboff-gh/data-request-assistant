import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomDatePicker from '../Base/CustomDatePicker';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
const DatePicker = ({ sx = {}, label, value, helperText, errorText, onChange, inputRef, error, fullWidth = true, disabled = false, enableClear = false, size = 'medium', slotProps, ...props }) => {
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomDatePicker, { size: size, value: value, onChange: onChange, inputRef: inputRef, disabled: disabled, error: error, enableClear: enableClear, slotProps: slotProps, ...props }), size !== 'small' && (_jsx(CustomHelperText, { helperText: error ? errorText : helperText }))] }));
};
export default DatePicker;
