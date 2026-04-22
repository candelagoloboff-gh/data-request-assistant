import { type ReactNode } from 'react';
import { type MenuProps as MUIMenuProps } from '@mui/material';
/**
 * @deprecated Use HuMenu and HuMenuProps instead.
 */
export type { MUIMenuProps };
export type MenuProps = {
    /** HTML id attribute for the menu element */
    id?: MUIMenuProps['id'];
    /** DOM element the menu is anchored to */
    anchorEl?: MUIMenuProps['anchorEl'];
    /** Whether the menu is visible */
    open: MUIMenuProps['open'];
    /** Callback fired when the menu is closed */
    onClose?: MUIMenuProps['onClose'];
    /** Menu items and content rendered inside the menu */
    children?: MUIMenuProps['children'];
    /** Custom styles applied to the menu */
    sx?: MUIMenuProps['sx'];
} & {
    /** Id of the element that labels the menu for accessibility */
    'aria-labelledby'?: string;
    /** Node rendered at the bottom of the menu */
    footer?: ReactNode;
    /** Node rendered at the top of the menu */
    header?: ReactNode;
    /** Preferred horizontal alignment of the menu relative to its anchor */
    position?: 'left' | 'right' | 'center' | 'top-right';
    /** Fixes the menu to a set width and height */
    fixedDimensions?: boolean;
    /** Disables the scroll lock applied when the menu opens */
    disableScrollLock?: boolean;
    /** Id of the element used as the scroll-lock target */
    scrollLockElementId?: string;
    /** Callback fired when the menu's open/close transition ends */
    onTransitionEnd?: () => void;
    /** If true, the menu renders inside the DOM tree (no portal), so it can be clipped by a parent with overflow: hidden. */
    disablePortal?: boolean;
};
