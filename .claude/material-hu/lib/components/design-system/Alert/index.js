import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Alert as AlertMui, AlertTitle, Button, IconButton, Stack, Typography, useTheme, } from '@mui/material';
import { IconAlertTriangle, IconBulb, IconCheck, IconExclamationCircle, IconInfoCircle, IconX, } from '@tabler/icons-react';
import Skeleton from '../Skeleton';
const Alert = (props) => {
    const { action, description, hasClose, loading, onClose, severity, skeletonProps, sx, title, } = props;
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    if (!open)
        return null;
    const mapSeverityIcon = {
        success: {
            icon: IconCheck,
            backgroundColor: theme.palette.new.background.feedback.success,
            borderColor: theme.palette.new.border.states.success,
            color: theme.palette.new.text.feedback.success,
            graphic: theme.palette.newBase?.green[500],
        },
        error: {
            icon: IconExclamationCircle,
            backgroundColor: theme.palette.new.background.feedback.error,
            borderColor: theme.palette.new.border.states.error,
            color: theme.palette.new.text.feedback.error,
            graphic: theme.palette.newBase?.red[500],
        },
        warning: {
            icon: IconAlertTriangle,
            backgroundColor: theme.palette.new.background.feedback.warning,
            borderColor: theme.palette.new.border.states.warning,
            color: theme.palette.new.text.feedback.warning,
            graphic: theme.palette.newBase?.yellow[500],
        },
        info: {
            icon: IconInfoCircle,
            backgroundColor: theme.palette.new.background.feedback.info,
            borderColor: theme.palette.new.border.states.info,
            color: theme.palette.new.text.feedback.info,
            graphic: theme.palette.newBase?.skyBlue[500],
        },
        highlight: {
            icon: IconBulb,
            backgroundColor: theme.palette.new.background.feedback.highlight,
            borderColor: theme.palette.new.border.states.secondary,
            color: theme.palette.new.text.feedback.highlight,
            graphic: theme.palette.newBase?.purple[500],
        },
    };
    const data = mapSeverityIcon[severity];
    return (_jsxs(AlertMui, { icon: _jsx(data.icon, { color: data.color }), action: !loading && (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: [action && (_jsx(Button, { variant: "text", onClick: action.onClick, sx: {
                        color: data.color,
                        minWidth: 'unset',
                        '&:hover': {
                            backgroundColor: data.borderColor,
                            color: data.color,
                        },
                    }, children: action.text })), hasClose && (_jsx(IconButton, { sx: {
                        alignSelf: 'flex-start',
                    }, "aria-label": "close", size: "small", onClick: () => {
                        onClose?.();
                        setOpen(false);
                    }, children: _jsx(IconX, { width: "16px", height: "16px", style: {
                            stroke: theme.palette.new.text.neutral.default,
                        } }) }))] })), sx: {
            backgroundColor: data.backgroundColor,
            borderColor: data.borderColor,
            borderStyle: 'solid',
            borderLeftStyle: 'none',
            color: data.color,
            p: 2,
            alignItems: description ? 'normal' : 'center',
            ':before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '-1px',
                bottom: '-1px',
                borderLeft: `solid ${data.graphic} 4px`,
                borderRadius: '6px',
                width: '20px',
            },
            position: 'relative',
            '& div': {
                py: 0,
            },
            '& .MuiAlert-message': loading
                ? {
                    display: 'flex',
                    flex: '1 0',
                }
                : {},
            ...sx,
        }, children: [loading && (_jsx(Skeleton, { variant: "text", width: "100%", sx: {
                    alignSelf: 'stretch',
                    width: 'clamp(100px, 100%, 100%)',
                    flex: '1 0 100%',
                    backgroundColor: data.borderColor,
                    backgroundBlendMode: 'color',
                }, ...skeletonProps })), !loading && (_jsxs(_Fragment, { children: [_jsx(AlertTitle, { sx: { mb: description ? 0.25 : 0 }, children: _jsx(Typography, { variant: "globalS", fontWeight: "semiBold", sx: { color: data.color }, children: title }) }), typeof description === 'string' && (_jsx(Typography, { sx: { color: data.color }, variant: "globalXS", children: description })), typeof description === 'object' && description] }))] }));
};
export default Alert;
