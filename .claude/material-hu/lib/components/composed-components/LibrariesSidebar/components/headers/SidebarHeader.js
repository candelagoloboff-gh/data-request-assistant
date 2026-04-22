import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../../../design-system/Skeleton';
import Title from '../../../../design-system/Title';
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { IconArrowLeft } from '@tabler/icons-react';
export const SidebarHeader = ({ title, onBack, hide, loading, }) => {
    const { palette } = useTheme();
    if (hide)
        return null;
    return (_jsxs(Stack, { className: "sidebar-header", sx: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: palette.new.background.elements.brand,
            py: 1.5,
            pl: 1,
            pr: 2,
            gap: 1,
        }, children: [loading && (_jsxs(_Fragment, { children: [_jsx(Skeleton, { width: 40, height: 40 }), _jsx(Skeleton, { width: 100, height: 25 })] })), !loading && (_jsxs(_Fragment, { children: [_jsx(IconButton, { "aria-label": title, onClick: onBack, sx: { '& svg': { stroke: palette.new.text.neutral.brand } }, children: _jsx(IconArrowLeft, {}) }), _jsx(Title, { title: title, variant: "M", fontWeight: "fontWeightSemiBold", slotProps: {
                            title: { sx: { color: palette.new.text.neutral.brand } },
                        }, overflow: "tooltip", withEllipsis: true })] }))] }));
};
