import { type AvatarProps as MuiAvatarProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
import { type BadgeProps } from '../Badge/types';
export type AvatarProps = {
    /** Custom styles applied to the root element */
    sx?: MuiAvatarProps['sx'];
    /** Shape variant of the avatar */
    variant?: MuiAvatarProps['variant'];
    /** URL of the avatar image */
    src?: MuiAvatarProps['src'];
    /** Alt text for the avatar image */
    alt?: MuiAvatarProps['alt'];
    /** Callback fired when the avatar is clicked */
    onClick?: MuiAvatarProps['onClick'];
    /** Controls the dimensions of the avatar */
    size?: 'small' | 'medium' | 'large';
    /** Background color theme of the avatar */
    color?: 'white' | 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning' | 'info';
    /** Renders a badge overlay on the avatar */
    withBadge?: boolean;
    /** Props forwarded to the badge when withBadge is true */
    badgeProps?: BadgeProps;
    /** Initials or text rendered when no image is provided */
    text?: string;
    /** Icon rendered inside the avatar when no image or text is set */
    Icon?: TablerIcon;
    /** Applies disabled visual styling and blocks interaction */
    disabled?: boolean;
    /** Applies loading visual styling and blocks interaction */
    loading?: boolean;
};
