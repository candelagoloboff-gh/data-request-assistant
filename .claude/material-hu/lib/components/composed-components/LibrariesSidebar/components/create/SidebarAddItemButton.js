import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useSidebarColors } from '../../../LibrariesSidebar/hooks/useGetSidebarColors';
import { getLeftSpacing } from '../../../LibrariesSidebar/utils';
import Button from '../../../../design-system/Buttons/Button';
import Stack from '@mui/material/Stack';
import { IconPlus } from '@tabler/icons-react';
export const SidebarAddItemButton = ({ onAdd, onAddMouseEnter, depth = 0, hasChildren, }) => {
    const colors = useSidebarColors();
    const { t } = useTranslation('material_hu_only');
    if (!onAdd)
        return null;
    const getBackgroundColor = () => {
        if (hasChildren || depth > 0)
            return colors.MAIN_LIGHT_GREY;
        return colors.ROW_HOVER;
    };
    return (_jsx(Stack, { sx: {
            py: 1,
            pr: 2,
            alignItems: 'start',
            backgroundColor: getBackgroundColor(),
        }, children: _jsx(Button, { onMouseEnter: onAddMouseEnter, className: "sidebar-add-item-button", onClick: onAdd, variant: "tertiary", startIcon: _jsx(IconPlus, {}), sx: { ml: getLeftSpacing(depth + 1) }, children: t('libraries_sidebar.add_article') }) }));
};
