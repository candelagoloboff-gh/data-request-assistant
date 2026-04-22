import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, FormControl, IconButton, Stack, useTheme } from '@mui/material';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import CustomHelperText from '../Base/CustomHelperText';
import CustomInput from '../Base/CustomInput';
import CustomLabel from '../Base/CustomLabel';
const InputPassword = ({ onChange, value, label, success, error, errorText, helperText, disabled, sx = {}, fullWidth = true, hasCounter = false, maxLength = 50, showClear = true, size, ...inputProps }) => {
    const [showPassword, setShowPassword] = useState(false);
    const hasMouseDown = useRef(false);
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const handleTogglePassword = () => {
        if (!hasMouseDown.current) {
            setShowPassword(!showPassword);
        }
        hasMouseDown.current = false;
    };
    const handleMouseDown = (event) => {
        event.preventDefault();
        hasMouseDown.current = true;
        setShowPassword(!showPassword);
    };
    const iconWrapperSx = {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const iconProps = {
        size: 24,
        color: theme.palette.new.text.neutral.default,
    };
    const ariaLabel = showPassword
        ? t('password.hide_password')
        : t('password.show_password');
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label, success: success }), _jsx(CustomInput, { ...inputProps, value: value, onChange: onChange, success: success, disabled: disabled, endAdornment: !disabled && (_jsxs(IconButton, { "aria-label": ariaLabel, sx: {
                        position: 'relative',
                        width: '24px',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }, onMouseDown: handleMouseDown, onClick: handleTogglePassword, children: [_jsx(Fade, { in: showPassword, timeout: 400, children: _jsx(Stack, { sx: iconWrapperSx, children: _jsx(IconEye, { ...iconProps }) }) }), _jsx(Fade, { in: !showPassword, timeout: 400, children: _jsx(Stack, { sx: iconWrapperSx, children: _jsx(IconEyeClosed, { ...iconProps }) }) })] })), type: showPassword ? 'text' : 'password', showClear: showClear, size: size }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, hasCounter: hasCounter, maxLength: maxLength, value: value, success: success, error: error })] }));
};
export default InputPassword;
