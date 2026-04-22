import { type BaseSortableItem, type SortableItemProps } from '../types';
declare const SortableItem: <T extends BaseSortableItem>({ item, ItemComponent, dragByHandler, style: inheritedStyle, hasDragOverlay, index, slotProps, }: SortableItemProps<T>) => import("react/jsx-runtime").JSX.Element;
export default SortableItem;
