import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography, useTheme, } from '@mui/material';
import Link from '../Link';
import { BreadcrumbsLinkBox } from './components/BreadcrumbsLinkBox';
import { BreadcrumbsSkeleton } from './components/BreadcrumbsSkeleton';
import { CollapsedIcon } from './components/CollapsedIcon';
const BreadCrumbs = ({ links, darkBackground, loading }) => {
    const theme = useTheme();
    const collapsedLinks = useMemo(() => links.slice(1, -2), [links]);
    if (loading)
        return _jsx(BreadcrumbsSkeleton, {});
    return (_jsx(MuiBreadcrumbs, { "aria-label": "breadcrumb", sx: {
            '& .MuiLink-root': {
                textDecoration: 'underline',
                cursor: 'pointer',
                color: darkBackground
                    ? theme.palette.new.text.neutral.inverted
                    : theme.palette.new.action.button.background.primary.default,
                '&:visited': {
                    color: theme.palette.new.action.button.background.primary.focus,
                    textDecorationColor: theme.palette.new.action.button.background.primary.focus,
                },
                '&:disabled, &.Mui-disabled': {
                    color: theme.palette.new.action.button.background.primary.disabled,
                    textDecorationColor: theme.palette.new.action.button.background.primary.disabled,
                    cursor: 'not-allowed',
                },
            },
            '& .MuiButtonBase-root': {
                '&, &:hover': { backgroundColor: 'transparent' },
            },
            '& .MuiBreadcrumbs-separator': {
                mx: 0.5,
                color: darkBackground
                    ? theme.palette.new.text.neutral.inverted
                    : 'inherit',
            },
        }, maxItems: 4, itemsAfterCollapse: 2, separator: _jsx(Typography, { variant: "globalS", sx: { mx: 0.5 }, children: "/" }), slots: { CollapsedIcon }, 
        // @ts-expect-error - Mui does not recognize the CollapsedIcon props
        slotProps: { collapsedIcon: { collapsedLinks, darkBackground } }, children: links.map((link, index) => {
            const isLink = !link.isPresentational && index < links.length - 1;
            return (_jsxs(BreadcrumbsLinkBox, { breadcrumbIcon: link.icon, children: [isLink && (_jsx(Link, { href: link.href, onClick: link.onClick, component: link.component, children: link.title })), !isLink && (_jsx(Typography, { variant: "globalS", sx: {
                            color: darkBackground
                                ? theme.palette.new.text.neutral.inverted
                                : theme.palette.new.text.neutral.default,
                        }, children: link.title }))] }, `${link.title}-${link.href}`));
        }) }));
};
export default BreadCrumbs;
