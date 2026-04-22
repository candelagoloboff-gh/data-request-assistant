import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { SidebarHeader } from '../LibrariesSidebar/components/headers/SidebarHeader';
import { SidebarHeaderActions } from '../LibrariesSidebar/components/headers/SidebarHeaderActions';
import { SidebarChildrenList } from '../LibrariesSidebar/components/list/children/SidebarChildrenList';
import { SidebarRootList } from '../LibrariesSidebar/components/list/root/SidebarRootList';
import { SidebarProvider } from '../LibrariesSidebar/context';
const LibrariesSidebar = ({ items, headerTitle, parentId, onBack, onSort, onAdd, onAddMouseEnter, loading, slotProps, }) => {
    const { t } = useTranslation('material_hu_only');
    const isRoot = !parentId;
    return (_jsxs(SidebarProvider, { items: items, onSort: onSort, onAddMouseEnter: onAddMouseEnter, children: [_jsx(SidebarHeader, { hide: isRoot, title: headerTitle ?? '', onBack: onBack, loading: loading }), _jsx(SidebarHeaderActions, { title: isRoot
                    ? t('libraries_sidebar.articles')
                    : t('libraries_sidebar.subarticles'), loading: loading, onAdd: onAdd, isEmpty: !items.length, parentId: parentId, slotProps: slotProps }), isRoot && _jsx(SidebarRootList, { loading: loading }), !isRoot && (_jsx(SidebarChildrenList, { parentId: parentId, loading: loading, onAdd: onAdd }))] }));
};
export default LibrariesSidebar;
