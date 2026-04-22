import { createTheme as createMuiTheme, } from '@mui/material';
import './theme-augmentation';
import { colorPalette } from './colors';
import { components } from './components';
import { buildNewPalette } from './newTokens';
import { shadows } from './shadows';
import { typography } from './typography';
const themeObject = {
    palette: colorPalette,
    typography,
    shape: {
        borderRadius: 8,
        borderRadiusS: 0.5,
        borderRadiusM: 1,
        borderRadiusL: 2,
        borderBottomLeftRadiusL: 16,
        borderBottomRightRadiusL: 16,
        borderBottomLeftRadiusS: 4,
        borderBottomRightRadiusS: 4,
        borderBottomLeftRadiusM: 8,
        borderBottomRightRadiusM: 8,
        borderTopLeftRadiusL: 16,
        borderTopRightRadiusL: 16,
        borderTopLeftRadiusS: 4,
        borderTopRightRadiusS: 4,
        borderTopLeftRadiusM: 8,
        borderTopRightRadiusM: 8,
    },
    spacing: 8,
    direction: 'ltr',
    shadows,
    components,
};
export const createHuGoTheme = (options) => {
    const mode = options?.mode ?? 'light';
    const newPalette = buildNewPalette(mode);
    const theme = createMuiTheme({
        ...themeObject,
        palette: {
            ...colorPalette,
            mode,
            new: newPalette,
        },
    });
    return theme;
};
