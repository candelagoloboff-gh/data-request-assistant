import { type MenuListItemsProps } from './types';
export type DefaultListRendererItemType = {
    id: number;
    name: string;
};
declare const MenuListItems: <ItemType extends DefaultListRendererItemType>({ disabled, error, errorText, getTooltipTitle, getTriggerTitle, items, loading, maxSelection, onChange, renderList, showTooltip, slotProps, sx, title, value, showSelection: initialShowSelection, onSearchChange, }: MenuListItemsProps<ItemType>) => import("react/jsx-runtime").JSX.Element;
export type { MenuListItemsProps };
export default MenuListItems;
