import { type BadgeProps as MuiBadgeProps } from '@mui/material';
export type BadgeProps = {
    /** The color of the badge indicator */
    color?: MuiBadgeProps['color'];
    /** Whether the badge is hidden */
    invisible?: MuiBadgeProps['invisible'];
    /** CSS class applied to the root element */
    className?: MuiBadgeProps['className'];
    /** Visual style of the badge: `dot` renders a small circle, `standard` shows content */
    variant?: MuiBadgeProps['variant'];
    /** The element the badge is attached to */
    children?: MuiBadgeProps['children'];
    /** Position of the badge relative to its child */
    anchorOrigin?: MuiBadgeProps['anchorOrigin'];
    /** Accessible title for the badge */
    title?: MuiBadgeProps['title'];
    /** Custom styles applied to the root element */
    sx?: MuiBadgeProps['sx'];
    /** Value displayed inside the badge indicator */
    badgeContent?: number | string;
};
