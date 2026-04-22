import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../Avatar';
import CardContainer from '../CardContainer';
import Title from '../Title';
import { Button, Stack } from '@mui/material';
import { getColor, getDefaultIcon } from './utils';
const StateCard = ({ title, description, primaryAction, secondaryAction, variant = 'primary', icon, slotProps, }) => {
    const defaultIcon = getDefaultIcon(variant);
    const color = getColor(variant);
    return (_jsx(CardContainer, { fullWidth: true, ...slotProps?.card, children: _jsxs(Stack, { sx: {
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
            }, children: [_jsx(Avatar, { color: color, Icon: icon ?? defaultIcon }), _jsx(Title, { title: title, description: description, variant: "M", centered: true }), (primaryAction || secondaryAction) && (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 2 }, children: [secondaryAction && (_jsx(Button, { size: "small", onClick: secondaryAction.onClick, children: secondaryAction.label })), primaryAction && (_jsx(Button, { size: "small", variant: "outlined", onClick: primaryAction.onClick, children: primaryAction.label }))] }))] }) }));
};
export default StateCard;
