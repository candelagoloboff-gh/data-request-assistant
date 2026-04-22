import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar as AvatarMui, Typography, useTheme } from '@mui/material';
import { IconUser } from '@tabler/icons-react';
import Badge from '../Badge';
import Skeleton from '../Skeleton';
import { getBorderVariant, getColorsVariant, getIconSize, getOffset, getSizeInPixels, getSkeletonVariant, } from './utils';
// shows src then text then icon
export const Avatar = ({ size = 'medium', color = 'default', withBadge = false, badgeProps = {}, text, Icon = IconUser, sx, disabled = false, loading = false, ...props }) => {
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    if (loading) {
        return (_jsx(Skeleton, { variant: getSkeletonVariant(props.variant), width: parseInt(sizeInPixels), height: parseInt(sizeInPixels) }));
    }
    const colorsVariant = getColorsVariant(color, theme);
    const borderVariant = getBorderVariant(color, theme);
    const roundedBorderRadius = theme.shape.borderRadius;
    const avatar = (_jsxs(AvatarMui, { sx: {
            ...colorsVariant,
            height: sizeInPixels,
            width: sizeInPixels,
            border: borderVariant,
            ...(disabled && {
                opacity: 0.5,
                cursor: 'default',
                pointerEvents: 'none',
            }),
            ...(props.variant === 'rounded' && {
                borderRadius: roundedBorderRadius,
            }),
            ...(props.variant === 'square' && {
                borderRadius: 1,
            }),
            ...sx,
        }, ...props, children: [text && (_jsx(Typography, { variant: "globalXS", fontWeight: "semiBold", sx: { color: 'inherit' }, children: text })), !text && Icon && _jsx(Icon, { size: getIconSize(size) })] }));
    const forcedVariant = size === 'small' || !badgeProps.badgeContent
        ? 'dot'
        : badgeProps?.variant || 'standard';
    const combinedBadgeProps = {
        variant: forcedVariant,
        color: 'primary',
        ...badgeProps,
    };
    return withBadge ? (_jsx(Badge, { className: "listItem-badge-avatar", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, sx: getOffset(size, forcedVariant), 
        // On DS3 the standard variant can be used with large and medium size
        badgeContent: badgeProps.badgeContent, ...combinedBadgeProps, children: avatar })) : (avatar);
};
export default Avatar;
