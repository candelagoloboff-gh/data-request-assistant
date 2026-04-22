import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '../../../Tooltip';
const ActionButton = ({ title, icon, onClick, isActive, disabled, children, sx }, ref) => {
    const iconButton = (_jsxs(IconButton, { ref: ref, disabled: disabled, onClick: onClick, sx: {
            height: 36,
            width: 36,
            borderRadius: 1,
            color: theme => theme.palette.new.text.neutral.default,
            transitionProperty: 'transform, color, background, opacity',
            transitionDuration: '125ms',
            transitionTimingFunction: 'ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            },
            '&:active': {
                transform: 'scale(0.9)',
            },
            '& svg': {
                stroke: theme => theme.palette.new.text.neutral.default,
            },
            ...(isActive && {
                backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                color: theme => theme.palette.new.text.neutral.brand,
                transform: 'scale(0.9)',
                '&:hover': {
                    transform: 'scale(0.9)',
                },
            }),
            ...(disabled && {
                opacity: 0.5,
                cursor: 'not-allowed',
            }),
            ...sx,
        }, children: [children, icon] }));
    const actionButton = disabled ? _jsx("span", { children: iconButton }) : iconButton;
    return (_jsx(Tooltip, { description: title, direction: "top", delay: 100, children: actionButton }));
};
export default forwardRef(ActionButton);
