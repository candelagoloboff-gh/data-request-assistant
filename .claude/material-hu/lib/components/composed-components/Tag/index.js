import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack/Stack';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography/Typography';
import { IconX } from '@tabler/icons-react';
import { TagColorVariant } from './types';
import { getTagColors } from './utils';
const Tag = ({ onDelete, onClick, label, variant, Icon, maxWidth = 200, }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { color, backgroundColor, hoverColor } = getTagColors(variant ?? TagColorVariant.BRAND, theme);
    return (_jsxs(Stack, { onClick: onClick, component: "span", sx: {
            display: 'inline-flex',
            width: 'fit-content',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0.5,
            px: 1,
            py: 0.5,
            borderRadius: ({ shape }) => shape.borderRadiusM,
            border: `1px solid ${hoverColor}`,
            backgroundColor: backgroundColor,
            cursor: onClick ? 'pointer' : 'default',
            '&:hover': {
                backgroundColor: onClick ? hoverColor : backgroundColor,
            },
            maxWidth,
        }, children: [Icon && (_jsx(Icon, { color: color, size: 16 })), _jsx(Typography, { variant: "globalXXS", sx: {
                    color,
                    whiteSpace: 'nowrap',
                    fontWeight: 'fontWeightSemiBold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }, children: label }), onDelete && (_jsx(IconX, { "aria-label": t('general:delete'), onClick: onDelete, color: color, size: 16, style: {
                    cursor: 'pointer',
                    color: color,
                } }))] }));
};
export default Tag;
