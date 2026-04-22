import { DrawerActions } from './components/Actions';
import { DrawerBody } from './components/Body';
import { DrawerContent } from './components/Content';
import { DrawerDoubleLayout } from './components/DoubleLayout';
import { DrawerFooter } from './components/Footer';
import { DrawerHeader } from './components/Header';
import { DrawerWrapper } from './components/Wrapper';
import { DrawerSizeContext } from './context';
import { type DrawerActionsProps, type DrawerBodyProps, type DrawerDoubleLayoutProps, type DrawerFooterProps, type DrawerHeaderProps, type DrawerProps, DrawerSize } from './types';
export { DrawerSizeContext };
export type { DrawerSizeContextValue } from './context';
/**
 * Main Drawer component - Uses composition components internally.
 * Drawer size (medium | large | taskFocus) is provided via DrawerSizeContext; clients can read or set it when enableTaskFocus is true.
 */
declare const Drawer: {
    (props: DrawerProps): import("react/jsx-runtime").JSX.Element;
    Wrapper: typeof DrawerWrapper;
    Header: typeof DrawerHeader;
    Body: typeof DrawerBody;
    DoubleLayout: typeof DrawerDoubleLayout;
    Footer: typeof DrawerFooter;
    Actions: typeof DrawerActions;
    Content: typeof DrawerContent;
};
export type { DrawerActionsProps, DrawerBodyProps, DrawerDoubleLayoutProps, DrawerFooterProps, DrawerHeaderProps, DrawerProps, DrawerSize, };
export default Drawer;
