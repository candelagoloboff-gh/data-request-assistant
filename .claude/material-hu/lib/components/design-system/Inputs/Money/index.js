import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from 'react';
import { FormControl, Stack, Typography, useTheme } from '@mui/material';
import { getCurrentLocale } from '../../../../utils/languages';
import CustomHelperText from '../Base/CustomHelperText';
import CustomInput from '../Base/CustomInput';
import CustomLabel from '../Base/CustomLabel';
import CustomSelect from '../Base/CustomSelect';
import { defaultTransform, getCurrencyOptions } from './utils';
const InputMoney = ({ transform = defaultTransform(getCurrentLocale()), onChange, value, currencyOptions = getCurrencyOptions(), label, success, error, errorText, helperText, disabled, sx = {}, fullWidth = true, defaultCurrencySymbol = '$', preventDecimals = false, selectCoin = true, ...inputProps }) => {
    const theme = useTheme();
    const containerRef = useRef(null);
    const [menuWidth, setMenuWidth] = useState(350);
    useLayoutEffect(() => {
        if (containerRef.current) {
            const { width } = containerRef.current.getBoundingClientRect();
            setMenuWidth(width);
        }
    }, []);
    const findCurrencyOption = (optionValue) => {
        return currencyOptions.find(opt => opt.value === optionValue);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { children: _jsx(CustomLabel, { label: label }) }), _jsxs(Stack, { ref: containerRef, sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: theme.spacing(0.5),
                    position: 'relative',
                }, children: [selectCoin && (_jsx(Stack, { sx: { width: '95px', minWidth: '95px' }, children: _jsx(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: _jsx(CustomSelect, { value: value.currencyCode ?? '-', options: currencyOptions, onChange: newCurrency => {
                                    onChange({ currencyCode: newCurrency, amount: value.amount });
                                }, hideErrorAdornment: true, disabled: disabled, success: success, MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            width: `${menuWidth}px`,
                                            mt: theme.spacing(0.5),
                                            maxHeight: '400px',
                                        },
                                    },
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'left',
                                    },
                                }, renderValue: option => findCurrencyOption(option.value.toString())?.value ||
                                    option.value, renderOption: option => {
                                    const currencyOption = findCurrencyOption(option.value.toString());
                                    return (_jsxs(Stack, { direction: "row", justifyContent: "space-between", width: "100%", p: theme.spacing(2), children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", color: theme.palette.new.text.neutral.default, children: option.label }), _jsx(Typography, { variant: "globalS", color: theme.palette.new.text.neutral.default, children: currencyOption?.value || option.value })] }));
                                } }) }) })), _jsx(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: _jsx(CustomInput, { ...inputProps, value: transform.output(value.amount, preventDecimals), onChange: newValue => {
                                onChange({
                                    currencyCode: value.currencyCode,
                                    amount: transform.input(newValue, preventDecimals),
                                });
                            }, success: success, disabled: disabled, startAdornment: _jsx(Typography, { fontWeight: "fontWeightSemiBold", sx: {
                                    mr: 1,
                                }, children: findCurrencyOption(value.currencyCode)?.symbol ??
                                    defaultCurrencySymbol }) }) })] }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, value: value.amount, success: success, error: error })] }));
};
export default InputMoney;
