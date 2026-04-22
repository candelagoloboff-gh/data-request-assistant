import { jsx as _jsx } from "react/jsx-runtime";
import { DrawerActions } from './components/Actions';
import { DrawerBody } from './components/Body';
import { DrawerContent } from './components/Content';
import { DrawerDoubleLayout } from './components/DoubleLayout';
import { DrawerFooter } from './components/Footer';
import { DrawerHeader } from './components/Header';
import { DrawerWrapper } from './components/Wrapper';
import { DrawerSizeContext } from './context';
import { DrawerSize, } from './types';
export { DrawerSizeContext };
/**
 * Main Drawer component - Uses composition components internally.
 * Drawer size (medium | large | taskFocus) is provided via DrawerSizeContext; clients can read or set it when enableTaskFocus is true.
 */
const Drawer = (props) => {
    const { title = '', size = DrawerSize.SMALL, children, onClose, onBack, primaryButtonProps, secondaryButtonProps, footer, primaryContent, secondaryContent, hasBackButton, slotProps, } = props;
    return (_jsx(DrawerWrapper, { ...props, children: _jsx(DrawerContent, { title: title, onClose: onClose, onBack: onBack, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, footer: footer, primaryContent: primaryContent, secondaryContent: secondaryContent, hasBackButton: hasBackButton, slotProps: slotProps, size: size, ...props, children: children }) }));
};
Drawer.Wrapper = DrawerWrapper;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.DoubleLayout = DrawerDoubleLayout;
Drawer.Footer = DrawerFooter;
Drawer.Actions = DrawerActions;
Drawer.Content = DrawerContent;
export default Drawer;
