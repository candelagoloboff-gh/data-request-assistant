import { jsx as _jsx } from "react/jsx-runtime";
import { checkboxClasses, Checkbox as MuiCheckbox, useTheme, } from '@mui/material';
import { IconCheck, IconMinus, IconSquare } from '@tabler/icons-react';
const CheckboxBase = ({ error, primaryColor, hoverBackgroundColor, sx, ...props }) => {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const brand500 = theme.palette.newBase?.brand[500];
    const defaultBorderColor = error
        ? newPalette?.action.button.background.error.focus
        : newPalette?.icon.neutral.lighter;
    const defaultBackgroundColor = newPalette?.background.elements.default;
    return (_jsx(MuiCheckbox, { size: "small", icon: _jsx(IconSquare, { stroke: 0 }), checkedIcon: _jsx(IconCheck, { size: 18, color: newPalette?.icon.neutral.inverted }), indeterminateIcon: _jsx(IconMinus, { size: 18, color: brand500 }), sx: {
            border: `1px solid ${defaultBorderColor}`,
            borderRadius: 0.5,
            width: '20px',
            height: '20px',
            aspectRatio: 1,
            padding: 0,
            zIndex: 0,
            backgroundColor: defaultBackgroundColor,
            transition: 'border 125ms ease-in-out, background 125ms ease-in-out, transform 125ms ease-in-out',
            '&:hover': {
                borderColor: error
                    ? newPalette?.action.button.background.error.focus
                    : brand500,
                backgroundColor: hoverBackgroundColor || newPalette?.action.background.neutral.hover,
            },
            '&:active': {
                transform: 'scale(0.95)',
            },
            '&:focus-visible': {
                ':before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20%',
                    left: '-20%',
                    width: '140%',
                    height: '140%',
                    borderRadius: '50%',
                    backgroundColor: error
                        ? newPalette?.action.button.background.error.focus
                        : brand500,
                    opacity: 0.2,
                    outline: 'none',
                    zIndex: 0,
                },
            },
            input: {
                border: `1px solid ${defaultBorderColor}`,
                borderRadius: 0.5,
                width: '20px',
                height: '20px',
                aspectRatio: 1,
                padding: 0,
                zIndex: 0,
                transition: 'border 125ms ease-in-out',
            },
            // Checked state - default
            [`&.${checkboxClasses.checked}:not(.${checkboxClasses.disabled})`]: {
                borderColor: error
                    ? newPalette?.action.button.background.error.focus
                    : brand500,
                backgroundColor: error
                    ? newPalette?.action.button.background.error.focus
                    : brand500,
            },
            // Indeterminate state - default
            [`&.${checkboxClasses.indeterminate}:not(.${checkboxClasses.disabled})`]: {
                borderColor: error
                    ? newPalette?.action.button.background.error.focus
                    : brand500,
                backgroundColor: defaultBackgroundColor,
                '& svg': {
                    color: brand500,
                },
            },
            // Disabled state - not selected
            [`&.${checkboxClasses.disabled}:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
                borderColor: newPalette?.action.button.background.error.disabled,
                backgroundColor: defaultBackgroundColor,
            },
            // Disabled state - selected
            [`&.${checkboxClasses.disabled}.${checkboxClasses.checked}`]: {
                borderColor: newPalette?.action.button.background.error.disabled,
                backgroundColor: newPalette?.action.button.background.error.disabled,
            },
            // Disabled state - indeterminate
            [`&.${checkboxClasses.disabled}.${checkboxClasses.indeterminate}`]: {
                borderColor: newPalette?.action.button.background.error.disabled,
                backgroundColor: newPalette?.action.button.background.error.disabled,
                '& svg': {
                    color: newPalette?.icon.neutral.inverted,
                },
            },
            ...sx,
        }, ...props, disableRipple: true }));
};
export default CheckboxBase;
