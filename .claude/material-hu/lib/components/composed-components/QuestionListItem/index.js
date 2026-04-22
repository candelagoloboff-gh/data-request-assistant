import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../design-system/CardContainer';
import Pill from '../../design-system/Pills';
import Title from '../../design-system/Title';
import Tooltip from '../../design-system/Tooltip';
import { IconButton, Stack, Typography } from '@mui/material';
import { merge } from 'lodash';
const QuestionListItem = ({ item: question, dragHandleButton, actions, pillLabel, slotProps: receivedSlotProps, getTypeDescription, showIndex = false, index, }) => {
    const slotProps = merge({}, {
        pill: {
            type: 'highlight',
            hasIcon: false,
            size: 'small',
        },
    }, receivedSlotProps);
    return (_jsx(CardContainer, { sx: { boxSizing: 'border-box' }, fullWidth: true, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 0.5,
                alignItems: 'center',
            }, children: [showIndex && (_jsx(Typography, { component: Stack, sx: {
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: theme => theme.palette.ilustrations?.primaryIlus,
                        color: theme => theme.palette.common.white,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 'fontWeightSemiBold',
                        p: 0.25,
                        boxSizing: 'border-box',
                    }, children: index + 1 })), dragHandleButton, _jsx(Title, { title: question.statement, description: getTypeDescription?.(question) ?? '', sx: { flex: 1 }, withEllipsis: true }), pillLabel && (_jsx(Pill, { label: pillLabel, ...slotProps.pill })), actions?.map(action => (_jsx(Tooltip, { description: action.name, delay: 500, children: _jsx(IconButton, { onClick: action.onClick, children: action.icon }) }, action.name)))] }) }));
};
export default QuestionListItem;
