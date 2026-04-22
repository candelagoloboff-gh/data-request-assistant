import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, useTheme } from '@mui/material';
import Toggle from '../Toggle';
import Tooltip from '../Tooltip';
const Switcher = props => {
    const { title, titleProps, description, descriptionProps, disabled = false, value, onChange, sx, Icon = null, disabledTooltip, } = props;
    const theme = useTheme();
    const colors = {
        title: theme.palette.new.text.neutral.default,
        description: theme.palette.new.text.neutral.lighter,
    };
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            ...sx,
        }, children: [(title || description) && (_jsxs(Stack, { children: [title && (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1.5 }, children: [_jsx(Typography, { variant: "globalS", color: colors.title, ...titleProps, children: title }), Icon] })), description && (_jsx(Typography, { variant: "globalXS", color: colors.description, ...descriptionProps, children: description }))] })), _jsx(Stack, { sx: { justifyContent: 'center' }, children: _jsx(Tooltip, { disableTooltip: !disabledTooltip, ...disabledTooltip, children: _jsx("span", { children: _jsx(Toggle, { disabled: disabled, checked: !!value, onChange: onChange }) }) }) })] }));
};
export default Switcher;
