import { type Meta, type StoryObj } from '@storybook/react-vite';
import HomeHeader from '.';
declare const meta: Meta<typeof HomeHeader>;
export default meta;
type Story = StoryObj<typeof HomeHeader>;
export declare const DefaultStory: Story;
export declare const ShortLogo: Story;
export declare const ExtraOption: Story;
export declare const WithSupportMenu: Story;
export declare const WithUnreadNotifications: {
    args: {
        hideNotificationsButton: false;
        notificationsCount: number;
        hasUnreadNotifications: true;
        onOpenMenu?: (() => void) | undefined;
        logoSrc?: string | undefined;
        logoAlt?: string | undefined;
        isAdmin?: boolean;
        extraOptions?: [] | [(import("@mui/material").ButtonProps | ({
            href: string;
        } & import("@mui/material").IconButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
            ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
        }, "className" | "style" | "classes" | "children" | "color" | "sx" | "variant" | "tabIndex" | "disabled" | "action" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge">)) & {
            key: import("@mui/material").ButtonProps["key"];
        }] | [(import("@mui/material").ButtonProps | ({
            href: string;
        } & import("@mui/material").IconButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
            ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
        }, "className" | "style" | "classes" | "children" | "color" | "sx" | "variant" | "tabIndex" | "disabled" | "action" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge">)) & {
            key: import("@mui/material").ButtonProps["key"];
        }, (import("@mui/material").ButtonProps | ({
            href: string;
        } & import("@mui/material").IconButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
            ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
        }, "className" | "style" | "classes" | "children" | "color" | "sx" | "variant" | "tabIndex" | "disabled" | "action" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge">)) & {
            key: import("@mui/material").ButtonProps["key"];
        }];
        avatarProps?: import("../../Avatar").AvatarProps | undefined;
        avatarButtonProps?: import("@mui/material").ButtonProps;
        avatarPopoverContent?: React.ReactNode;
        hideSupportButton?: boolean;
        onOpenLanguageMenu?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
        onOpenSupportMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        sx?: import("@mui/material").StackProps["sx"];
        logoLink?: string;
        hideMenuButton?: boolean;
        disabledMenuButton?: boolean;
        supportButtonProps?: ({
            href: string;
        } & import("@mui/material").IconButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
            ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
        }, "className" | "style" | "classes" | "children" | "color" | "sx" | "variant" | "tabIndex" | "disabled" | "action" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge">) | undefined;
        supportUrl?: string;
        notificationsButtonProps?: import("@mui/material").ButtonProps;
        onOpenNotificationsMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        id?: string;
        banner?: React.ReactNode;
        onOpenAvatarMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        avatarPopoverOpen?: boolean;
        onAvatarPopoverOpenChange?: (open: boolean) => void;
        ref?: import("react").Ref<HTMLDivElement> | undefined;
        key?: import("react").Key | null | undefined;
    };
};
export declare const ControlledAvatarOneAtATime: Story;
