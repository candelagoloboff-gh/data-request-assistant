import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import CustomRangeDatePicker from '../Base/CustomRangeDatePicker';
const RangeDatePicker = ({ sx = {}, label, value, onChange, helperText, errorText, error, fullWidth = true, disabled = false, ...props }) => {
    return (_jsxs(FormControl, { error: error, fullWidth: fullWidth, disabled: disabled, sx: sx, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomRangeDatePicker, { value: value, onChange: onChange, disabled: disabled, error: error, ...props }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText })] }));
};
export default RangeDatePicker;
