import { type FC } from 'react';
import { type UniqueIdentifier } from '@dnd-kit/core';
type SortableItem = {
    id: UniqueIdentifier;
};
type ItemComponentProps<T extends SortableItem> = {
    item: T;
};
type SortableItemProps<T extends SortableItem> = {
    item: T;
    ItemComponent: FC<ItemComponentProps<T>>;
};
declare const SortableItem: <T extends SortableItem>({ item, ItemComponent, }: SortableItemProps<T>) => import("react/jsx-runtime").JSX.Element;
export type SortableProps<T extends SortableItem> = {
    items: T[];
    onSort: (sortedItems: T[]) => void;
    ItemComponent: FC<{
        item: T;
    }>;
};
export declare const Sortable: <T extends SortableItem>({ onSort, items, ItemComponent, }: SortableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Sortable;
