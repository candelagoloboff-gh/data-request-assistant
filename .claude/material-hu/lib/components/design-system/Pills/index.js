import { jsx as _jsx } from "react/jsx-runtime";
import { Chip, Typography, useTheme } from '@mui/material';
import { getPillProps } from './utils';
const Pills = ({ label, type = 'error', size = 'medium', hasIcon = true, customIcon, typographySx, ...chipProps }) => {
    const theme = useTheme();
    const pillProps = getPillProps(type, theme);
    const isSmall = size === 'small';
    const PillIcon = customIcon ? customIcon : pillProps.icon;
    return (_jsx(Chip, { label: _jsx(Typography, { variant: isSmall ? 'globalXXS' : 'globalXS', fontWeight: 'fontWeightSemiBold', sx: {
                margin: 0,
                padding: 0,
                lineHeight: 'normal',
                color: pillProps.fontColor,
                ...typographySx,
            }, children: label }), size: size, icon: hasIcon && PillIcon ? (_jsx(PillIcon, { style: {
                color: pillProps.fontColor,
                marginLeft: '0',
                marginRight: '4px',
                fontSize: '14px',
            }, width: "16px" })) : undefined, clickable: false, ...chipProps, sx: {
            backgroundColor: pillProps.backgroundColor,
            border: `1px solid ${pillProps.borderColor}`,
            borderRadius: 2,
            px: isSmall ? 1 : 1.5,
            py: isSmall ? 0.5 : 1,
            '&.MuiChip-root': {
                // Since clickable is false, we need to override the cursor with a more specific selector
                cursor: chipProps.onClick ? 'pointer' : 'default',
            },
            '& .MuiChip-label': {
                px: 0,
            },
            ...(chipProps.disabled && {
                opacity: '1!important',
            }),
            ...chipProps.sx,
        } }));
};
export default Pills;
