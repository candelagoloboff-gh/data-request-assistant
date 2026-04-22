import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Buttons/Button';
import { DialogActions, DialogContent, IconButton, Stack, Typography, useTheme, } from '@mui/material';
import { IconInfoCircle, IconX } from '@tabler/icons-react';
import { composeSx } from '../../../utils/components';
/**
 * Dialog.Header - Header section with title and close button
 */
export function DialogHeader({ title, onClose, children, sx, }) {
    const theme = useTheme();
    return (_jsxs(Stack, { sx: composeSx({
            alignItems: 'center',
            flexDirection: 'row',
            gap: '8px',
            justifyContent: title || children ? 'space-between' : 'flex-end',
            p: 3,
        }, sx), children: [title && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: title })), children, _jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: { p: 0 }, children: _jsx(IconX, { color: theme.palette.new.text.neutral.default }) })] }));
}
/**
 * Dialog.Body - Content section with scroll support
 */
export function DialogBody({ children, textBody, sx, }) {
    const theme = useTheme();
    return (_jsxs(DialogContent, { sx: composeSx({ px: 3, py: 2, maxHeight: '400px', overflowY: 'auto' }, sx), children: [textBody && (_jsx(Typography, { variant: "globalS", sx: { color: theme.palette.new.text.neutral.default }, children: textBody })), children] }));
}
/**
 * Dialog.Footer - Footer section for actions and info
 */
export function DialogFooter({ children, actionInfo, hideBorder = false, sx, }) {
    const theme = useTheme();
    return (_jsxs(DialogActions, { sx: composeSx({
            p: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: actionInfo ? 'space-between' : 'flex-end',
            borderTop: hideBorder
                ? 'none'
                : `1px solid ${theme.palette.new.border.neutral.default}`,
        }, sx), children: [actionInfo && (_jsxs(Stack, { sx: { flexDirection: 'row', gap: '4px', alignItems: 'center' }, children: [_jsx(IconInfoCircle, { size: 16, color: theme.palette.new.text.neutral.lighter }), _jsx(Typography, { variant: "globalXS", sx: { color: theme.palette.new.text.neutral.lighter }, children: actionInfo })] })), _jsx(Stack, { sx: { flexDirection: 'row', gap: '8px' }, children: children })] }));
}
/**
 * Main Dialog component - Uses composition components internally
 * Maintains backward compatibility with the existing API
 */
const Dialog = ({ title, onClose, body, textBody, primaryButtonProps, secondaryButtonProps, actionInfo, footerProps = { hideBorder: false }, sx, }) => {
    const hasFooter = primaryButtonProps || secondaryButtonProps || actionInfo;
    const hasBody = textBody || body;
    return (_jsxs(Stack, { sx: composeSx({ maxHeight: '600px' }, sx), children: [_jsx(DialogHeader, { title: title, onClose: onClose }), hasBody && _jsx(DialogBody, { textBody: textBody, children: body }), hasFooter && (_jsxs(DialogFooter, { actionInfo: actionInfo, hideBorder: footerProps.hideBorder, children: [secondaryButtonProps && (_jsx(Button, { variant: "tertiary", ...secondaryButtonProps })), primaryButtonProps && (_jsx(Button, { variant: "primary", ...primaryButtonProps }))] }))] }));
};
// Attach composition components to Dialog namespace
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
export default Dialog;
