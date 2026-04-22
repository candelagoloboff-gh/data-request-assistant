import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import CustomSelect from '../Base/CustomSelect';
const InputSelect = ({ sx = {}, label, value, helperText, errorText, onChange, placeholder, inputRef, error, fullWidth = true, options, disabled, allowClear, renderOption, success, }) => {
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomSelect, { value: value, onChange: onChange, renderOption: renderOption, inputRef: inputRef, placeholder: placeholder, options: options, allowClear: allowClear, disabled: disabled, success: success }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, value: value })] }));
};
export default InputSelect;
