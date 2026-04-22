import { type ListItemButtonProps } from '@mui/material/ListItemButton';
export type SelectableListItemProps = {
    children: React.ReactNode;
    disabled?: boolean;
    id: string;
    indeterminate?: boolean;
    onSelect: (id: string) => void;
    selected: boolean;
    showCheckbox?: boolean;
    style?: React.CSSProperties;
} & Omit<ListItemButtonProps, 'onSelect'>;
declare const SelectableListItem: import("react").MemoExoticComponent<({ children, disabled, id, indeterminate, onSelect, selected, showCheckbox, sx, ...props }: SelectableListItemProps) => import("react/jsx-runtime").JSX.Element>;
export default SelectableListItem;
