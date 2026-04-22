import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../../../design-system/Avatar';
import CardContainer from '../../../design-system/CardContainer';
import Pills from '../../../design-system/Pills';
import Title from '../../../design-system/Title';
import Tooltip from '../../../design-system/Tooltip';
import { Stack } from '@mui/material';
import { IconChevronRight } from '@tabler/icons-react';
import { appearFromBottom } from '../../../../utils/animations';
const SelectionCriteriaCard = ({ onClick, title, description, info, infoTooltip, Icon, withArrow, sx, slotProps = {}, }) => {
    const { root: rootProps, avatar: avatarProps, title: titleProps, pills: pillsProps, } = slotProps;
    return (_jsx(CardContainer, { fullWidth: true, onClick: onClick, ...rootProps, sx: {
            gap: 2,
            flexDirection: 'row',
            animation: `${appearFromBottom} 125ms ease-in-out backwards`,
            ...sx,
            ...rootProps?.sx,
        }, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                gap: 1,
                width: '100%',
                alignItems: 'center',
            }, children: [_jsx(Avatar, { Icon: Icon, ...avatarProps }), _jsx(Title, { title: title, description: description, variant: "S", ...titleProps, sx: { maxWidth: '90ch', ...titleProps?.sx } }), _jsxs(Stack, { sx: {
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 1,
                        justifyContent: 'end',
                    }, children: [info && (_jsx(Tooltip, { description: infoTooltip, disableTooltip: !infoTooltip, children: _jsx("span", { children: _jsx(Pills, { label: info, variant: "outlined", hasIcon: false, type: "highlight", ...pillsProps }) }) })), withArrow && _jsx(IconChevronRight, {})] })] }) }));
};
export default SelectionCriteriaCard;
