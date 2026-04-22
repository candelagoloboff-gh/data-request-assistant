import { type ReactNode } from 'react';
import { type StackProps } from '@mui/material';
import { type PillsProps } from '../Pills/types';
export type SidebarProps = {
    /** Whether the sidebar is in collapsed (icon-only) mode */
    isCollapsed?: boolean;
    /** Callback to open the mobile menu */
    openMenu?: () => void;
    /** Current URL pathname used to highlight the active item */
    pathname: string;
    /** Array of navigation sections to render */
    sections?: Array<NavSectionProps>;
    /** Custom content rendered in place of the standard nav sections */
    customNavSection?: ReactNode;
    /** Custom styles applied to the root element */
    sx?: StackProps['sx'];
};
export type NavSectionProps = Pick<Partial<SidebarProps>, 'isCollapsed' | 'openMenu' | 'pathname'> & {
    /** Navigation items belonging to this section */
    items: Item[];
    /** Heading label displayed above the section items */
    title: string;
    /** Unique key for React list rendering */
    key: React.Key;
};
export type Item = {
    /** Unique key for React list rendering */
    key: React.Key;
    /** Icon element displayed beside the item label */
    icon?: ReactNode;
    /** Badge/pill metadata shown on the item */
    info?: {
        /** Renders a "New" badge on the item */
        isNew?: boolean;
        /** Custom pill component shown on the item */
        customPill?: PillsProps;
        /** Number shown in a notification badge */
        notificationCount?: number;
    };
    /** URL path this item navigates to */
    path: string;
    /** Display label for the navigation item */
    title: string;
    /** When true, the item does not use Next.js Link behavior */
    skipLinkBehavior?: boolean;
    /** Nested items rendered as an expandable sub-menu */
    subItems?: Omit<Item, 'subItems' | 'icon'>[];
    /** Callback fired when the item is clicked */
    onClick?: () => void;
    /** Fallback path used when the main path is not accessible */
    fallbackPath?: string;
};
export type NavItemProps = Pick<SidebarProps, 'isCollapsed' | 'openMenu'> & Omit<Item, 'subItems'> & {
    /** Nesting level of the item (0 for top-level) */
    depth: number;
    /** Whether the item's sub-menu is currently expanded */
    open?: boolean;
    /** Item has children but the sidebar is collapsed */
    hasChildrenButCollapsed?: boolean;
    /** Whether this is the last item in its list */
    isLastChild?: boolean;
    /** Whether this item matches the current route */
    active?: boolean;
    /** Sub-menu items rendered as children */
    children?: ReactNode;
};
export type NavButtonContentProps = Pick<NavItemProps, 'title' | 'info' | 'icon' | 'active' | 'children'>;
