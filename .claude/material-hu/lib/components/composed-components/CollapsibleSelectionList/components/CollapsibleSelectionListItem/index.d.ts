import { type RowComponentProps } from 'react-window';
import { type SelectableListItemProps } from '../../../SelectableListItem';
export type CollapsibleSelectionListItemProps = {
    items: {
        id: number;
        name: string;
    }[];
    selected: Set<number>;
    selectionLimit: number;
    handleItemSelect: (itemId: number) => void;
    itemRenderer: (item: {
        id: number;
        name: string;
    }) => React.ReactNode;
} & Omit<SelectableListItemProps, 'id' | 'onSelect' | 'selected' | 'disabled' | 'children'>;
declare const CollapsibleSelectionListItem: ({ handleItemSelect, index, items, selected, selectionLimit, style, itemRenderer, ...props }: RowComponentProps<CollapsibleSelectionListItemProps>) => import("react/jsx-runtime").JSX.Element;
export default CollapsibleSelectionListItem;
