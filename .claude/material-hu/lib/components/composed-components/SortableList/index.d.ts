import { type BaseSortableItem, type SortableListProps } from './types';
export declare const SortableList: <T extends BaseSortableItem>({ onSort, items, ItemComponent, direction, sx, dragByHandler, hasDragOverlay, restrictToAncestor, disabled, slotProps, }: SortableListProps<T>) => import("react/jsx-runtime").JSX.Element;
export default SortableList;
