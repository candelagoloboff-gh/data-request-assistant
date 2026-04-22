import { type PropsWithChildren } from 'react';
import { type IconInterface } from '../../../types/icons';
export type LibrariesTreeItem = {
    title: string;
    id: number;
    icon: IconInterface;
    position: number | null;
    hasChildren: boolean;
    parentId: number | null;
    hasReachedLimit?: boolean;
    isActive: boolean;
    showBadge?: boolean;
    hideCreateButton?: boolean;
    onClick?: (item: LibrariesTreeItem) => void;
};
export type SidebarChildRowProps = Pick<LibrariesSidebarProps, 'onAdd'> & {
    item: LibrariesTreeItem;
    depth: number;
};
export type SidebarRootListProps = Pick<LibrariesSidebarProps, 'loading'>;
export type SortableRootRowProps = {
    item: LibrariesTreeItem;
};
export type SidebarButtonBase = {
    tooltipTitle?: string;
    label?: string;
};
export type SidebarSlotProps = {
    sortButton?: SidebarButtonBase;
    addButton?: SidebarButtonBase;
};
export type SortedItem = {
    items: LibrariesTreeItem[];
    parentId: number | null;
};
export type SidebarContextValue = Pick<LibrariesSidebarProps, 'onAddMouseEnter'> & {
    isSortMode: boolean;
    showSortButton: boolean;
    getTreeItem: (id: number) => LibrariesTreeItem | undefined;
    getOrderedItems: (parentId?: number) => LibrariesTreeItem[];
    setPendingSort: (items: LibrariesTreeItem[], parentId?: number) => void;
    handleToggleSortMode: () => void;
    handleRestoreSortableItems: () => void;
    handleSaveSort: () => void;
};
export type SidebarProviderProps = PropsWithChildren<Pick<LibrariesSidebarProps, 'items' | 'onSort' | 'onAddMouseEnter'>>;
export type SidebarAddFunction = (parentId?: number) => void;
export type LibrariesSidebarProps = {
    items: LibrariesTreeItem[];
    headerTitle?: string;
    parentId?: number;
    loading?: boolean;
    slotProps?: SidebarSlotProps;
    onAddMouseEnter?: (articleId?: number) => void;
    onBack: () => void;
    onSort?: (sortedItems: SortedItem[]) => void;
    onAdd?: SidebarAddFunction;
};
export declare enum ArticleStatus {
    ENABLED = "enabled",
    DISABLED = "disabled"
}
export type ArticleTree = {
    id: number;
    title: string;
    status: ArticleStatus;
    position: number;
    parentId: number | null;
    children: ArticleTree[] | null;
    icon: IconInterface;
};
