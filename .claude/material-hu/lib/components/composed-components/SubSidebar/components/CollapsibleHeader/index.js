import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import Tooltip from '../../../../design-system/Tooltip';
import AnimatedArrowIcon from '../AnimatedArrowIcon';
const SubSidebarCollapsibleHeader = ({ isControlled, onCollapse, collapsed, setInternalCollapsed, }) => {
    const { palette } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const handleCollapse = () => {
        if (isControlled)
            onCollapse?.();
        else
            setInternalCollapsed(!collapsed);
    };
    return (_jsxs(Stack, { onClick: handleCollapse, sx: {
            flexDirection: 'row',
            p: 2,
            cursor: 'pointer',
            alignItems: 'center',
            backgroundColor: palette.new.background.layout.brand,
        }, children: [_jsx(Tooltip, { disableTooltip: !collapsed, direction: "right", title: t('sub_sidebar.expand_content'), children: _jsx(IconButton, { sx: {
                        py: 0.5,
                        '&:hover': { backgroundColor: 'transparent' },
                    }, children: _jsx(AnimatedArrowIcon, { isCollapsed: collapsed }) }) }), !collapsed && (_jsx(Typography, { variant: "globalS", fontWeight: "semiBold", sx: { color: palette.new.text.neutral.brand }, children: t('sub_sidebar.collapse') }))] }));
};
export default SubSidebarCollapsibleHeader;
