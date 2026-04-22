import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Close, FolderZipOutlined, PictureAsPdfOutlined, } from '@mui/icons-material';
import { colors, IconButton, Link, Stack, Tooltip, Typography, useTheme, } from '@mui/material';
export var DocumentItemTypes;
(function (DocumentItemTypes) {
    DocumentItemTypes["PDF"] = "pdf";
    DocumentItemTypes["FILE"] = "file";
})(DocumentItemTypes || (DocumentItemTypes = {}));
const DOCUMENT_ICONS = {
    [DocumentItemTypes.PDF]: PictureAsPdfOutlined,
    [DocumentItemTypes.FILE]: FolderZipOutlined,
};
/**
 * @deprecated Use HuFileCard instead
 */
export const DocumentItem = props => {
    const { name, size, url, openLabel, deleteLabel, onDelete, type = DocumentItemTypes.FILE, } = props;
    const theme = useTheme();
    const Icon = DOCUMENT_ICONS[type];
    return (_jsxs(Stack, { sx: {
            gap: 2,
            flexDirection: 'row',
            aligItems: 'center',
            py: 1.5,
            px: 2,
            borderRadius: theme.spacing(1),
            backgroundColor: colors.grey[100],
        }, children: [_jsx(Icon, { color: "primary", sx: {
                    width: theme.spacing(5),
                    height: theme.spacing(5),
                } }), _jsxs(Stack, { sx: {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }, children: [!!name && (_jsx(Stack, { children: _jsx(Typography, { variant: "subtitle2", children: name }) })), _jsxs(Stack, { component: Typography, variant: "body2", sx: {
                            gap: 0.5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, children: [!!size && _jsx("span", { children: size }), !!size && !!url && _jsx("span", { children: '•' }), !!url && (_jsx(Link, { href: url, underline: "none", color: "primary", target: "_blank", rel: "noreferrer", sx: {
                                    p: 0,
                                    m: 0,
                                }, children: openLabel }))] })] }), onDelete && deleteLabel && (_jsx(Tooltip, { title: deleteLabel, children: _jsx(IconButton, { onClick: onDelete, "aria-label": deleteLabel, children: _jsx(Close, { fontSize: "small" }) }) }))] }));
};
export default DocumentItem;
