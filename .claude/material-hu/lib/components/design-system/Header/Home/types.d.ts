import { type ButtonProps, type ExtendButtonBaseTypeMap, type IconButtonTypeMap, type StackProps } from '@mui/material';
import { type OverrideProps } from '@mui/material/OverridableComponent';
import { type AvatarProps } from '../../Avatar';
type LinkButtonProps = {
    href: string;
} & OverrideProps<ExtendButtonBaseTypeMap<IconButtonTypeMap>, 'a'>;
type ExtraOptionButtonProps = ButtonProps | LinkButtonProps;
type ExtraOption = ExtraOptionButtonProps & {
    key: ButtonProps['key'];
};
export type HomeHeaderProps = {
    /** Callback to open the navigation menu */
    onOpenMenu: () => void;
    /** URL of the logo image */
    logoSrc: string;
    /** Accessible alt text for the logo */
    logoAlt: string;
    /** Whether the current user has admin privileges */
    isAdmin?: boolean;
    /** Up to two extra action buttons rendered in the header */
    extraOptions?: [] | [ExtraOption] | [ExtraOption, ExtraOption];
    /** Props for the user avatar */
    avatarProps: AvatarProps;
    /** Number of unread notifications to display on the badge */
    notificationsCount?: number;
    /** Props for the button wrapping the avatar */
    avatarButtonProps?: ButtonProps;
    /** Content rendered inside the avatar popover */
    avatarPopoverContent: React.ReactNode;
    /** Hides the support button when true */
    hideSupportButton?: boolean;
    /** Callback to open the language selector menu */
    onOpenLanguageMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Callback to open the support menu */
    onOpenSupportMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Hides the notifications button when true */
    hideNotificationsButton?: boolean;
    /** Additional styles applied to the root Stack */
    sx?: StackProps['sx'];
    /** URL the logo links to when clicked */
    logoLink?: string;
    /** Hides the hamburger menu button when true */
    hideMenuButton?: boolean;
    /** Disables the hamburger menu button when true */
    disabledMenuButton?: boolean;
    /** Props for the support link button */
    supportButtonProps: LinkButtonProps;
    /** URL for the support resource */
    supportUrl?: string;
    /** Props for the notifications icon button */
    notificationsButtonProps?: ButtonProps;
    /** Callback to open the notifications menu */
    onOpenNotificationsMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** HTML id attribute for the root element */
    id?: string;
    /** Optional banner node rendered below the header bar */
    banner?: React.ReactNode;
    /** Shows an unread indicator dot on the notifications button */
    hasUnreadNotifications?: boolean;
    /** Callback to open the avatar dropdown menu */
    onOpenAvatarMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Controlled open state of the avatar popover */
    avatarPopoverOpen?: boolean;
    /** Callback when the avatar popover open state changes */
    onAvatarPopoverOpenChange?: (open: boolean) => void;
};
export {};
