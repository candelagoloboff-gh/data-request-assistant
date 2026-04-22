import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from '../../../Tooltip';
import { Stack, Typography, useFormControl, useTheme } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
const CustomLabel = ({ id, label, success, labelTooltip, slotProps, }) => {
    const { error, disabled } = useFormControl() || {};
    const theme = useTheme();
    if (!label)
        return null;
    const getLabelColor = () => {
        if (error) {
            return theme.palette.new.text.feedback.error;
        }
        if (success) {
            return theme.palette.new.text.feedback.success;
        }
        if (disabled) {
            return theme.palette.new.text.neutral.disabled;
        }
        return theme.palette.new.text.neutral.default;
    };
    return (_jsxs(Stack, { className: "CustomLabel-root", sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0.5,
            mb: 0.5,
        }, children: [_jsx(Typography, { className: "CustomLabel-label", id: id, variant: "globalS", fontWeight: "fontWeightSemiBold", sx: { color: getLabelColor() }, children: label }), labelTooltip && (_jsx(Tooltip, { title: labelTooltip, ...slotProps?.labelTooltip, children: _jsx(IconInfoCircle, { size: 13 }) }))] }));
};
export default CustomLabel;
