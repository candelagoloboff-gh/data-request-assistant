import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { SidebarSortButtons } from '../../../LibrariesSidebar/components/headers/SidebarSortButtons';
import { SidebarHeaderLoading } from '../../../LibrariesSidebar/components/loading/SidebarHeaderLoading';
import { useSidebarContext } from '../../../LibrariesSidebar/context';
import Tooltip from '../../../../design-system/Tooltip';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconMenuOrder, IconPlus } from '@tabler/icons-react';
export const SidebarHeaderActions = ({ title, parentId, isEmpty, onAdd, loading, slotProps, }) => {
    const { palette } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { handleToggleSortMode, showSortButton, isSortMode } = useSidebarContext();
    if (loading)
        return _jsx(SidebarHeaderLoading, {});
    const formattedTitle = isSortMode ? t('libraries_sidebar.reorder') : title;
    const addButtonTooltipTitle = parentId
        ? t('libraries_sidebar.add_subarticle')
        : t('libraries_sidebar.add_article');
    return (_jsxs(Stack, { className: "sidebar-header-actions", sx: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
            py: 1.5,
            minHeight: 64,
            pl: 2,
            pr: 1,
            position: 'relative',
            backgroundColor: palette.new.background.elements.default,
        }, children: [_jsx(Typography, { variant: "globalM", fontWeight: "fontWeightSemiBold", children: formattedTitle }), _jsx(SidebarSortButtons, { loading: loading }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [showSortButton && !isEmpty && (_jsx(Tooltip, { title: slotProps?.sortButton?.tooltipTitle ||
                            t('libraries_sidebar.reorder'), direction: "bottom", children: _jsx(IconButton, { "aria-label": slotProps?.sortButton?.label || t('libraries_sidebar.reorder'), onClick: handleToggleSortMode, children: _jsx(IconMenuOrder, {}) }) })), onAdd && (_jsx(Tooltip, { title: slotProps?.addButton?.tooltipTitle || addButtonTooltipTitle, direction: "bottom", children: _jsx(IconButton, { "aria-label": slotProps?.addButton?.label || addButtonTooltipTitle, onClick: () => onAdd?.(parentId), children: _jsx(IconPlus, {}) }) }))] })] }));
};
