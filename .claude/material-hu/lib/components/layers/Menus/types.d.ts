import { type MenuProps } from '../../design-system/Menu';
import { type TablerIcon } from '@tabler/icons-react';
export type MenuItemSchema = {
    /** Unique identifier for the menu item */
    id: string;
    /** Main text displayed for the menu item */
    title: string;
    /** Optional secondary text displayed below the title */
    description?: string;
    /** Optional icon displayed to the left of the title */
    icon?: TablerIcon;
    /** If true, the menu item will be disabled and not clickable */
    disabled?: boolean;
    /** Callback function executed when the menu item is clicked */
    onSelect?: () => void;
    /** Optional array of sub-items to create a nested submenu */
    items?: MenuItemSchema[];
    /**
     * If true, closes the menu immediately without animation.
     * Useful when onSelect will cause navigation/unmounting of the anchor element.
     */
    closeImmediate?: boolean;
};
export type MenuLevel = {
    /** The anchor element that opened the menu */
    anchorEl: HTMLElement;
    /** The items to display in the menu */
    items: MenuItemSchema[];
};
export type OpenMenuArgs = MenuLevel & {
    /** Optional props to pass to the menu component */
    menuProps?: Omit<MenuProps, 'open'>;
};
export type MenuLayerContextValue = {
    /**
     * Opens a new menu at the specified anchor element.
     * @param args - Configuration object containing the anchor element and menu items.
     */
    openMenu: (args: OpenMenuArgs) => void;
    /**
     * Closes the current menu.
     * @param immediate - If true, closes the menu immediately without animation.
     */
    closeMenu: (immediate?: boolean) => void;
};
