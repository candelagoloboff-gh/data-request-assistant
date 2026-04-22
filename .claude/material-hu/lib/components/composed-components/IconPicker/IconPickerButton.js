import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, ButtonBase, Stack, Typography, useTheme } from '@mui/material';
import { IconType } from '../../../types/icons';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
const defaultRenderIcon = (icon) => {
    if (icon.type === IconType.IMAGE) {
        return (_jsx(Box, { component: "img", src: icon.value, alt: "icon", sx: { width: 24, height: 24, objectFit: 'contain' } }));
    }
    return (_jsx(Typography, { sx: { fontSize: 24, lineHeight: '24px', color: 'initial' }, children: icon.value }));
};
const IconPickerButton = ({ value, open, onClick, buttonRef, disabled, sx, renderIcon, }) => {
    const { shape, palette } = useTheme();
    const ChevronIcon = open ? IconChevronUp : IconChevronDown;
    const render = renderIcon ?? defaultRenderIcon;
    return (_jsxs(ButtonBase, { ref: buttonRef, onClick: onClick, disabled: disabled, disableRipple: true, sx: [
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                px: 1.5,
                height: 56,
                minWidth: 80,
                borderRadius: `${shape.borderRadius}px`,
                borderColor: open
                    ? palette.new.border.neutral.brand
                    : palette.new.border.neutral.default,
                borderWidth: '1px',
                borderStyle: 'solid',
                backgroundColor: palette.new.background.elements.default,
                transition: 'border-color 0.25s ease',
                '&:hover': {
                    borderColor: palette.new.border.neutral.brand,
                },
                '&:focus-visible': {
                    borderColor: palette.new.border.neutral.brand,
                },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], children: [_jsx(Stack, { sx: { alignItems: 'center', justifyContent: 'center' }, children: value && render(value) }), _jsx(ChevronIcon, { size: 20 })] }));
};
export default IconPickerButton;
