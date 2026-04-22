import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import AvatarGroup from '../../../AvatarGroup';
import Pills from '../../../Pills';
import { Title } from '../../../Title';
const SideContent = ({ sidePill, sideText, sideAvatars }) => {
    return (_jsxs(Stack, { sx: {
            gap: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }, children: [sidePill && (_jsx(Pills, { hasIcon: false, type: sidePill.type || 'info', ...sidePill })), sideText && (_jsx(Title, { ...sideText, variant: "S", fontWeight: "fontWeightRegular", right: true })), sideAvatars && _jsx(AvatarGroup, { ...sideAvatars })] }));
};
export default SideContent;
