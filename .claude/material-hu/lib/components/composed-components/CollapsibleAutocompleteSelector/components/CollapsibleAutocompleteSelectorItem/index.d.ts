import { type RowComponentProps } from 'react-window';
import { type SelectableListItemProps } from '../../../SelectableListItem';
import { type FieldOption } from '../../types';
export type CollapsibleAutocompleteSelectorItemProps<T = unknown> = {
    items: T[];
    displayItems: FieldOption[];
    selectedCount: number;
    selectionLimit: number;
    getItemId: (item: T) => string | number;
    isItemSelected: (item: T) => boolean;
    handleOptionCheck: (item: T) => void;
    itemRenderer?: (item: T, displayOption: FieldOption) => React.ReactNode;
} & Omit<SelectableListItemProps, 'id' | 'onSelect' | 'selected' | 'disabled' | 'children'>;
declare const CollapsibleAutocompleteSelectorItem: <T>({ handleOptionCheck, index, items, displayItems, selectedCount, selectionLimit, getItemId, isItemSelected, style, itemRenderer, ...props }: RowComponentProps<CollapsibleAutocompleteSelectorItemProps<T>>) => import("react/jsx-runtime").JSX.Element;
export default CollapsibleAutocompleteSelectorItem;
