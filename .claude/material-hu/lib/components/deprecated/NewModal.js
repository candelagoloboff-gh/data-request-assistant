import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseOutlined as CloseOutlinedIcon, } from '@mui/icons-material';
import { default as Button, } from '@mui/lab/LoadingButton';
import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, } from '@mui/material';
/**
 * @deprecated Use HuDrawer instead
 */
const NewModal = ({ title, body, textBody, TitleIcon, primaryButtonProps, secondaryButtonProps, onClose, }) => (_jsxs(Box, { sx: { px: 4, pb: 4, pt: 3 }, children: [_jsxs(Stack, { direction: "row", sx: { alignItems: 'start' }, gap: 1, children: [TitleIcon && (_jsx(TitleIcon, { sx: { mt: '2px' }, color: "humand" })), _jsx(DialogTitle, { variant: "h5", sx: { p: 0, mr: 'auto', flexShrink: 1, alignSelf: 'center' }, children: title }), _jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: { p: 0 }, children: _jsx(CloseOutlinedIcon, {}) })] }), _jsxs(DialogContent, { sx: { px: 0 }, children: [textBody && _jsx(DialogContentText, { children: textBody }), body] }), _jsxs(DialogActions, { sx: { p: 0 }, children: [secondaryButtonProps && (_jsx(Button, { color: "humand", variant: "text", ...secondaryButtonProps, sx: { mr: 2, ...secondaryButtonProps.sx } })), primaryButtonProps && (_jsx(Button, { color: "humand", variant: "contained", ...primaryButtonProps }))] })] }));
export default NewModal;
