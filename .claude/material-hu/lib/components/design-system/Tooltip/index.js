import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip as MuiTooltip, Stack, Typography, useTheme, } from '@mui/material';
const TooltipBody = ({ title, description }) => {
    const theme = useTheme();
    const textColor = theme.palette?.new?.text?.neutral?.inverted;
    return (_jsxs(Stack, { sx: { p: 1 }, children: [_jsx(Typography, { variant: "globalS", sx: {
                    fontWeight: 'semiBold',
                    color: textColor,
                }, children: title }), _jsx(Typography, { variant: "globalXS", sx: { color: textColor }, children: description })] }));
};
const Tooltip = ({ children, disableTooltip = false, delay = 0, sx, slotProps, open, ...props }) => {
    const { title = '', description = '', direction = 'top', followCursor = false, } = props;
    const theme = useTheme();
    const tooltipBackground = theme.palette?.new?.background?.elements?.inverted;
    const tooltipArrow = theme.palette?.new?.background?.elements?.inverted;
    return (_jsx(MuiTooltip, { arrow: true, open: open, placement: direction, PopperProps: {
            sx: {
                '.MuiTooltip-tooltip': {
                    background: tooltipBackground,
                    maxWidth: '312px',
                },
                '.MuiTooltip-arrow': {
                    color: tooltipArrow,
                },
            },
        }, title: !disableTooltip ? (_jsx(TooltipBody, { title: title, description: description })) : null, enterDelay: delay, enterNextDelay: delay, sx: sx, slotProps: slotProps, followCursor: followCursor, children: children }));
};
Tooltip.displayName = 'Tooltip';
export default Tooltip;
