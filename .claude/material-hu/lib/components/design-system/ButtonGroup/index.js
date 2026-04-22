import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
const ButtonGroup = ({ labels, onChange, value: controlledValue, fullWidth = false, disableUnselect = false, fixedCheck = false, showCheckIcon = true, defaultValue = 0, slotProps, }) => {
    const [intervalValue, setIntervalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : intervalValue;
    const handleSelect = (newIndex) => {
        let nextValue = newIndex;
        if (value === newIndex) {
            if (disableUnselect) {
                return;
            }
            nextValue = null;
        }
        if (!isControlled) {
            setIntervalValue(nextValue);
        }
        onChange?.(nextValue);
    };
    const theme = useTheme();
    const noIcon = fixedCheck ? (_jsx(IconCheck, { size: 16, style: { stroke: 'transparent' } })) : null;
    return (_jsx(MUIButtonGroup, { variant: "outlined", size: "small", sx: { display: 'flex', width: fullWidth ? '100%' : 'auto' }, children: labels.map((label, index) => {
            const isSelected = value === index;
            const backgroundColor = isSelected
                ? theme.palette.new.action.button.background.secondary.hover
                : theme.palette.new.action.button.background.secondary.default;
            const borderColor = theme.palette.new.border.neutral.brand;
            return (_jsx(Button, { onClick: () => handleSelect(index), sx: {
                    backgroundColor,
                    borderColor,
                    borderWidth: 1,
                    color: theme.palette.new.text.neutral.brand,
                    flexGrow: fullWidth ? 1 : 'initial',
                    flexBasis: fullWidth ? 1 : 'auto',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: theme.palette.new.action.button.background.secondary.hover,
                        color: theme.palette.new.text.neutral.brand,
                    },
                    '&:focus-visible': {
                        backgroundColor: theme.palette.new.action.button.background.secondary.focus,
                        color: theme.palette.new.text.neutral.brand,
                    },
                    '& svg': {
                        stroke: theme.palette.new.text.neutral.brand,
                    },
                    ...slotProps?.button?.sx,
                }, startIcon: showCheckIcon && isSelected ? _jsx(IconCheck, { size: 16 }) : noIcon, endIcon: noIcon, children: label }, index));
        }) }));
};
export default ButtonGroup;
