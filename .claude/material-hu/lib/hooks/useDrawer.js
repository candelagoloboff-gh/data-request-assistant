import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Drawer from '../components/design-system/Drawer';
/**
 *
 * @deprecated Use `useDrawerLayer` or `useDrawerLayerItem` instead
 */
function useDrawer(DrawerContentComponent, drawerProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => setOpen(false);
    const [drawerContentProps, setDrawerContentProps] = useState();
    return {
        drawer: (_jsx(Drawer, { open: open, onClose: closeDrawer, ...drawerProps, children: _jsx(DrawerContentComponent, { onClose: closeDrawer, ...drawerContentProps, ...extraProps }) })),
        closeDrawer,
        showDrawer: (props = {}) => {
            setDrawerContentProps(props);
            setOpen(true);
        },
    };
}
export { useDrawer };
