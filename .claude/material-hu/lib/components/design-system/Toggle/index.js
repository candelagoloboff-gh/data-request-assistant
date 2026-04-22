import { jsx as _jsx } from "react/jsx-runtime";
import { Switch as MuiSwitch, useTheme } from '@mui/material';
const Toggle = ({ disabled, checked, onChange }) => {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    return (_jsx(MuiSwitch, { disableRipple: true, disabled: disabled, checked: checked, onChange: () => onChange(!checked), sx: {
            width: 52,
            height: 32,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                height: 28,
                top: 2,
                left: -6,
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&.Mui-checked': {
                    transform: 'translateX(20px)',
                },
                '&.Mui-checked + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.action.button.background.primary.default,
                },
                '&.Mui-checked:hover + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.action.button.background.primary.hover,
                },
                '&.Mui-checked:focus-visible + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.action.button.background.primary.hover,
                },
                '&:not(.Mui-checked) + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.shadows['4dp'],
                },
                '&:not(.Mui-checked):hover + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.action.background.neutral.hover,
                },
                '&.Mui-disabled.Mui-checked .MuiSwitch-thumb': {
                    color: newPalette?.text.neutral.disabled,
                },
                '&.Mui-disabled.Mui-checked + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.action.background.brand.disabled,
                },
                '&.Mui-disabled:not(.Mui-checked) .MuiSwitch-thumb': {
                    color: newPalette?.text.neutral.disabled,
                },
                '&.Mui-disabled:not(.Mui-checked) + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: newPalette?.background.elements.disabled,
                },
            },
            '& .MuiSwitch-track': {
                borderRadius: 20,
                transition: theme.transitions.create('background-color', {
                    duration: 200,
                }),
            },
            '& .MuiSwitch-thumb': {
                width: 26,
                height: 26,
                color: newPalette?.action.button.background.secondary.default,
                boxShadow: 'none',
            },
        } }));
};
Toggle.displayName = 'Toggle';
export default Toggle;
