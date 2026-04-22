import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { createHuGoTheme } from '../theme/hugo';
/** Creates a HuGo MUI theme and returns a ThemeProvider component for it. */
function useHuGoTheme(options) {
    return useMemo(() => {
        const newTheme = createHuGoTheme(options);
        const HuGoThemeProvider = ({ children }) => (_jsx(ThemeProvider, { theme: newTheme, children: children }));
        HuGoThemeProvider.displayName = 'HuGoThemeProvider';
        return { HuGoThemeProvider };
    }, [options?.mode, options?.baseColor]);
}
export { useHuGoTheme };
