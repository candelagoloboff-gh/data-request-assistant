import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import CollapsibleNavSidebar from './components/CollapsibleNavSidebar';
const SidebarContentLayout = ({ children, loading = false, slotProps, }) => {
    return (_jsxs(Stack, { ...slotProps.root, sx: {
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            ...slotProps.root?.sx,
        }, children: [_jsx(CollapsibleNavSidebar, { ...slotProps.sidebar, loading: loading }), children] }));
};
export default SidebarContentLayout;
