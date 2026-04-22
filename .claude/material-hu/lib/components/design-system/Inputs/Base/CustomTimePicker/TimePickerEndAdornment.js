import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton, Stack, useTheme } from '@mui/material';
import { IconClock, IconExclamationCircle, IconX } from '@tabler/icons-react';
const preventFocusLoss = (e) => e.preventDefault();
const TimePickerEndAdornment = ({ noIcon, disabled, error, showClear, iconSize, iconPadding, onOpen, onClear, }) => {
    const { palette } = useTheme();
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 0.5,
            alignItems: 'center',
            mr: 0.75,
        }, children: [!noIcon && (_jsx(IconButton, { onMouseDown: preventFocusLoss, onClick: onOpen, disabled: disabled, sx: { padding: iconPadding }, children: _jsx(IconClock, { size: iconSize, color: palette.new.text.neutral.lighter }) })), error && (_jsx(IconExclamationCircle, { size: iconSize, color: palette.new.text.feedback.error })), showClear && (_jsx(IconButton, { onMouseDown: preventFocusLoss, onClick: onClear, sx: { padding: iconPadding }, children: _jsx(IconX, { size: iconSize, color: palette.new.text.neutral.lighter }) }))] }));
};
export default TimePickerEndAdornment;
