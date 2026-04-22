import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import Drawer from '../components/design-system/Drawer';
/** Manages a persistent side-sheet drawer that pushes content to the left when open. */
function useSidesheet(DrawerContentComponent, drawerProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => {
        setOpen(false);
        drawerProps?.whenClose?.();
    };
    const [drawerContentProps, setDrawerContentProps] = useState();
    const drawerWidth = 340;
    const containerStyles = useMemo(() => ({
        display: 'flex',
        height: '100%',
        marginRight: open ? `${drawerWidth}px` : '0px',
    }), [open, drawerWidth]);
    return {
        containerStyles,
        drawer: (_jsxs(_Fragment, { children: [open && (_jsx("div", { onClick: closeDrawer, style: {
                        top: 0,
                        left: 0,
                        zIndex: 999,
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        background: 'transparent',
                    } })), _jsx(Drawer, { open: open, variant: "persistent", onClose: closeDrawer, PaperProps: { sx: { width: drawerWidth, mt: 8 } }, ...drawerProps, children: _jsx(DrawerContentComponent, { onClose: closeDrawer, ...drawerContentProps, ...extraProps }) })] })),
        closeDrawer,
        showDrawer: (props = {}) => {
            setDrawerContentProps(props);
            setOpen(true);
        },
    };
}
export { useSidesheet };
