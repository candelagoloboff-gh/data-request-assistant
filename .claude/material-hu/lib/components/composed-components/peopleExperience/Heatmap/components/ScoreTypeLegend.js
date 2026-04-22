import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Circle } from '@mui/icons-material';
import { colors, Stack, Typography } from '@mui/material';
import { IconCircleFilled } from '@tabler/icons-react';
import { COLOR_SCORE_THRESHOLD } from '../../constants';
import { ScoreType } from '../../types';
const ColorLegend = ({ from, to, color }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, alignItems: 'center' }, children: [_jsx(Circle, { sx: { color } }), _jsx(Typography, { sx: {
                    fontSize: '14px',
                    color: colors.blueGrey[500],
                    whiteSpace: 'nowrap',
                }, children: t('people_experience.from_to', { from, to }) })] }));
};
const ScoreTypeLegend = ({ scoreTypeId }) => {
    const { t } = useTranslation('material_hu_only');
    if (scoreTypeId === ScoreType.DIFFERENCE) {
        return (_jsxs(Stack, { sx: {
                alignItems: 'flex-end',
                gap: 1,
                color: colors.blueGrey[600],
                fontSize: '14px',
            }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', gap: 2 }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [_jsx(IconCircleFilled, { size: 16, color: colors.red[100] }), _jsx(Typography, { sx: { fontSize: '14px' }, children: t('people_experience.negative_difference') })] }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [_jsx(Circle, { sx: { color: colors.green[100] } }), _jsx(Typography, { sx: { fontSize: '14px' }, children: t('people_experience.positive_difference') })] })] }), _jsx(Typography, { sx: { fontSize: '14px' }, hidden: true, children: t('people_experience.difference_legend_description') })] }));
    }
    if (scoreTypeId === ScoreType.SCORE) {
        return (_jsx(Stack, { sx: { flexDirection: 'row', gap: 2, flexWrap: 'wrap' }, children: COLOR_SCORE_THRESHOLD.map(({ from, to, color }) => (_jsx(ColorLegend, { from: from * 100, to: to * 100, color: color }, from))) }));
    }
};
export default ScoreTypeLegend;
