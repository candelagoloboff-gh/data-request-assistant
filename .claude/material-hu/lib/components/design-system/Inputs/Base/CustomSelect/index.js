import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { InputAdornment, MenuItem, Select, useFormControl, useTheme, } from '@mui/material';
import { IconAlertCircle, IconChevronDown } from '@tabler/icons-react';
import { getBorderColor } from '../../utils';
const CustomSelect = ({ value, onChange, inputRef, placeholder, options, renderOption, renderValue, allowClear, disabled = false, MenuProps, success = false, hideErrorAdornment = false, }) => {
    const { focused, error } = useFormControl() || {};
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const label = options.find(o => o.value === value)?.label || '';
    return (_jsxs(Select, { value: value || '', onChange: e => onChange(e.target.value), inputRef: inputRef, displayEmpty: true, MenuProps: MenuProps, renderValue: () => {
            if (!value)
                return placeholder;
            if (renderValue)
                return renderValue({ value, label });
            if (renderOption)
                return renderOption({ value, label });
            return label;
        }, IconComponent: IconChevronDown, endAdornment: error &&
            !hideErrorAdornment && (_jsx(InputAdornment, { position: "end", sx: { pr: theme.spacing(0.5) }, children: _jsx(IconAlertCircle, { size: 20, color: theme.palette.new.text.feedback.error }) })), sx: {
            color: !value
                ? theme.palette.new.text.neutral.lighter
                : theme.palette.new.text.neutral.default,
            '.MuiSelect-icon': {
                mr: error && !hideErrorAdornment ? theme.spacing(4) : '0',
                top: '50%',
                transform: 'translateY(-50%)',
                right: theme.spacing(2),
            },
            '& fieldset': {
                borderColor: getBorderColor(theme, focused, error, success, !!value),
                borderWidth: '1px !important',
            },
            backgroundColor: disabled
                ? theme.palette.new.background.elements.disabled
                : theme.palette.new.background.elements.default,
        }, children: [allowClear && (_jsx(MenuItem, { value: "", children: _jsx("em", { children: t('hu_inputs.select') }) }, "clear")), options.map(option => (_jsx(MenuItem, { value: option.value, children: renderOption ? renderOption(option) : option.label }, option.value)))] }));
};
export default CustomSelect;
