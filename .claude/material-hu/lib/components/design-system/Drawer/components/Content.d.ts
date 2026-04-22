import { type DrawerProps } from '../types';
/**
 * DrawerContent - Internal content structure without MuiDrawer wrapper.
 * Reads drawer size from DrawerSizeContext; toggles between restoreSize and 'taskFocus' when enableTaskFocus is true.
 */
export declare function DrawerContent({ title, children, onClose, onBack, primaryButtonProps, secondaryButtonProps, footer, primaryContent, secondaryContent, hasBackButton, slotProps, enableTaskFocus, extraHeaderActions, size, }: Omit<DrawerProps, 'open' | 'sx' | 'PaperProps' | 'disableEscapeKeyDown'>): import("react/jsx-runtime").JSX.Element;
