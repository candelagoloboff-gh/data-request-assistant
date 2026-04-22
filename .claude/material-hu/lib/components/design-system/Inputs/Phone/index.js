import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
import { IconAlertCircle, IconCheck, IconChevronDown, IconX, } from '@tabler/icons-react';
import { MuiTelInput } from 'mui-tel-input';
import CustomLabel from '../Base/CustomLabel';
const InputPhone = (props) => {
    const { label, onChange, success, fullWidth = true, disabled = false, sx = {}, defaultCountry = 'AR', preferredCountries = ['AR', 'MX'], helperText, ...telInputProps } = props;
    const theme = useTheme();
    // Resolve helperText if it's a function (Phone component doesn't support function helperText,
    // but we need to handle it for type compatibility)
    const resolvedHelperText = typeof helperText === 'function' ? undefined : helperText;
    const handleChange = (newValue, country) => {
        onChange?.(country.nationalNumber ? newValue : '', country?.countryCallingCode);
    };
    const reset = () => handleChange('', {});
    const valuesStrategies = {
        error: {
            phoneInputIcon: {
                display: 'flex',
                color: theme.palette.new.text.feedback.error,
                clickable: false,
                icon: _jsx(IconAlertCircle, { size: 20 }),
            },
            border: theme.palette.new.border.states.error,
            focusedBorder: theme.palette.new.border.states.error,
            helperText: {
                color: theme.palette.new.text.feedback.error,
                icon: _jsx(IconAlertCircle, { size: 16 }),
                marginLeft: 2.5,
            },
            label: {
                color: theme.palette.new.text.feedback.error,
            },
        },
        success: {
            phoneInputIcon: {
                display: 'flex',
                color: theme.palette.new.text.feedback.success,
                clickable: false,
                icon: _jsx(IconCheck, { size: 20 }),
            },
            border: theme.palette.new.border.states.success,
            focusedBorder: theme.palette.new.border.states.success,
            helperText: {
                color: theme.palette.new.text.feedback.success,
                icon: _jsx(IconCheck, { size: 16 }),
                marginLeft: 2.5,
            },
            label: {
                color: theme.palette.new.text.feedback.success,
            },
        },
        default: {
            phoneInputIcon: {
                display: telInputProps.value && !disabled ? 'flex' : 'none',
                color: theme.palette.new.text.neutral.default,
                clickable: !disabled,
                icon: (_jsx(Stack, { sx: { mr: 2 }, children: _jsx(IconX, { onClick: reset, size: 20 }) })),
            },
            border: theme.palette.new.border.neutral.default,
            focusedBorder: theme.palette.new.border.neutral.brand,
            helperText: {
                color: theme.palette.new.text.neutral.lighter,
                icon: null,
                marginLeft: 0,
            },
            label: {
                color: theme.palette.new.text.neutral.default,
            },
        },
    };
    const uiValues = (telInputProps.error && valuesStrategies.error) ||
        (success && valuesStrategies.success) ||
        valuesStrategies.default;
    const countryCodeIcon = (_jsx(Stack, { sx: {
            left: 62,
            pointerEvents: 'none',
            position: 'absolute',
            top: 16,
            zIndex: 1,
            color: theme.palette.new.text.neutral.default,
        }, children: _jsx(IconChevronDown, { size: 24 }) }));
    const phoneInputIcon = (_jsx(Stack, { sx: {
            display: uiValues.phoneInputIcon.display,
            position: 'absolute',
            top: 16,
            right: 8,
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: uiValues.phoneInputIcon.color,
            cursor: uiValues.phoneInputIcon.clickable ? 'pointer' : 'inherit',
        }, children: uiValues.phoneInputIcon.icon }));
    const helperTextIcon = uiValues.helperText.icon && (_jsx(Stack, { sx: {
            display: resolvedHelperText ? 'flex' : 'none',
            position: 'absolute',
            bottom: 6,
            left: 0,
            width: 16,
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: uiValues.helperText.color,
            cursor: 'inherit',
        }, children: uiValues.helperText.icon }));
    return (_jsxs(Stack, { children: [label && (_jsx(Stack, { sx: {
                    '& .MuiTypography-root': {
                        color: uiValues.label.color,
                    },
                }, children: _jsx(CustomLabel, { label: label, success: success }) })), _jsxs(Stack, { sx: { position: 'relative' }, children: [countryCodeIcon, phoneInputIcon, helperTextIcon, _jsx(MuiTelInput, { ...telInputProps, helperText: resolvedHelperText, onChange: handleChange, defaultCountry: defaultCountry, preferredCountries: preferredCountries, disabled: disabled, fullWidth: fullWidth, forceCallingCode: true, MenuProps: {
                            PaperProps: {
                                sx: {
                                    maxHeight: '360px !important',
                                    '& .MuiList-root': {
                                        padding: '0px !important',
                                    },
                                    '& .MuiMenuItem-root': {
                                        minHeight: '72px',
                                    },
                                    '& .MuiListItemText-root .MuiTypography-root': {
                                        ml: 1,
                                        fontSize: '16px',
                                        fontWeight: 500,
                                    },
                                    '& .MuiButtonBase-root .MuiTelInput-Typography-calling-code': {
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        color: theme.palette.new.text.neutral.default,
                                    },
                                    '& .MuiMenuItem-root .MuiTelInput-Flag': {
                                        width: '100%',
                                        height: '24px',
                                        borderRadius: '4px',
                                    },
                                },
                            },
                        }, sx: {
                            ...sx,
                            '&.MuiFormControl-root > div': {
                                p: 0,
                                '& fieldset': {
                                    '&,&:focus-visible,&:hover': {
                                        border: 'none',
                                        outline: 'none',
                                    },
                                },
                                '.MuiTelInput-IconButton': {
                                    boxSizing: 'border-box',
                                    p: 1,
                                    pr: '36px',
                                    minHeight: '56px',
                                    minWidth: '100px',
                                    backgroundColor: theme.palette.new.background.elements.default,
                                    '& .MuiTelInput-Flag': {
                                        width: 36,
                                        height: 24,
                                    },
                                },
                                // phone input
                                '& input': {
                                    p: 1.2,
                                    ml: -0.5,
                                    fontSize: 16,
                                    fontWeight: 300,
                                    color: theme.palette.new.text.neutral.default,
                                    backgroundColor: theme.palette.new.background.elements.default,
                                    pr: 4,
                                    minHeight: '56px',
                                    boxSizing: 'border-box',
                                },
                                // country + phone inputs
                                '.MuiInputAdornment-root .MuiTelInput-IconButton, & input': {
                                    '&.Mui-disabled': {
                                        backgroundColor: disabled
                                            ? theme.palette.new.background.elements.disabled
                                            : theme.palette.new.background.elements.default,
                                    },
                                    '&:focus-visible,&[aria-expanded="true"]': {
                                        borderColor: uiValues.focusedBorder,
                                        boxShadow: 'none',
                                    },
                                    border: '1px solid',
                                    borderColor: uiValues.border,
                                    borderRadius: 1,
                                },
                            },
                            '& .MuiFormHelperText-root': {
                                marginLeft: uiValues.helperText.marginLeft,
                                color: `${uiValues.helperText.color} !important`,
                                fontColor: `${uiValues.helperText.color} !important`,
                                fontWeight: 400,
                                fontSize: '16px',
                            },
                        } })] })] }));
};
export default InputPhone;
