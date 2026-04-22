import { jsx as _jsx } from "react/jsx-runtime";
import { Chip as MuiChip, Typography, useTheme } from '@mui/material';
import { IconCheck, IconX } from '@tabler/icons-react';
const Chip = ({ label, size = 'medium', disabled, onDelete, isSelected, onClick, sx, slotProps, }) => {
    const theme = useTheme();
    const isSmall = size === 'small';
    const brand500 = theme.palette.newBase?.brand[500];
    const backgroundColor = isSelected
        ? theme.palette.new.action.background.brand.selected
        : theme.palette.new.action.background.brand.default;
    const iconStyle = {
        width: '16px',
        height: '16px',
        color: 'inherit',
    };
    return (_jsx(MuiChip, { title: slotProps?.label?.title, label: _jsx(Typography, { variant: isSmall ? 'globalXXS' : 'globalXS', fontWeight: "fontWeightSemiBold", color: "inherit", children: label }), size: size, onDelete: onDelete, onClick: onClick, disabled: disabled, icon: isSelected ? _jsx(IconCheck, { style: iconStyle }) : undefined, sx: {
            borderRadius: 1,
            // Default state
            backgroundColor,
            borderColor: theme.palette.new.border.neutral.brand,
            borderStyle: 'solid',
            borderWidth: '1px',
            color: theme.palette.new.text.neutral.brand,
            '& .MuiChip-icon': {
                m: 0,
                pl: 0.5,
                color: theme.palette.new.text.neutral.brand,
            },
            '& .MuiChip-deleteIcon': {
                m: 0,
                pr: 0.5,
                color: theme.palette.new.text.neutral.brand,
            },
            // Hover state
            ':hover:not(.Mui-disabled)': {
                backgroundColor: theme.palette.new.action.background.brand.selected,
                borderColor: theme.palette.new.border.neutral.brand,
                color: theme.palette.new.text.neutral.brand,
                '& .MuiChip-icon': {
                    color: theme.palette.new.text.neutral.brand,
                },
                '& .MuiChip-deleteIcon': {
                    color: theme.palette.new.text.neutral.brand,
                },
            },
            // Focused state
            ':focus-visible:not(.Mui-disabled)': {
                backgroundColor: theme.palette.new.action.background.brand.selected,
                borderColor: brand500,
                borderWidth: '2px',
                outline: 'none',
                color: theme.palette.new.text.neutral.brand,
                '& .MuiChip-icon': {
                    color: theme.palette.new.text.neutral.brand,
                },
                '& .MuiChip-deleteIcon': {
                    color: theme.palette.new.text.neutral.brand,
                },
            },
            // Active state
            ':active:not(.Mui-disabled)': {
                backgroundColor: theme.palette.new.action.background.brand.selected,
                borderColor: theme.palette.new.border.neutral.brand,
                color: theme.palette.new.text.neutral.brand,
                '& .MuiChip-icon': {
                    color: theme.palette.new.text.neutral.brand,
                },
                '& .MuiChip-deleteIcon': {
                    color: theme.palette.new.text.neutral.brand,
                },
            },
            // Disabled state
            '&.Mui-disabled': {
                opacity: 'unset',
                backgroundColor: theme.palette.new.action.background.brand.disabled,
                borderColor: theme.palette.new.border.neutral.default,
                color: theme.palette.new.action.button.text.disabled.darker,
                '& .MuiChip-icon': {
                    color: theme.palette.new.action.button.text.disabled.darker,
                },
                '& .MuiChip-deleteIcon': {
                    color: theme.palette.new.action.button.text.disabled.darker,
                },
            },
            '.MuiChip-label': {
                px: 0.5,
                verticalAlign: 'sub',
            },
            px: isSmall ? 0.5 : 1,
            ...sx,
        }, deleteIcon: onDelete && _jsx(IconX, { style: iconStyle }) }));
};
export default Chip;
