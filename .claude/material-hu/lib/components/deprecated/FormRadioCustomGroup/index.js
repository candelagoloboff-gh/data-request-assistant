import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext, } from 'react-hook-form';
import { FormControlLabel, FormHelperText, Radio, RadioGroup, Stack, Typography, useTheme, } from '@mui/material';
/**
 * @deprecated Use HuFormRadioGroup instead
 */
export const FormRadioCustomGroup = props => {
    const { name, options, radioProps = {}, labelProps = {}, helperTextProps = {}, optionContainerProps = {}, column = false, fullWidth = true, rules, ...other } = props;
    const { control } = useFormContext();
    const theme = useTheme();
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: ({ field }) => (_jsx(RadioGroup, { ...field, ...other, sx: {
                flexDirection: column ? 'column' : 'row',
                width: fullWidth ? '100%' : undefined,
                ...other?.sx,
            }, children: options.map((option, index) => (_jsx(Stack, { ...optionContainerProps, sx: {
                    px: 0,
                    py: 0.5,
                    mb: index === options.length - 1 ? 0 : 2,
                    width: fullWidth ? '100%' : undefined,
                    boxShadow: theme.shadows[2],
                    borderRadius: 1,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: option.value === field.value
                        ? theme.palette.border?.neutralBorder
                        : 'rgba(0, 0, 0, 0.12)',
                    backgroundColor: option.value === field.value
                        ? '#F5F7FF'
                        : theme.palette.background.paper,
                    '& .MuiFormControlLabel-root': {
                        padding: theme.spacing(1, 2),
                        width: '100%',
                        height: '100%',
                        alignItems: 'flex-start',
                    },
                    ...optionContainerProps.sx,
                }, children: _jsx(FormControlLabel, { ...labelProps, "aria-describedby": option.helperText
                        ? `${name}-${option.value}-helper-text`
                        : undefined, control: _jsx(Radio, { ...radioProps, sx: {
                            mx: 1,
                            color: '#1976D2',
                            ...radioProps?.sx,
                        } }), label: _jsxs(Stack, { children: [_jsx(Typography, { variant: "subtitle2", fontSize: "1rem", children: option.label }), option.helperText && (_jsx(FormHelperText, { ...helperTextProps, id: `${name}-${option.value}-helper-text`, children: _jsx(Typography, { variant: "body2", component: "span", color: theme.palette.text.secondary, children: option.helperText }) }))] }), value: option.value }) }, option.value))) })) }));
};
export default FormRadioCustomGroup;
