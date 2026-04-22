import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, useTheme } from '@mui/material';
import { getBadgeProps } from '../utils';
const CardContainerBadge = ({ badge, sx }) => {
    const theme = useTheme();
    const { typography } = theme;
    const badgeProps = getBadgeProps(badge?.type, theme);
    if (!badge || !badgeProps)
        return null;
    return (_jsxs(Stack, { className: "CardContainerBadge-root", sx: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: badgeProps.backgroundColor,
            borderTop: `1px solid ${badgeProps.borderColor}`,
            py: 0.5,
            px: 2,
            gap: 0.25,
            ...sx,
        }, children: [badge.hasIcon && (_jsx(badgeProps.icon, { className: "CardContainerBadge-icon", color: badgeProps.fontColor, size: typography.globalXXS.fontSize })), _jsx(Typography, { className: "CardContainerBadge-label", sx: { color: badgeProps.fontColor }, variant: "globalXXS", children: badge.label })] }));
};
export default CardContainerBadge;
