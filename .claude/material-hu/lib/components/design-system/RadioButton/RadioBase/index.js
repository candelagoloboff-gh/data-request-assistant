import { jsx as _jsx } from "react/jsx-runtime";
import { Radio, radioClasses, useTheme } from '@mui/material';
import { getRadioColor } from './utils';
const RadioBase = ({ checked = false, disabled = false, error = false, ...props }) => {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const radioColor = getRadioColor(theme, checked, disabled, error);
    const hasHoverEffect = !disabled && !error;
    return (_jsx(Radio, { ...props, disabled: disabled, checked: checked, sx: {
            padding: 0,
            transition: 'color 125ms ease-in-out, background-color 125ms ease-in-out',
            color: radioColor,
            ...(hasHoverEffect && {
                '&:hover': {
                    color: theme.palette.newBase?.brand[500],
                    backgroundColor: newPalette?.action.background.neutral.hover,
                },
            }),
            [`&.${radioClasses.checked}`]: {
                color: radioColor,
            },
        } }));
};
export default RadioBase;
