import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useState } from 'react';
import { getItemsByParentId } from './utils';
export const SidebarContext = createContext(undefined);
export const SidebarProvider = ({ items = [], children, onSort, onAddMouseEnter, }) => {
    const [isSortMode, setIsSortMode] = useState(false);
    const [pendingSortByParent, setPendingSortByParent] = useState(() => new Map());
    const getTreeItem = useCallback((id) => items.find(i => i.id === id), [items]);
    const getOrderedItems = (parentId) => {
        const key = parentId ?? null;
        const pending = pendingSortByParent.get(key);
        if (pending === undefined)
            return getItemsByParentId(items, key);
        return pending;
    };
    const setPendingSort = (nextItems, parentId) => {
        const key = parentId ?? null;
        setPendingSortByParent(prev => {
            const next = new Map(prev);
            next.set(key, nextItems);
            return next;
        });
    };
    const handleRestoreSortableItems = () => setPendingSortByParent(new Map());
    const handleToggleSortMode = () => setIsSortMode(prev => !prev);
    const handleSaveSort = () => {
        if (onSort && pendingSortByParent.size > 0) {
            const entries = Array.from(pendingSortByParent.entries());
            const newItems = entries.map(([key, items]) => ({
                items,
                parentId: typeof key === 'number' ? key : null,
            }));
            onSort(newItems);
        }
        setPendingSortByParent(new Map());
        setIsSortMode(false);
    };
    return (_jsx(SidebarContext.Provider, { value: {
            isSortMode,
            showSortButton: Boolean(onSort),
            onAddMouseEnter,
            getTreeItem,
            getOrderedItems,
            setPendingSort,
            handleToggleSortMode,
            handleRestoreSortableItems,
            handleSaveSort,
        }, children: children }));
};
export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('SidebarContext must be used within SidebarContext.Provider');
    }
    return context;
};
