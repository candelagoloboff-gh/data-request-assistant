import { createContext, useContext } from 'react';
export const SortableListContext = createContext(null);
export const useSortableListContext = () => {
    const context = useContext(SortableListContext);
    if (!context) {
        throw new Error('SortableList components must be used within SortableList.Root');
    }
    return context;
};
export const ItemContext = createContext(null);
export const useItemContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('DragHandle must be used within SortableList.Item');
    }
    return context;
};
