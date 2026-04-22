import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans, useTranslation } from 'react-i18next';
import { Divider, Stack, Typography, useTheme, } from '@mui/material';
import { colorPalette } from '../../../../../theme/hugo/colors';
import CustomPopover from '../../CustomPopover';
import { formatScore } from '../utils';
const getTranslationKey = (value) => {
    const baseKey = 'people_experience.score_filtered';
    if (value === 0) {
        return `${baseKey}_EQUAL`;
    }
    return `${baseKey}_${value > 0 ? 'POSITIVE' : 'NEGATIVE'}`;
};
const ResultItem = ({ title, value }) => (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 2, justifyContent: 'space-between' }, children: [_jsx(Typography, { sx: {
                fontWeight: 'fontWeightMedium',
                color: theme => theme.palette.new.text.neutral.default,
            }, children: title }), _jsx(Typography, { sx: { color: theme => theme.palette.new.text.neutral.default }, children: formatScore(value) })] }));
const ScoreComparisonPopover = ({ score, baseScore, difference, ...props }) => {
    const { t } = useTranslation('material_hu_only');
    const theme = useTheme();
    const getDifferenceTextColor = () => {
        if (difference === 0) {
            return;
        }
        return difference > 0
            ? colorPalette.base.green[600]
            : colorPalette.base.red[600];
    };
    return (_jsxs(CustomPopover, { ...props, slotProps: {
            paper: {
                sx: {
                    p: 0,
                },
            },
        }, children: [_jsxs(Stack, { sx: { width: '240px', gap: 1, p: 2 }, children: [[
                        {
                            id: 'filtered',
                            title: t('people_experience.your_filtered_score'),
                            value: score,
                        },
                        {
                            id: 'score',
                            title: t('people_experience.survey'),
                            value: baseScore,
                        },
                    ].map(item => (_jsx(ResultItem, { title: item.title, value: item.value }, item.id))), _jsx(Divider, {}), _jsx(Typography, { sx: { color: theme.palette.new.text.neutral.default }, children: _jsx(Trans, { i18nKey: getTranslationKey(difference), t: t, values: { count: Math.abs(formatScore(difference)) }, components: {
                                text: (_jsx(Typography, { component: "span", color: getDifferenceTextColor() })),
                            } }) })] }), _jsx(Typography, { sx: {
                    p: 0.5,
                    bgcolor: colorPalette.base.lilac[100],
                    color: colorPalette.base.lilac[800],
                    borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
                    border: `1px solid ${colorPalette.base.lilac[200]}`,
                    width: '100%',
                    textAlign: 'center',
                    display: 'block',
                }, variant: "globalXXS", children: t('people_experience.results_comparing') })] }));
};
export default ScoreComparisonPopover;
