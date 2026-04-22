import { type LoadingButtonProps } from '@mui/lab/LoadingButton';
import { type SxProps, type Theme } from '@mui/material';
import { type AvatarProps } from '../../design-system/Avatar/types';
/**
 * Base user properties required by UserCard.
 * Consuming applications can pass user objects with additional properties.
 */
export type UserCardUser = {
    id: string | number;
    firstName?: string;
    lastName?: string;
    email?: string;
    profilePicture?: string;
    employeeInternalId?: string;
};
/**
 * Configuration for a single action button in the UserCard footer
 */
export type UserCardActionButton<T extends UserCardUser = UserCardUser> = {
    /** Button label text (required) */
    label: string;
    /** Click handler for the button */
    onClick?: (user: T) => void;
    /** Button variant. Default: 'secondary' */
    variant?: 'primary' | 'secondary' | 'tertiary';
    /** Additional button props passed to the underlying Button component */
    buttonProps?: Omit<LoadingButtonProps, 'onClick' | 'children' | 'fullWidth'>;
};
/**
 * Props for the copy email functionality
 */
export type UserCardCopyProps = {
    /** Whether to show the copy button. Default: true if email exists */
    show?: boolean;
    /** Tooltip text shown before copying. Default: 'Copy email to clipboard' */
    copyLabel?: string;
    /** Tooltip text shown after copying. Default: 'Copied!' */
    copiedLabel?: string;
    /** Callback fired after email is copied */
    onCopy?: (email: string) => void;
};
/**
 * Size configuration for the UserCard
 */
export type UserCardSizeProps = {
    /** Total width of the card in pixels. Default: 312 */
    width?: number;
    /** Horizontal padding inside the card in spacing units. Default: 2 (16px) */
    horizontalPadding?: number;
    /** Gap between avatar and text in spacing units. Default: 1 (8px) */
    headerGap?: number;
    /** Avatar size. Default: 'large' */
    avatarSize?: AvatarProps['size'];
};
export type UserCardLabels = {
    /** Tooltip text shown before copying email */
    copyEmailLabel: string;
    /** Tooltip text shown after copying email */
    copiedLabel: string;
};
export type UserCardProps<T extends UserCardUser = UserCardUser> = {
    /** User object containing the data to display */
    user: T;
    /** Size configuration for the card */
    sizeProps?: UserCardSizeProps;
    /** Labels for copy functionality (required for i18n support) */
    labels: UserCardLabels;
    /**
     * Array of action buttons to display in the card footer (max 3).
     * Buttons are displayed with equal width distribution.
     */
    actionButtons?: UserCardActionButton<T>[];
    /** Configuration for the copy email functionality */
    copyProps?: UserCardCopyProps;
    /** Header background color. Default: theme.palette.newBase?.brand[500] */
    headerBackgroundColor?: string | ((theme: Theme) => string);
    /** Custom sx props for the root container */
    sx?: SxProps<Theme>;
    /** Whether to stop click propagation on the card. Default: true */
    stopPropagation?: boolean;
    /** Additional avatar props */
    avatarProps?: Omit<AvatarProps, 'size' | 'src' | 'text'>;
};
