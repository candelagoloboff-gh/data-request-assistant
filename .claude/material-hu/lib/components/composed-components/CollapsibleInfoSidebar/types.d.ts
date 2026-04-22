import { type ReactNode } from 'react';
import { type StackProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
export type CollapsibleInfoSidebarPosition = 'left' | 'right';
export type CollapsibleInfoSidebarItem = {
    /**
     * Icon to display when sidebar is collapsed
     */
    Icon: TablerIcon;
    /**
     * Content to display when the item is expanded
     */
    content: ReactNode;
    /**
     * Optional text for the collapse button when this item is active
     * @default 'Colapsar' (or translated equivalent)
     */
    collapseButtonText?: string;
};
export type CollapsibleInfoSidebarProps = Pick<StackProps, 'sx'> & {
    /**
     * Array of items to display in the sidebar
     */
    items: CollapsibleInfoSidebarItem[];
    /**
     * Position of the sidebar
     * @default 'right'
     */
    position?: CollapsibleInfoSidebarPosition;
    /**
     * Width of the expanded content area
     * @default 288
     */
    contentWidth?: number;
    /**
     * Index of the item that should be initially expanded
     * If not provided, the sidebar starts collapsed
     */
    defaultExpandedIndex?: number;
    /**
     * If true, the sidebar will always remain expanded and cannot be collapsed
     * @default false
     */
    alwaysExpanded?: boolean;
    /**
     * Controlled state: Index of the currently expanded item
     * If provided, the component becomes controlled
     */
    expandedIndex?: number;
    /**
     * Callback fired when the expanded item changes
     * @param index - The index of the newly expanded item, or null if collapsed
     */
    onExpandedIndexChange?: (index: number | null) => void;
};
