import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../../components/design-system/Buttons/Button';
import { Slider, Stack, TextField, Typography } from '@mui/material';
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import { useHuGoTheme } from '../../hooks/useHuGoTheme';
import { generateColorPalette, hexToHSL, } from '../../theme/hugo/colorPaletteGenerator';
import { SelectedColorTile } from './components/SelectedColorTile';
import { HUE_GRADIENT, hueToHex, MAX_PALETTES } from './constants';
import { normalizeHex } from './utils';
const addColorToPalettes = (prev, hex) => {
    const normalized = hex.toUpperCase();
    if (prev.some(c => c.toUpperCase() === normalized))
        return prev;
    const next = [hex, ...prev];
    return next.length > MAX_PALETTES ? next.slice(0, MAX_PALETTES) : next;
};
const PaletteGeneratorContent = () => {
    const [hue, setHue] = useState(0);
    const [acceptedColors, setAcceptedColors] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const selectedHex = hueToHex(hue);
    const addColor = (hex) => setAcceptedColors(prev => addColorToPalettes(prev, hex));
    const handleAcceptFromInput = () => {
        const normalized = normalizeHex(inputValue);
        if (normalized) {
            setHue(hexToHSL(normalized).h);
            addColor(normalized);
        }
        else {
            addColor(selectedHex);
        }
    };
    return (_jsxs(Stack, { sx: { gap: 3 }, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    gap: 2,
                    flexWrap: 'wrap',
                }, children: [_jsxs(Stack, { sx: theme => ({
                            py: 3,
                            px: 2,
                            bgcolor: theme.palette.new.background.elements.grey,
                            gap: 2,
                            flex: '1 1 300px',
                            minWidth: 280,
                            borderRadius: 1,
                        }), children: [_jsxs(Stack, { sx: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }, children: [_jsx(Typography, { sx: { fontFamily: 'monospace' }, children: selectedHex.toUpperCase() }), _jsx(SelectedColorTile, { hex: selectedHex }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { ml: 'auto' }, children: [_jsx(Button, { variant: "outlined", onClick: () => setAcceptedColors([]), disabled: acceptedColors.length === 0, children: "Reset" }), _jsx(Button, { variant: "contained", onClick: () => addColor(selectedHex), children: "Aceptar" })] })] }), _jsx(Slider, { value: hue, min: 0, max: 360, onChange: (_e, value) => setHue(Array.isArray(value) ? value[0] : value), sx: theme => ({
                                    '& .MuiSlider-track': {
                                        background: 'transparent',
                                        border: 'none',
                                    },
                                    '& .MuiSlider-rail': {
                                        background: HUE_GRADIENT,
                                        opacity: 1,
                                    },
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: theme.palette.new.background.elements.default,
                                        border: '2px solid',
                                        borderColor: theme.palette.new.border.neutral.default,
                                        boxShadow: 'none',
                                        '&:hover': {
                                            borderColor: theme.palette.new.border.neutral.divider,
                                        },
                                    },
                                }), valueLabelDisplay: "off" })] }), _jsxs(Stack, { sx: theme => ({
                            py: 3,
                            px: 2,
                            bgcolor: theme.palette.new.background.elements.grey,
                            gap: 2,
                            flex: '0 1 auto',
                            minWidth: 260,
                            borderRadius: 1,
                        }), children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "Ej: 00E1FF / CCFF00" }), _jsxs(Stack, { sx: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }, children: [_jsx(TextField, { size: "small", placeholder: "00FF19", value: inputValue, onChange: e => setInputValue(e.target.value), sx: {
                                            flex: 1,
                                            '& .MuiInput-input': { fontFamily: 'monospace' },
                                        }, inputProps: {
                                            maxLength: 7,
                                        } }), _jsx(Button, { variant: "contained", onClick: handleAcceptFromInput, children: "Aceptar" })] })] })] }), _jsx(Stack, { sx: { gap: 3 }, children: acceptedColors.map(hex => (_jsx(ColorPalette, { children: _jsx(ColorItem, { title: hex.toUpperCase(), subtitle: "", colors: Object.fromEntries(Object.entries(generateColorPalette(hex).palette).map(([k, v]) => [String(k), v])) }) }, hex))) })] }));
};
const PaletteGenerator = () => {
    const { HuGoThemeProvider } = useHuGoTheme();
    return (_jsx(HuGoThemeProvider, { children: _jsx(PaletteGeneratorContent, {}) }));
};
export default PaletteGenerator;
