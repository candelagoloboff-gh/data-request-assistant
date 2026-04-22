import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../../design-system/Avatar';
import CardContainer from '../../design-system/CardContainer';
import Pills from '../../design-system/Pills';
import Switcher from '../../design-system/Switcher';
import Title from '../../design-system/Title';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
const AvatarSwitcherCard = ({ checked = false, sx, title, description, icon, onChange, pills, actions, slotProps, }) => {
    return (_jsx(CardContainer, { sx: {
            width: '100%',
            ...sx,
        }, ...slotProps?.root, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1,
            }, children: [_jsxs(Stack, { sx: {
                        gap: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        minWidth: 0,
                    }, children: [_jsx(Avatar, { Icon: icon, ...slotProps?.avatar }), _jsx(Title, { title: title, description: description, variant: "S", sx: {
                                textWrap: 'balance',
                            }, ...slotProps?.title })] }), _jsxs(Stack, { sx: {
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 1,
                    }, children: [pills?.map(pill => (_jsx(Pills, { hasIcon: false, ...pill, size: "small" }, pill.label))), actions?.map(action => (_jsx(IconButton, { onClick: action.onClick, ...action }, action.children?.toString()))), _jsx(Switcher, { value: checked, onChange: onChange, ...slotProps?.switcher })] })] }) }));
};
export default AvatarSwitcherCard;
