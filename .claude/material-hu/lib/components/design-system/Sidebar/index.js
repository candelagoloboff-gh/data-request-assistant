import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { IconHeart } from '@tabler/icons-react';
import HumandLogo from '../../../assets/HUMAND-Blue.svg';
import NavSection from './components/NavSection';
import { SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from './constants';
const Sidebar = (props) => {
    const { isCollapsed, sections, pathname, openMenu, customNavSection: CustomNavSection, sx, } = props;
    const { t } = useTranslation('material_hu_only');
    const theme = useTheme();
    return (_jsxs(Stack, { sx: {
            minHeight: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            maxWidth: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            px: 2,
            py: 1.5,
            justifyContent: 'space-between',
            gap: 1.5,
            backgroundColor: theme.palette.new.background.layout.tertiary,
            ...sx,
        }, children: [sections &&
                sections.map(section => (_jsx(NavSection, { pathname: pathname, openMenu: openMenu, isCollapsed: isCollapsed, items: section.items, title: section.title }, section.key))), CustomNavSection, !isCollapsed && (_jsxs(Stack, { children: [_jsx(Divider, {}), _jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 0.5,
                            px: 1,
                            py: 1.5,
                            img: {
                                height: '12px',
                                transform: 'translateY(-1px)',
                            },
                        }, children: [_jsx(IconHeart, { color: theme.palette.new.text.neutral.lighter, size: 16 }), _jsx(Typography, { variant: "globalXS", color: theme.palette.new.text.neutral.lighter, sx: { flexShrink: 0 }, children: t('sidebar.built_with_love_by') }), _jsx("img", { src: HumandLogo, alt: t('sidebar.humand_logo_alt'), style: { margin: `0 2px` } })] })] }))] }));
};
export default Sidebar;
