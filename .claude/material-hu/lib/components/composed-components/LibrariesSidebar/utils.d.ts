import { type SidebarColors } from '../LibrariesSidebar/hooks/useGetSidebarColors';
import { type ArticleTree, type LibrariesTreeItem, type SortedItem } from '../LibrariesSidebar/types';
import { type AvatarProps } from '../../design-system/Avatar/types';
import { type UniqueIdentifier } from '@dnd-kit/core';
import { type SxProps, type Theme } from '@mui/material/styles';
export declare const getAccordionSx: (colors: SidebarColors, depth: number, hasReachedLimit?: boolean) => SxProps<Theme>;
export declare const getAvatarConfig: (item: LibrariesTreeItem, showDragIcon?: boolean) => AvatarProps;
export declare const getLeftSpacing: (depth: number) => number;
export declare const getCursorMode: (isSortMode: boolean, isDragging?: boolean) => "grab" | "grabbing" | "pointer";
export declare const getItemsByParentId: (items: LibrariesTreeItem[], key?: number | null) => LibrariesTreeItem[];
/**
 * Get updated items on sortable list drag end.
 */
export declare const getReorderedItems: (items: LibrariesTreeItem[], active: UniqueIdentifier, over: UniqueIdentifier | null) => LibrariesTreeItem[];
/**
 * Flattens an ArticleTree into a flat array of ArticleTree nodes (excluding the root).
 * Traverses all children recursively in pre-order.
 *
 * @param {ArticleTree | undefined} root - The root ArticleTree node to flatten.
 * @returns {ArticleTree[]} Flattened list of ArticleTree nodes.
 */
export declare const flattenArticleTree: (root?: ArticleTree) => ArticleTree[];
/**
 * Maps SortedItem[] order payload into an array of objects with their parentId and the ordered IDs of their children.
 *
 * @param {SortedItem[]} payload - List of sorted items with parent and their ordered children.
 * @returns {{parentId: number | null, orderedIds: number[]}[]} Array mapping parent IDs to ordered children IDs.
 */
export declare const getNewPositionOrders: (payload: SortedItem[]) => {
    parentId: number | null;
    orderedIds: number[];
}[];
/**
 * Retrieves the root-level articles from a SortedItem[] payload.
 *
 * @param {SortedItem[]} payload - List of sorted items.
 * @returns {LibrariesTreeItem[]} Root-level sorted items.
 */
export declare const getRootArticlesFromSortList: (payload: SortedItem[]) => LibrariesTreeItem[];
/**
 * Updates the position of child articles in a tree structure based on new sort order.
 *
 * @param {LibrariesTreeItem[]} items - The original list of items.
 * @param {SortedItem[]} changes - The changes describing new sort order for children.
 * @returns {LibrariesTreeItem[]} The updated and sorted list of items.
 */
export declare const getChildrenArticlesFromSortList: (items: LibrariesTreeItem[], changes: SortedItem[]) => LibrariesTreeItem[];
/**
 * Returns a new articles list, handling either root or child nodes based on isRoot.
 *
 * @param {SortedItem[]} payload - List of sorted items.
 * @param {LibrariesTreeItem[]} items - Full item list.
 * @param {boolean} isRoot - True if handling root level, false if handling a child branch.
 * @returns {LibrariesTreeItem[]} New articles list based on changes.
 */
export declare const getNewArticlesList: (payload: SortedItem[], items: LibrariesTreeItem[], isRoot: boolean) => LibrariesTreeItem[];
/**
 * Sorts an array based on the "position" field, handling null as 0.
 *
 * @template T
 * @param {T[]} items - The list of items to sort.
 * @returns {T[]} New array sorted by the position property.
 */
export declare const sortByPosition: <T extends {
    position: number | null;
}>(items: T[]) => T[];
/**
 * Builds a Map of node IDs to tree depth.
 *
 * @param {ArticleTree | undefined} tree - Root node of the tree.
 * @param {number} [depth=1] - Starting depth, default is 1.
 * @param {Map<number, number>} [map=new Map()] - A map to be mutated and returned.
 * @returns {Map<number, number>} Map of node ID to its depth in the tree.
 */
export declare const buildDepthMap: (tree: ArticleTree | undefined, depth?: number, map?: Map<number, number>) => Map<number, number>;
