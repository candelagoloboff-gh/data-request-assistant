import { colors } from '@mui/material';
import createComponents from './create-components';
import createTypography from './create-typography';
// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.
export const createOptions = (config) => {
    const { direction = 'ltr' } = config;
    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440,
            },
        },
        components: createComponents(),
        direction,
        shape: {
            borderRadius: 8,
        },
        shadows: [
            'none',
            '0px 1px 2px 0px rgba(0, 0, 0, 0.08);',
            '0px 1px 5px 0px rgba(0, 0, 0, 0.08);',
            '0px 1px 8px 0px rgba(0, 0, 0, 0.08);',
            '0px 1px 10px 0px rgba(0, 0, 0, 0.08);',
            '0px 1px 14px 0px rgba(0, 0, 0, 0.08);',
            '0px 1px 18px 0px rgba(0, 0, 0, 0.08);',
            '0px 2px 16px 0px rgba(0, 0, 0, 0.08);',
            '0px 3px 14px 0px rgba(0, 0, 0, 0.08);',
            '0px 3px 16px 0px rgba(0, 0, 0, 0.08);',
            '0px 4px 18px 0px rgba(0, 0, 0, 0.08);',
            '0px 4px 20px 0px rgba(0, 0, 0, 0.08);',
            '0px 5px 22px 0px rgba(0, 0, 0, 0.04);',
            '0px 5px 24px 0px rgba(0, 0, 0, 0.08);',
            '0px 5px 26px 0px rgba(0, 0, 0, 0.08);',
            '0px 6px 28px 0px rgba(0, 0, 0, 0.08);',
            '0px 6px 30px 0px rgba(0, 0, 0, 0.08);',
            '0px 6px 32px 0px rgba(0, 0, 0, 0.08);',
            '0px 7px 34px 0px rgba(0, 0, 0, 0.08);',
            '0px 7px 36px 0px rgba(0, 0, 0, 0.08);',
            '0px 8px 38px 0px rgba(0, 0, 0, 0.08);',
            '0px 8px 40px 0px rgba(0, 0, 0, 0.08);',
            '0px 8px 42px 0px rgba(0, 0, 0, 0.08);',
            '0px 9px 44px 0px rgba(0, 0, 0, 0.08);',
            '0px 5px 22px 0px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03);',
        ],
        typography: createTypography(),
        palette: {
            primary: {
                contrastText: '#ffffff',
                main: config?.color || 'blue',
            },
            secondary: {
                main: colors.grey[600],
            },
            divider: '#f2f4f7',
            success: {
                contrastText: '#ffffff',
                main: '#4caf50',
            },
            text: {
                primary: '#111927',
                secondary: '#6C737F',
            },
            warning: {
                contrastText: '#ffffff',
                main: '#ff9800',
            },
        },
    };
};
export default createOptions;
