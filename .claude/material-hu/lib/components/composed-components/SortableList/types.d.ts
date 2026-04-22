import { type ComponentProps, type CSSProperties, type FC, type ReactNode } from 'react';
import { type UniqueIdentifier } from '@dnd-kit/core';
import { type IconButton, type StackProps } from '@mui/material';
import { type IconGripVertical } from '@tabler/icons-react';
export type BaseSortableItem = {
    id: UniqueIdentifier;
};
export type ItemComponentProps<T extends BaseSortableItem> = {
    item: T;
    dragHandleButton?: ReactNode;
    index: number;
    isDragging?: boolean;
    disabled?: boolean;
};
type SlotProps = {
    dragIcon?: ComponentProps<typeof IconGripVertical>;
    dragButton?: ComponentProps<typeof IconButton>;
};
export type SortableItemProps<T extends BaseSortableItem> = {
    item: T;
    ItemComponent: FC<ItemComponentProps<T>>;
    dragByHandler?: boolean;
    style?: CSSProperties;
    hasDragOverlay?: boolean;
    index: number;
    slotProps?: SlotProps;
};
export type SortableListProps<T extends BaseSortableItem> = {
    items: T[];
    onSort: (nextSortedItems: T[], oldIndex: number, newIndex: number) => void;
    ItemComponent: FC<ItemComponentProps<T>>;
    direction?: 'vertical' | 'horizontal';
    sx?: StackProps['sx'];
    slotProps?: SlotProps;
    disabled?: boolean;
    /**
     * If true, the list will be restricted to the first scrollable ancestor.
     * Default is false.
     */
    restrictToAncestor?: boolean;
    /**
     * If true, the drag handle will be shown when the item is being dragged.
     * Default is false.
     */
    dragByHandler?: boolean;
    /**
     * If true, the drag overlay will be shown when the item is being dragged.
     * Default is false.
     */
    hasDragOverlay?: boolean;
};
export {};
