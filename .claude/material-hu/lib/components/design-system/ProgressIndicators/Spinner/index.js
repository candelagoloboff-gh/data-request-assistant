import { jsx as _jsx } from "react/jsx-runtime";
import { CircularProgress, Stack } from '@mui/material';
const Spinner = ({ centered = true, width = 'medium', darkBackground = false, sx, ...props }) => {
    const size = width === 'small' ? 24 : 32;
    const circularProgress = (_jsx(CircularProgress, { sx: {
            color: theme => {
                const isDarkMode = theme.palette.mode === 'dark';
                return darkBackground || isDarkMode
                    ? theme.palette.new.text.neutral.inverted
                    : theme.palette.newBase?.brand[500];
            },
            ...sx,
        }, size: size, ...props }));
    return centered ? (_jsx(Stack, { direction: "row", sx: { justifyContent: 'center', alignItems: 'center' }, children: circularProgress })) : (circularProgress);
};
export default Spinner;
