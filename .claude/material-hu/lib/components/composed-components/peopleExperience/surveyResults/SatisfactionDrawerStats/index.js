import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import CardContainer from '../../../../design-system/CardContainer';
import Title from '../../../../design-system/Title';
import { Divider, Stack } from '@mui/material';
import { compact } from 'lodash';
import { formatAmount } from '../utils';
const SatisfactionDrawerStats = ({ scoreLabel = 'Score', answersLabel = 'Answers', commentsLabel = 'Comments', formatLabel = 'Format', scoreInfo, score, answers, comments, format, scoreDifferenceIndicator, hideScore, }) => {
    const items = compact([
        !hideScore && {
            id: 'score',
            label: scoreLabel,
            value: formatAmount(score),
            info: scoreInfo,
            description: scoreDifferenceIndicator,
        },
        { id: 'answers', label: answersLabel, value: formatAmount(answers) },
        { id: 'comments', label: commentsLabel, value: formatAmount(comments) },
        { id: 'format', label: formatLabel, value: format },
    ]);
    return (_jsx(CardContainer, { color: "grey", fullWidth: true, children: _jsx(Stack, { sx: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }, children: items.map((item, index) => (_jsxs(Fragment, { children: [_jsx(Title, { id: item.id, copetin: item.label, title: item.value, copetinTooltip: item.info, variant: "XL", description: item.description, sx: { flex: '1 1 0', flexShrink: item.id === 'format' ? 0 : 1 }, overflow: "tooltip", slotProps: {
                            title: {
                                sx: {
                                    textAlign: 'start',
                                },
                            },
                        }, withEllipsis: true, centered: true }), index < items.length - 1 && (_jsx(Divider, { orientation: "vertical", sx: { mx: 2 }, flexItem: true }))] }, item.id))) }) }));
};
export default SatisfactionDrawerStats;
