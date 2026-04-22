import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CloseIcon from '@mui/icons-material/Close';
import { Badge, Box, Button, IconButton, LinearProgress, SnackbarContent, Stack, Typography, useTheme, } from '@mui/material';
import { keyframes } from '@mui/system';
import { IconAlertTriangle, IconCheck, IconInfoCircle, IconX, } from '@tabler/icons-react';
import { SnackbarProvider, useSnackbar as useNotistackSnackbar, } from 'notistack';
const SNACKBAR_DURATIONS = {
    withAction: {
        extra: 2000, // Additional time when there's a cancel action
    },
};
const NOTISTACK_QUERY = '.notistack-SnackbarContainer';
const PADDING = 8;
export const useSnackbar = () => {
    const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackbar();
    const theme = useTheme();
    const backgroundColor = theme.palette.new.background.elements.inverted;
    const getProps = (variant) => {
        switch (variant) {
            case 'warning':
                return {
                    Icon: IconAlertTriangle,
                    color: theme.palette.new.border.states.warning,
                    iconColor: theme.palette.newBase?.yellow[600] ?? theme.palette.warning.main,
                };
            case 'info':
                return {
                    Icon: IconInfoCircle,
                    color: theme.palette.new.border.states.info,
                    iconColor: theme.palette.newBase?.skyBlue[600] ?? theme.palette.info.main,
                };
            case 'error':
                return {
                    Icon: IconX,
                    color: theme.palette.new.border.states.error,
                    iconColor: theme.palette.newBase?.red[600] ?? theme.palette.error.main,
                };
            default:
            case 'success':
                return {
                    Icon: IconCheck,
                    color: theme.palette.new.border.states.success,
                    iconColor: theme.palette.newBase?.green[600] ?? theme.palette.success.main,
                };
        }
    };
    const globalXSBase = {
        fontFamily: 'Roboto',
        lineHeight: '140%',
        fontWeight: 400,
        letterSpacing: 0.2,
        fontSize: 14,
    };
    const enqueueSnackbar = (props) => {
        const { title, description, hasClose = true, cancelAction, variant, spacing, autoHideDuration = 6000, } = props;
        const { Icon, color, iconColor } = getProps(variant);
        const progressAnimation = keyframes `from { width: 0%; } to { width: 100%; }`;
        const progressDuration = autoHideDuration * 0.8;
        const durations = {
            hide: cancelAction
                ? autoHideDuration + SNACKBAR_DURATIONS.withAction.extra
                : autoHideDuration,
            progress: cancelAction
                ? progressDuration + SNACKBAR_DURATIONS.withAction.extra
                : progressDuration,
        };
        return enqueueNotistackSnackbar('', {
            autoHideDuration: durations.hide,
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
            onEnter: () => {
                const snackbarElement = document.querySelector(NOTISTACK_QUERY);
                if (snackbarElement) {
                    if (spacing?.bottom) {
                        const newBottom = spacing?.bottom + PADDING;
                        snackbarElement.style.bottom = `${newBottom}px`;
                    }
                    if (spacing?.top) {
                        const newTop = spacing?.top + PADDING;
                        snackbarElement.style.top = `${newTop}px`;
                    }
                    if (spacing?.left) {
                        const newLeft = spacing?.left + PADDING;
                        snackbarElement.style.left = `${newLeft}px`;
                    }
                    if (spacing?.right) {
                        const newRight = spacing?.right + PADDING;
                        snackbarElement.style.right = `${newRight}px`;
                    }
                }
            },
            content: key => (_jsxs("div", { style: {
                    borderRadius: '8px',
                    overflow: 'hidden',
                    width: 600,
                    maxWidth: '100%',
                    position: 'relative',
                }, children: [_jsx(SnackbarContent, { style: {
                            backgroundColor: backgroundColor,
                            display: 'flex',
                            borderRadius: 0,
                        }, message: _jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 1,
                                ml: 1,
                                maxWidth: cancelAction ? 400 : '99%',
                            }, children: [_jsx(Badge, { badgeContent: _jsx(Box, { sx: {
                                            width: 16,
                                            height: 16,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }, children: _jsx(Icon, {}) }), overlap: "circular", sx: {
                                        mr: 2,
                                        mb: title && description ? 2 : 0,
                                        '.MuiBadge-badge': {
                                            backgroundColor: iconColor,
                                            minWidth: 24,
                                            minHeight: 24,
                                            borderRadius: '50%',
                                            padding: 0,
                                        },
                                    } }), _jsxs(Stack, { children: [title && (_jsx(Typography, { sx: {
                                                // Temporally use manual style for -> globalS
                                                ...globalXSBase,
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: theme.palette.new.text.neutral.inverted,
                                            }, children: title })), description && (_jsx(Typography, { sx: {
                                                // Temporally use manual style for -> globalXS
                                                ...globalXSBase,
                                                color: theme.palette.new.text.neutral.inverted,
                                            }, children: description }))] })] }), action: [
                            cancelAction && (_jsx(Button, { onClick: () => {
                                    cancelAction?.onClick();
                                    closeSnackbar(key);
                                }, sx: {
                                    p: 0.5,
                                    mr: 4,
                                    color: theme.palette.new.text.neutral.inverted,
                                    minWidth: 'auto',
                                    maxWidth: 120,
                                }, children: _jsx(Typography, { variant: "globalS", fontWeight: "fontWeightRegular", sx: {
                                        textDecoration: 'underline',
                                        textTransform: 'none',
                                        color: theme.palette.new.text.neutral.inverted,
                                    }, children: cancelAction.text }) }, "cancelButton")),
                            hasClose && (_jsx(IconButton, { onClick: () => closeSnackbar(key), sx: {
                                    p: 0,
                                    top: 12,
                                    right: 12,
                                    fontSize: '12px',
                                    position: 'absolute',
                                    color: theme.palette.new.text.neutral.inverted,
                                }, children: _jsx(CloseIcon, { sx: { fontSize: '16px' }, color: "inherit" }) }, "closeButton")),
                        ] }, key), _jsx(LinearProgress, { variant: "determinate", value: 100, sx: {
                            height: '6px',
                            backgroundColor: color,
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: iconColor,
                                animation: `${progressAnimation} ${durations.progress / 1000}s linear`,
                            },
                        } })] })),
        });
    };
    return { enqueueSnackbar, closeSnackbar };
};
export { SnackbarProvider };
export default useSnackbar;
