import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
export const SidebarEmpty = ({ sx }) => {
    const { t } = useTranslation('material_hu_only');
    const { palette } = useTheme();
    return (_jsx(Stack, { className: "sidebar-empty", sx: {
            py: 1.5,
            px: 2.5,
            backgroundColor: 'inherit',
            textAlign: 'center',
            ...sx,
        }, children: _jsx(Typography, { variant: "globalS", color: palette.new.text.neutral.lighter, children: t('libraries_sidebar.no_articles') }) }));
};
