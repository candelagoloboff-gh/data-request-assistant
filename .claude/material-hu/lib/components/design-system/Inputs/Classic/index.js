import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomHelperText from '../Base/CustomHelperText';
import CustomInput from '../Base/CustomInput';
import CustomLabel from '../Base/CustomLabel';
const InputClassic = ({ sx = {}, label, labelTooltip, value, helperText, errorText, onChange, placeholder, inputRef, error, success, loading, maxLength = 100, hasCounter = true, fullWidth = true, multiline, minRows, maxRows, startAdornment, disabled = false, showClear = true, startAdormentPosition = 'center', id, onFocus, onKeyDown, onBlur, onPaste, autoFocus, transform, size, autoComplete, autoCorrect, autoCapitalize, type, name, hasHelperBullet = false, inputMode, hideErrorText = false, step, }) => {
    const composedHelperText = hasHelperBullet ? `• ${helperText}` : helperText;
    const showHelperText = !error || (error && !hideErrorText);
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label, success: success, labelTooltip: labelTooltip }), _jsx(CustomInput, { value: transform?.output ? transform.output(value) : value, onChange: inputValue => {
                    onChange?.(transform?.input ? transform.input(inputValue) : inputValue);
                }, onFocus: onFocus, placeholder: placeholder, inputRef: inputRef, maxLength: maxLength, success: success, autoFocus: autoFocus, loading: loading, multiline: multiline, minRows: minRows, maxRows: maxRows, startAdornment: startAdornment, disabled: disabled, showClear: showClear, startAdormentPosition: startAdormentPosition, id: id, transform: transform, onKeyDown: onKeyDown, onBlur: onBlur, autoComplete: autoComplete, autoCorrect: autoCorrect, autoCapitalize: autoCapitalize, type: type, name: name, size: size, inputMode: inputMode, onPaste: onPaste, step: step }), showHelperText && (_jsx(CustomHelperText, { helperText: error ? errorText : composedHelperText, hasCounter: hasCounter, maxLength: maxLength, value: value, success: success, error: error }))] }));
};
export default InputClassic;
