import { type BreadcrumbLink } from '../../Breadcrumbs/types';
type CollapsedItemsPopperProps = {
    id: string | undefined;
    open: boolean;
    anchorEl: HTMLElement | null;
    collapsedLinks: BreadcrumbLink[];
};
export declare const CollapsedItemsPopper: ({ id, open, anchorEl, collapsedLinks, }: CollapsedItemsPopperProps) => import("react/jsx-runtime").JSX.Element;
export {};
