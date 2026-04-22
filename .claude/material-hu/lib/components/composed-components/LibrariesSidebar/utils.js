import { arrayMove } from '@dnd-kit/sortable';
import { IconType } from '../../../types/icons';
import { IconGripVertical } from '@tabler/icons-react';
import { AVATAR_STYLES } from './constants';
export const getAccordionSx = (colors, depth, hasReachedLimit) => {
    let sx = {
        width: '100%',
        minWidth: 0,
        '& .MuiAccordionSummary-expandIconWrapper': {
            borderRadius: 1,
            width: 32,
            height: 32,
            p: 0.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': { backgroundColor: colors.NESTED_ROW_HOVER },
            ...(hasReachedLimit && {
                display: 'none',
                visibility: 'hidden',
            }),
        },
    };
    const isNested = depth > 0;
    if (isNested) {
        sx = {
            ...sx,
            backgroundColor: colors.MAIN_LIGHT_GREY,
            '& .accordion-summary': {
                '&:hover': { backgroundColor: colors.NESTED_ROW_HOVER },
                pl: getLeftSpacing(depth),
            },
        };
    }
    else {
        sx = {
            ...sx,
            '&:hover': { backgroundColor: colors.ROW_HOVER },
            '&.Mui-expanded': {
                backgroundColor: colors.EXPANDED_ROW,
            },
        };
    }
    return sx;
};
export const getAvatarConfig = (item, showDragIcon) => {
    const color = item.isActive ? 'success' : 'disabled';
    const isImage = item.icon.type === IconType.IMAGE;
    const isEmoji = item.icon.type === IconType.EMOJI;
    if (showDragIcon)
        return { Icon: IconGripVertical };
    return {
        withBadge: item.showBadge,
        badgeProps: { color },
        variant: 'square',
        color: 'white',
        src: isImage ? item.icon.value : undefined,
        text: isEmoji ? item.icon.value : undefined,
        sx: AVATAR_STYLES,
    };
};
export const getLeftSpacing = (depth) => 2 + depth * 2;
export const getCursorMode = (isSortMode, isDragging) => {
    if (isDragging)
        return 'grabbing';
    if (isSortMode)
        return 'grab';
    return 'pointer';
};
export const getItemsByParentId = (items, key) => items.filter(item => item.parentId === key);
/**
 * Get updated items on sortable list drag end.
 */
export const getReorderedItems = (items, active, over) => {
    if (over == null || active === over)
        return items;
    const oldIndex = items.findIndex(item => item.id === active);
    const newIndex = items.findIndex(item => item.id === over);
    if (oldIndex === -1 || newIndex === -1)
        return items;
    const reordered = arrayMove(items, oldIndex, newIndex);
    return reordered;
};
/**
 * Flattens an ArticleTree into a flat array of ArticleTree nodes (excluding the root).
 * Traverses all children recursively in pre-order.
 *
 * @param {ArticleTree | undefined} root - The root ArticleTree node to flatten.
 * @returns {ArticleTree[]} Flattened list of ArticleTree nodes.
 */
export const flattenArticleTree = (root) => {
    if (!root?.children?.length)
        return [];
    const result = [];
    const stack = [...root.children].reverse();
    while (stack.length) {
        const node = stack.pop();
        if (!node)
            break;
        result.push(node);
        if (node.children)
            stack.push(...[...node.children].reverse());
    }
    return result;
};
/**
 * Maps SortedItem[] order payload into an array of objects with their parentId and the ordered IDs of their children.
 *
 * @param {SortedItem[]} payload - List of sorted items with parent and their ordered children.
 * @returns {{parentId: number | null, orderedIds: number[]}[]} Array mapping parent IDs to ordered children IDs.
 */
export const getNewPositionOrders = (payload) => {
    return payload.map(order => ({
        parentId: order.parentId,
        orderedIds: order.items.map(item => item.id),
    }));
};
/**
 * Retrieves the root-level articles from a SortedItem[] payload.
 *
 * @param {SortedItem[]} payload - List of sorted items.
 * @returns {LibrariesTreeItem[]} Root-level sorted items.
 */
export const getRootArticlesFromSortList = (payload) => {
    return payload.find(order => order.parentId === null)?.items ?? [];
};
/**
 * Updates the position of child articles in a tree structure based on new sort order.
 *
 * @param {LibrariesTreeItem[]} items - The original list of items.
 * @param {SortedItem[]} changes - The changes describing new sort order for children.
 * @returns {LibrariesTreeItem[]} The updated and sorted list of items.
 */
export const getChildrenArticlesFromSortList = (items, changes) => {
    const newItems = [...items];
    const itemMap = new Map(newItems.map(item => [item.id, item]));
    for (const change of changes) {
        change.items.forEach((item, index) => {
            const target = itemMap.get(item.id);
            if (target)
                target.position = index + 1;
        });
    }
    return sortByPosition(newItems);
};
/**
 * Returns a new articles list, handling either root or child nodes based on isRoot.
 *
 * @param {SortedItem[]} payload - List of sorted items.
 * @param {LibrariesTreeItem[]} items - Full item list.
 * @param {boolean} isRoot - True if handling root level, false if handling a child branch.
 * @returns {LibrariesTreeItem[]} New articles list based on changes.
 */
export const getNewArticlesList = (payload, items, isRoot) => {
    if (isRoot)
        return getRootArticlesFromSortList(payload);
    return getChildrenArticlesFromSortList(items, payload);
};
/**
 * Sorts an array based on the "position" field, handling null as 0.
 *
 * @template T
 * @param {T[]} items - The list of items to sort.
 * @returns {T[]} New array sorted by the position property.
 */
export const sortByPosition = (items) => {
    return [...items].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
};
/**
 * Builds a Map of node IDs to tree depth.
 *
 * @param {ArticleTree | undefined} tree - Root node of the tree.
 * @param {number} [depth=1] - Starting depth, default is 1.
 * @param {Map<number, number>} [map=new Map()] - A map to be mutated and returned.
 * @returns {Map<number, number>} Map of node ID to its depth in the tree.
 */
export const buildDepthMap = (tree, depth = 1, map = new Map()) => {
    if (!tree)
        return map;
    map.set(tree.id, depth);
    tree.children?.forEach(child => {
        buildDepthMap(child, depth + 1, map);
    });
    return map;
};
