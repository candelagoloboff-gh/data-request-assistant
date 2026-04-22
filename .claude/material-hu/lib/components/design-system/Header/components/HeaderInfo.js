import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { copyLinkContainerStyle } from '../constants';
const HeaderInfo = ({ children, copyLinkButton }) => (_jsxs(Stack, { sx: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        flex: 1,
        minWidth: 0,
        ...(copyLinkButton ? copyLinkContainerStyle : {}),
    }, children: [children, copyLinkButton && _jsx(Stack, { id: "copy-link-button", children: copyLinkButton })] }));
export default HeaderInfo;
