import { type MenuItemProps as MuiMenuItemProps } from '@mui/material';
export type MenuItemProps = {
    /** HTML id attribute for the menu item */
    id?: MuiMenuItemProps['id'];
    /** Whether the item is in a selected state */
    selected?: MuiMenuItemProps['selected'];
    /** Prevents interaction with the menu item */
    disabled?: MuiMenuItemProps['disabled'];
    /** Callback fired when the menu item is clicked */
    onClick?: MuiMenuItemProps['onClick'];
    /** Custom styles applied to the menu item */
    sx?: MuiMenuItemProps['sx'];
    /** Content rendered inside the menu item */
    children?: MuiMenuItemProps['children'];
    /** Disables the ripple effect on click */
    disableRipple?: MuiMenuItemProps['disableRipple'];
    /** Callback fired when the pointer enters the menu item */
    onMouseEnter?: MuiMenuItemProps['onMouseEnter'];
    /** Callback fired when the pointer leaves the menu item */
    onMouseLeave?: MuiMenuItemProps['onMouseLeave'];
    /** Renders a divider line below the menu item */
    divider?: boolean;
};
