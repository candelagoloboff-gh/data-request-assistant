/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createTheme as createMuiTheme, responsiveFontSizes, } from '@mui/material';
import createOptions from './base/create-options';
export const createNewTheme = (config = {}) => {
    let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createOptions({
        direction: config.direction,
        color: config.colorPreset,
    }));
    theme = createMuiTheme(theme, {
        // Custom colors created with augmentColor go here
        palette: {
            humand: theme.palette.augmentColor({
                color: {
                    main: '#1976D2',
                },
                name: 'humand',
            }),
        },
    });
    if (config.responsiveFontSizes) {
        theme = responsiveFontSizes(theme);
    }
    return theme;
};
