import { type ReactNode } from 'react';
import { type LoadingButtonProps } from '@mui/lab';
import { type DrawerProps as MUIDrawerProps, type StackProps, type SxProps, type Theme } from '@mui/material';
import { type DrawerCloseReason } from '../../../components/layers/Drawers/types';
/**
 * @deprecated Use HuDrawer and HuDrawerProps instead.
 */
export type { MUIDrawerProps };
export declare const DrawerSize: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
    readonly TASK_FOCUS: "taskFocus";
};
export type DrawerSizeValue = (typeof DrawerSize)[keyof typeof DrawerSize];
export type DrawerRestoreSize = Exclude<DrawerSizeValue, typeof DrawerSize.TASK_FOCUS>;
export type DrawerProps = Omit<MUIDrawerProps, 'onClose'> & {
    /** Title displayed in the drawer header */
    title?: string;
    /** Size variant of the drawer */
    size?: DrawerRestoreSize;
    /** Callback fired when the drawer is closed */
    onClose?: (reason?: DrawerCloseReason) => void;
    /**
     * Callback function triggered when the back button is clicked.
     * If not provided, the back button will trigger `onClose` instead.
     */
    onBack?: () => void;
    /** Shows a back button in the header */
    hasBackButton?: boolean;
    /** Prevents closing the drawer by pressing Escape */
    disableEscapeKeyDown?: boolean;
    /** Props forwarded to the primary action button */
    primaryButtonProps?: LoadingButtonProps;
    /** Props forwarded to the secondary action button */
    secondaryButtonProps?: LoadingButtonProps;
    /** Custom content rendered in the footer */
    footer?: ReactNode;
    /** Main content area of the drawer. If provided, drawer will use a double layout with primary and secondary content areas. */
    primaryContent?: ReactNode;
    /** Secondary (side) content area of the drawer. If provided, drawer will use a double layout with primary and secondary content areas. */
    secondaryContent?: ReactNode;
    /** Props passed to layout slot elements */
    slotProps?: {
        /** Props for the outer layout Stack */
        layout?: StackProps;
        /** Props for the primary content Stack */
        primaryContent?: StackProps;
        /** Props for the secondary content Stack */
        secondaryContent?: StackProps;
    };
    /** Decorative element rendered beside the title */
    titleDecorator?: ReactNode;
    /** When true, header shows maximize button and supports task focus mode (fullscreen). State is managed internally by Wrapper. */
    enableTaskFocus?: boolean;
    /** Extra elements rendered in the header next to the maximize button (when enableTaskFocus). */
    extraHeaderActions?: ReactNode;
    /** When true, the drawer can be swiped to close. */
    swipeable?: boolean;
};
export type DrawerHeaderProps = {
    /** Title displayed in the header */
    title?: string;
    /** Callback fired when the drawer is closed */
    onClose: (reason?: DrawerCloseReason) => void;
    /** Callback fired when the back button is clicked */
    onBack?: () => void;
    /** Shows the back button in the header */
    hasBackButton?: boolean;
    /** Additional content rendered inside the header */
    children?: ReactNode;
    /** Custom styles applied to the header root */
    sx?: SxProps<Theme>;
    /** Called when user clicks the maximize/restore button. Only shown when provided. */
    onToggleTaskFocus?: () => void;
    /** Whether the drawer is in task focus (fullscreen) mode. */
    isTaskFocus?: boolean;
    /** Extra elements rendered between main actions (children) and the maximize button. */
    extraHeaderActions?: ReactNode;
};
export type DrawerBodyProps = {
    /** Content rendered inside the drawer body */
    children: ReactNode;
    /** Props forwarded to the body Stack container */
    slotProps?: StackProps;
};
export type DrawerDoubleLayoutProps = {
    /** Main content area */
    primaryContent: ReactNode;
    /** Secondary (side) content area */
    secondaryContent: ReactNode;
    /** Props passed to layout slot elements */
    slotProps?: {
        /** Props for the outer layout Stack */
        layout?: StackProps;
        /** Props for the primary content Stack */
        primaryContent?: StackProps;
        /** Props for the secondary content Stack */
        secondaryContent?: StackProps;
    };
};
export type DrawerFooterProps = {
    /** Content rendered inside the drawer footer */
    children: ReactNode;
};
export type DrawerActionsProps = {
    /** Props forwarded to the primary action button */
    primaryButtonProps?: LoadingButtonProps;
    /** Props forwarded to the secondary action button */
    secondaryButtonProps?: LoadingButtonProps;
    /** Size variant used to adjust button layout */
    size?: DrawerRestoreSize;
    /** Additional action elements rendered alongside the buttons */
    children?: ReactNode;
};
