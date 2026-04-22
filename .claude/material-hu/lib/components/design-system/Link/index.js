import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Link as MuiLink, useTheme } from '@mui/material';
import { IconArrowNarrowRight } from '@tabler/icons-react';
export const Link = forwardRef(({ children, hasIcon = false, iconSize = 16, disabled = false, sx = {}, ...props }, ref) => {
    const theme = useTheme();
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };
    const isDarkMode = theme.palette.mode === 'dark';
    const defaultColor = isDarkMode
        ? theme.palette.new?.text.neutral.inverted
        : theme.palette.new?.action.button.background.primary.default;
    const visitedColor = isDarkMode
        ? theme.palette.new?.text.neutral.inverted
        : theme.palette.new?.action.button.background.primary.focus;
    const disabledColor = theme.palette.new?.action.button.background.primary.disabled;
    return (_jsxs(MuiLink, { ref: ref, color: disabled ? disabledColor : defaultColor, sx: {
            cursor: disabled ? 'not-allowed' : 'pointer',
            gap: 0.25,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '&:visited': {
                color: visitedColor,
                textDecorationColor: visitedColor,
                '& svg': {
                    stroke: visitedColor,
                },
            },
            ...sx,
        }, onClick: e => handleClick(e), "aria-disabled": disabled, ...props, children: [_jsx("span", { children: children }), hasIcon && (_jsx(IconArrowNarrowRight, { color: disabled ? disabledColor : defaultColor, size: iconSize }))] }));
});
Link.displayName = 'Link';
export default Link;
