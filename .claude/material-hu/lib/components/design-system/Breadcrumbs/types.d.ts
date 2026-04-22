import { type LinkProps } from '../Link/types';
export type BreadcrumbsProps = {
    /** Ordered list of breadcrumb items to render */
    links: BreadcrumbLink[];
    /** Adjusts colors for use on dark backgrounds */
    darkBackground?: boolean;
    /** Whether the breadcrumbs are loading */
    loading?: boolean;
};
export type BreadcrumbLink = Partial<Pick<LinkProps, 'href' | 'onClick' | 'component'>> & {
    /** Display text for the breadcrumb item */
    title: string;
    /** Icon rendered before the breadcrumb label */
    icon?: React.ElementType;
    /** Renders the item as non-interactive (last/current page) */
    isPresentational?: boolean;
};
export type BreadcrumbsLinkBoxProps = Pick<BreadcrumbsProps, 'darkBackground'> & {
    /** Content wrapped by the link box */
    children: React.ReactNode;
    /** Icon displayed inside the link box */
    breadcrumbIcon?: BreadcrumbLink['icon'];
};
export type CollapsedIconProps = Pick<BreadcrumbsProps, 'darkBackground'> & {
    /** List of collapsed links */
    collapsedLinks: BreadcrumbLink[];
};
export type CollapsedItemsMenuProps = {
    /** Unique identifier for the menu */
    id: string | undefined;
    /** Whether the menu is open */
    open: boolean;
    /** Reference to the anchor element */
    anchorEl: HTMLElement | null;
    /** List of collapsed links */
    collapsedLinks: BreadcrumbLink[];
    /** Called when a menu item is clicked, used to close the menu */
    onItemClick: () => void;
};
