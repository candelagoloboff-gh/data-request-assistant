import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, Stack } from '@mui/material';
import { IconColorPicker } from '@tabler/icons-react';
import { baseSwatchStyle, colors } from './constants';
function ColorSelectMenu({ anchorRef, open, setOpen, onColorSelect, currentColor, }) {
    const { t } = useTranslation('material_hu_only');
    const [lastCustomColor, setLastCustomColor] = useState('');
    return (_jsx(Menu, { open: open, onClose: () => setOpen(false), anchorEl: anchorRef.current, "aria-label": t('top_bar_rich_text_editor.color_picker_swatches__color_select_menu'), "aria-labelledby": t('top_bar_rich_text_editor.color_picker_swatches__color_select_menu'), children: _jsxs(Stack, { sx: {
                width: 168,
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: 0.25,
                px: 1,
                overflow: 'hidden',
            }, children: [colors.map(color => (_jsx(Button, { sx: {
                        color: color.color,
                        ...baseSwatchStyle,
                        ...(currentColor === color.color && {
                            transform: 'scale(0.9)',
                        }),
                    }, onClick: () => onColorSelect(color.color), "aria-label": t(`top_bar_rich_text_editor.${color.label}`), title: t(`top_bar_rich_text_editor.${color.label}`) }, color.color))), _jsx(Button, { sx: {
                        color: lastCustomColor || 'white',
                        ...baseSwatchStyle,
                        ...(currentColor === lastCustomColor && {
                            transform: 'scale(0.9)',
                        }),
                    }, onClick: () => {
                        if (lastCustomColor) {
                            onColorSelect(lastCustomColor);
                        }
                    }, "aria-label": t('top_bar_rich_text_editor.color_picker_swatches__current_custom_color'), title: t('top_bar_rich_text_editor.color_picker_swatches__current_custom_color') }), _jsx(Button, { onClick: () => onColorSelect(''), sx: {
                        ...baseSwatchStyle,
                        backgroundColor: theme => theme.palette.new.background.elements.default,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                            transform: 'scale(0.9)',
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: 'red',
                            transform: 'rotate(45deg) translate(10px, 10px)',
                        },
                    }, "aria-label": t('top_bar_rich_text_editor.color_picker_swatches__clear_color'), title: t('top_bar_rich_text_editor.color_picker_swatches__clear_color') }), _jsxs(Button, { component: "label", sx: {
                        ...baseSwatchStyle,
                        backgroundColor: 'transparent',
                        p: 0,
                        '&:hover': {
                            transform: 'scale(0.9)',
                        },
                    }, "aria-label": t('top_bar_rich_text_editor.color_picker_swatches__custom_color'), title: t('top_bar_rich_text_editor.color_picker_swatches__custom_color'), children: [_jsx(IconColorPicker, {}), _jsx("input", { type: "color", onChange: event => {
                                onColorSelect(event.currentTarget.value);
                                setLastCustomColor(event.currentTarget.value);
                            }, style: {
                                height: 0,
                                width: 0,
                                opacity: 0,
                                overflow: 'hidden',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }, value: currentColor || '', "data-testid": "setColor" })] })] }) }));
}
export default ColorSelectMenu;
