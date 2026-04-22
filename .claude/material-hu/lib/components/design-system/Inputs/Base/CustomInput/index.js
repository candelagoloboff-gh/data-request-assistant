import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircularProgress, InputAdornment, OutlinedInput, useFormControl, useTheme, } from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from '../../utils';
const CustomInput = ({ value, onChange = () => null, onFocus = () => null, onBlur = () => null, onKeyDown, onPaste, placeholder, inputRef, maxLength, success, loading = false, autoFocus = false, autoComplete = 'off', autoCorrect = 'off', autoCapitalize = 'off', multiline = false, startAdornment, sxInput, minRows = 5, maxRows = 10, disabled, type, showClear, startAdormentPosition = 'center', id, transform, endAdornment, name, size = 'medium', inputMode, step, ...inputProps }) => {
    const theme = useTheme();
    const { focused, error } = useFormControl() || {};
    const hasEndAdornment = loading ||
        success ||
        error ||
        (focused && (value?.length > 0 || autoComplete !== 'off')) ||
        endAdornment;
    return (_jsx(OutlinedInput, { ...inputProps, inputRef: inputRef, id: id, multiline: multiline, minRows: minRows, type: type, maxRows: maxRows, autoComplete: autoComplete, autoCorrect: autoCorrect, autoCapitalize: autoCapitalize, inputMode: inputMode, startAdornment: startAdornment && (_jsx(InputAdornment, { sx: {
                alignSelf: startAdormentPosition,
                height: '24px',
            }, position: "start", children: startAdornment })), endAdornment: hasEndAdornment && (_jsxs(InputAdornment, { sx: {
                alignSelf: multiline ? 'flex-start' : 'center',
                height: '24px',
                gap: 1,
            }, position: "end", children: [loading && _jsx(CircularProgress, { size: 24 }), endAdornment, showClear && focused && value?.length > 0 && (_jsx(IconX, { size: 24, onMouseDown: e => {
                        onChange?.('');
                        e.preventDefault();
                    }, style: {
                        cursor: 'pointer',
                        color: theme.palette.new.text.neutral.default,
                    } })), error && (_jsx(IconAlertCircle, { size: 24, color: theme.palette.new.text.feedback.error })), success && (_jsx(IconCheck, { size: 24, color: theme.palette.new.text.feedback.success }))] })), placeholder: placeholder, disabled: disabled, value: value, onChange: e => {
            // In case the input has a mask, we need to  the user from typing more characters than the maxLength
            const fieldValue = transform?.input
                ? transform.input(e.target.value)
                : e.target.value;
            if (type === 'number' && step === 1) {
                const ALPHA_NUMERIC_DASH_REGEX = /^[0-9]*$/;
                if (fieldValue !== '' && !ALPHA_NUMERIC_DASH_REGEX.test(fieldValue)) {
                    return;
                }
            }
            onChange(fieldValue.slice(0, maxLength));
        }, onFocus: onFocus, onKeyDown: onKeyDown, onBlur: onBlur, onPaste: onPaste, autoFocus: autoFocus, name: name, sx: {
            backgroundColor: disabled
                ? theme.palette.new.background.elements.disabled
                : theme.palette.new.background.elements.default,
            height: size === 'small' ? '40px' : 'inherit',
            '& fieldset': {
                transition: 'border 0.25s ease',
                borderColor: `${getBorderColor(theme, focused, error, success, !!value && value.length > 0)}!important`,
                borderWidth: '1px !important',
                zIndex: 0,
            },
            '> svg:first-of-type': {
                mr: 1,
            },
            'input, textarea': {
                '&::placeholder': {
                    color: disabled
                        ? theme.palette.new.action.button.text.disabled.darker
                        : theme.palette.new.text.neutral.lighter,
                    opacity: 1,
                },
                color: theme.palette.new.text.neutral.default,
                zIndex: 1,
                '&:-webkit-autofill, &:-webkit-autofill:focus, &:-webkit-autofill:hover, &:-webkit-autofill:active': {
                    WebkitBoxShadow: 'none',
                    WebkitTextFillColor: 'inherit',
                    transition: 'background-color 5000s ease-in-out 0s',
                },
            },
            ...sxInput,
        } }));
};
export default CustomInput;
