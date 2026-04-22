import { useMemo } from 'react';
import { useTheme } from '@mui/material';
const SHADES = [100, 300, 400, 500, 700, 900, 950];
export const useChartColors = () => {
    const theme = useTheme();
    return useMemo(() => {
        const { brand, purple } = theme.palette.newBase || {};
        const colorOptions = [
            ...SHADES.map(shade => brand?.[shade]),
            ...SHADES.map(shade => purple?.[shade]),
        ];
        const contrastColorOptions = [
            ...Array.from({ length: SHADES.length }, () => ({
                light: brand?.[100],
                dark: brand?.[950],
            })),
            ...Array.from({ length: SHADES.length }, () => ({
                light: purple?.[100],
                dark: purple?.[950],
            })),
        ];
        const fallbackColor = theme.palette.newBase?.grey[500];
        const defaultContrast = {
            light: theme.palette.newBase?.white,
            dark: theme.palette.newBase?.black,
        };
        return {
            colorOptions,
            fallbackColor,
            getColor: (index) => colorOptions[index % colorOptions.length] || fallbackColor,
            getContrastColors: (index) => contrastColorOptions[index % contrastColorOptions.length] ||
                defaultContrast,
        };
    }, [theme]);
};
