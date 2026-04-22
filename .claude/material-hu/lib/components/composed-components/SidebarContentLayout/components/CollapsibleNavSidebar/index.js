import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Skeleton from '../../../../design-system/Skeleton';
import { Collapse, Fade, Stack, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { IconArrowBigLeftLine, IconArrowBigRightLine, } from '@tabler/icons-react';
import { fadeIn } from '../../../../../utils/animations';
import { times } from 'lodash';
const buttonStyles = {
    px: 2.5,
    py: 2.5,
    height: 'auto',
    borderRadius: 0,
    '&, &:focus, &:active, &:hover': {
        backgroundColor: theme => theme.palette.new.background.layout.brand,
    },
};
const CollapsibleNavSidebar = ({ buttonLabel, loading = false, options, }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const location = useLocation();
    return (_jsx(Collapse, { collapsedSize: 56, in: open, orientation: "horizontal", appear: false, sx: {
            backgroundColor: theme.palette.new.background.elements.default,
            flexShrink: 0,
        }, children: _jsxs(Stack, { sx: { minWidth: '280px' }, children: [_jsx(Button, { onClick: () => setOpen(prev => !prev), startIcon: open ? _jsx(IconArrowBigLeftLine, {}) : _jsx(IconArrowBigRightLine, {}), sx: {
                        ...buttonStyles,
                        '& .MuiButton-startIcon > svg': {
                            width: 24,
                            height: 24,
                            stroke: theme.palette.new.text.neutral.brand,
                            animation: `${fadeIn} 150ms ease-in-out backwards`,
                        },
                        justifyContent: 'flex-start',
                    }, size: "large", children: open ? buttonLabel : '' }), _jsx(Fade, { in: open, children: _jsxs(Stack, { sx: { gap: 2, py: 1.5, px: 2 }, children: [loading &&
                                times(4, i => (_jsx(Skeleton, { width: "100%", height: 50 }, i))), !loading &&
                                options.map(option => {
                                    const isActive = location.pathname === option.to;
                                    return (_jsx(Stack, { component: Link, to: option.to, sx: {
                                            p: 2,
                                            transition: 'background-color 200ms ease-in-out',
                                            backgroundColor: isActive
                                                ? theme.palette.new.action.background.neutral.hover
                                                : 'transparent',
                                            borderRadius: 2,
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }, children: _jsx(Typography, { component: "span", sx: {
                                                fontWeight: theme.typography.fontWeightBold,
                                                color: isActive
                                                    ? theme.palette.new.text.neutral.default
                                                    : theme.palette.new.text.neutral.lighter,
                                            }, children: option.label }) }, option.to));
                                })] }) })] }) }));
};
export default CollapsibleNavSidebar;
