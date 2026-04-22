import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from 'react';
import { Stack, useTheme } from '@mui/material';
export const BreadcrumbsLinkBox = ({ children, breadcrumbIcon, }) => {
    const { palette } = useTheme();
    return (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: [children, breadcrumbIcon
                ? createElement(breadcrumbIcon, {
                    sx: {
                        ml: 0.25,
                        width: 16,
                        height: 16,
                        color: palette.new.action.button.background.primary.default,
                    },
                })
                : null] }));
};
