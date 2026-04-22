import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack, useTheme } from '@mui/material';
import { Title } from '../../design-system/Title';
import SubSidebarAccordions from './components/Accordions';
import SubSidebarCollapsibleHeader from './components/CollapsibleHeader';
import SubSidebarSections from './components/Sections';
const MIN_SIDEBAR_WIDTH = 72;
const MAX_SIDEBAR_WIDTH = 280;
export const SubSidebar = ({ id = 'subSidebar', sx, title, sections, value, onChange, onCollapse, accordionSections, isCollapsed = false, isCollapsible = false, isLoading = false, defaultOpenAccordions = [], }) => {
    const { palette, transitions } = useTheme();
    const [internalCollapsed, setInternalCollapsed] = useState(isCollapsed);
    const isControlled = onCollapse !== undefined;
    const collapsed = isControlled ? isCollapsed : internalCollapsed;
    const handleClickItem = (newValue, onClick) => (event) => {
        onClick?.(newValue, event);
        onChange?.(newValue, event);
    };
    return (_jsxs(Stack, { id: id, sx: {
            height: '100%',
            overflow: 'auto',
            overflowX: 'hidden',
            width: '100%',
            minWidth: collapsed ? MIN_SIDEBAR_WIDTH : MAX_SIDEBAR_WIDTH,
            maxWidth: collapsed ? MIN_SIDEBAR_WIDTH : MAX_SIDEBAR_WIDTH,
            backgroundColor: palette.new.background.elements.default,
            transition: transitions.create(['min-width', 'max-width'], {
                duration: transitions.duration.standard,
                easing: transitions.easing.easeInOut,
            }),
            ...(!isCollapsible && {
                p: 2,
                gap: 3,
            }),
            ...sx,
        }, children: [title && (_jsx(Title, { variant: "L", title: title })), isCollapsible && (_jsx(SubSidebarCollapsibleHeader, { isControlled: isControlled, collapsed: collapsed, onCollapse: onCollapse, setInternalCollapsed: setInternalCollapsed })), _jsx(SubSidebarSections, { id: id, value: value, sections: sections, handleClickItem: handleClickItem }), _jsx(SubSidebarAccordions, { id: id, isLoading: isLoading, isCollapsed: collapsed, accordionSections: accordionSections, handleClickItem: handleClickItem, defaultOpenAccordions: defaultOpenAccordions })] }));
};
export default SubSidebar;
