import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Drawer from '../components/design-system/Drawer';
/**
 * Manages a Drawer's open/close state and renders it with a dynamic configuration callback.
 * @deprecated Use `useDrawerLayer` or `useDrawerLayerItem` instead
 */
export function useDrawerV2(getDrawerConfiguration) {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => setOpen(false);
    const [drawerContentProps, setDrawerContentProps] = useState({});
    const drawerProps = getDrawerConfiguration({
        closeDrawer,
        open,
        ...drawerContentProps,
    });
    return {
        open,
        drawer: (_jsx(Drawer, { open: open, onClose: closeDrawer, ...drawerProps })),
        closeDrawer,
        showDrawer: (props) => {
            setDrawerContentProps(props);
            setOpen(true);
        },
    };
}
