import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormHelperText, Stack, Typography, useFormControl, useTheme, } from '@mui/material';
import { IconCheck, IconExclamationCircle } from '@tabler/icons-react';
import { getCounterColor, getCounterValue, getHelperColor, shouldShowHelperText, } from './utils';
const CustomHelperText = ({ helperText, hasCounter, maxLength, value, success, error: errorProp, }) => {
    const { error, disabled } = useFormControl() || { error: errorProp };
    const theme = useTheme();
    const helperTextToShow = typeof helperText === 'function' ? helperText(value) : helperText;
    const showHelperText = shouldShowHelperText(hasCounter, helperTextToShow, error);
    const helperColor = getHelperColor(theme, error, success, disabled);
    const counterColor = getCounterColor(theme, error, success);
    const counterValue = getCounterValue(value, maxLength);
    if (!showHelperText)
        return null;
    return (_jsx(FormHelperText, { sx: {
            mx: 0,
            mt: 0.5,
            '& *': {
                color: `${helperColor} !important`,
            },
        }, children: _jsxs(Stack, { component: "span", sx: {
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: 0.5,
                '& > svg': {
                    minWidth: '16px',
                    height: '22px',
                },
            }, children: [helperTextToShow && (_jsxs(_Fragment, { children: [error && _jsx(IconExclamationCircle, { size: "1rem" }), success && _jsx(IconCheck, { size: "1rem" }), _jsx(Typography, { variant: "globalS", sx: { flex: 1 }, children: helperTextToShow })] })), hasCounter && (_jsx(Typography, { variant: "globalS", sx: {
                        ml: 'auto',
                        color: `${counterColor} !important`,
                    }, children: counterValue }))] }) }));
};
export default CustomHelperText;
