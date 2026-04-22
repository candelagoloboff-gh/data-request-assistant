import { type UseControllerProps } from 'react-hook-form';
import { type SelectableListItemProps } from '../SelectableListItem';
import { type ButtonProps } from '../../design-system/Buttons/Button';
import { type MenuProps } from '../../design-system/Menu';
import { type TooltipProps } from '../../design-system/Tooltip';
import { type TypographyProps } from '@mui/material/Typography';
export type BaseItemProps = {
    id: number;
    name: string;
};
export type BaseListRendererProps<ItemType extends BaseItemProps> = {
    /** Array of items to be displayed in the dropdown menu */
    items: ItemType[];
    /** Set of selected items */
    selected: Set<number>;
    /** Maximum number of items that can be selected (undefined = no limit) */
    maxSelection?: number;
    /** Function executed when an item is clicked */
    onItemClick: (itemId: number) => void;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Whether to show the selection */
    showSelection?: boolean;
};
export type MenuListItemsSlotProps = {
    /** Props for the "Selected" label */
    selectedItemsLabel?: Partial<TypographyProps>;
    /** Props for the "All" label */
    allItemsLabel?: Partial<TypographyProps>;
    /** Props for the menu */
    menu?: Partial<MenuProps>;
    /** Props for the button that opens the menu */
    triggerButton?: Partial<ButtonProps>;
    /** Props for the tooltip of the button that opens the menu */
    triggerTooltip?: Partial<TooltipProps>;
    /** Props for the show selection item */
    showSelection?: Partial<SelectableListItemProps>;
};
/**
 * Props for the base MenuListItems component (without form logic)
 */
export type MenuListItemsProps<ItemType extends BaseItemProps> = {
    /** Custom styles for the main button */
    sx?: ButtonProps['sx'];
    /** Array of items to be displayed in the dropdown menu */
    items: ItemType[];
    /** Text displayed when no items are selected */
    title?: string;
    /** Shows a skeleton loader while data is loading */
    loading?: boolean;
    /** Maximum number of items that can be selected (undefined = no limit) */
    maxSelection?: number;
    /** Disables interaction */
    disabled?: boolean;
    /** Array of currently selected items */
    value?: ItemType[];
    /** Function executed when selection changes */
    onChange?: (value: ItemType[]) => void;
    /** Whether the component has a validation error */
    error?: boolean;
    /** Error message displayed in the component */
    errorText?: string;
    /** Custom function to generate tooltip text */
    getTooltipTitle?: (selectedItems: ItemType[]) => string;
    /** Custom function to generate trigger text */
    getTriggerTitle?: (selectedItems: ItemType[]) => string;
    /** Whether to show the "Show Selection" item*/
    showSelection?: boolean;
    /** Whether to show the tooltip */
    showTooltip?: boolean;
    /** Custom props for internal component elements */
    slotProps?: MenuListItemsSlotProps;
    /** Function to render the list */
    renderList?: (props: BaseListRendererProps<ItemType>) => React.ReactNode;
    /** Function to filter the items – When provided, the items will not be filtered by the internal state */
    onSearchChange?: (searchValue?: string) => void;
};
/**
 * Props for the form wrapper for react-hook-form integration
 */
export type FormMenuListItemsProps<ItemType extends BaseItemProps> = {
    /** Field name in the form */
    name: string;
    /** Validation rules for the field */
    rules?: UseControllerProps['rules'];
    /** Props passed to the base MenuListItems component */
    menuListItemsProps: Omit<MenuListItemsProps<ItemType>, 'value' | 'onChange' | 'error' | 'errorText'>;
};
