import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../../design-system/CardContainer';
import Title from '../../../../design-system/Title';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SatisfactionChart from '../SatifactionChart';
import ScoreDifferenceIndicator from '../ScoreDifferenceIndicator';
const SatisfactionStatsHeader = ({ title, score, scoreDisplayFallback = '--', chartMeta, slotProps = {}, scoreLabel = 'Score', differenceIndicatorMeta, }) => {
    const hasChart = [
        chartMeta.promoters,
        chartMeta.detractors,
        chartMeta.neutrals,
    ].some(value => value > 0);
    const { scoreDifference, baseScore, baseScoreLabel, footerLabel, getScoreDifferenceDescription, } = differenceIndicatorMeta;
    return (_jsx(CardContainer, { padding: 24, fullWidth: true, children: _jsxs(Stack, { ...slotProps.root, sx: { gap: 2, ...slotProps.root?.sx }, children: [_jsx(Title, { title: title, variant: "L", sx: { justifyContent: 'center' } }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 2 }, children: [_jsx(Title, { title: score === null ? scoreDisplayFallback : score, copetin: scoreLabel, variant: "XL", description: score !== null &&
                                scoreDifference !== null &&
                                baseScore !== null ? (_jsx(ScoreDifferenceIndicator, { difference: scoreDifference, popoverMeta: {
                                    score,
                                    baseScore,
                                    scoreLabel: differenceIndicatorMeta.scoreLabel,
                                    baseScoreLabel,
                                    footerLabel,
                                    scoreDifferenceDescription: getScoreDifferenceDescription(scoreDifference),
                                }, slotProps: {
                                    popover: {
                                        anchorOrigin: {
                                            vertical: 24,
                                            horizontal: 'left',
                                        },
                                        transformOrigin: {
                                            vertical: 'top',
                                            horizontal: 'left',
                                        },
                                    },
                                } })) : null, sx: { flexShrink: 0, justifyContent: 'center' }, centered: true }), _jsx(Divider, { orientation: "vertical" }), _jsxs(Stack, { sx: { justifyContent: 'center', gap: 1, width: '100%' }, children: [_jsx(Title, { title: chartMeta.title }), hasChart && (_jsx(SatisfactionChart, { promoters: chartMeta.promoters, detractors: chartMeta.detractors, neutrals: chartMeta.neutrals, getTooltipTitle: chartMeta.getTooltipTitle, size: "large" })), _jsx(Typography, { variant: "globalXXS", sx: { color: theme => theme.palette.new.text.neutral.lighter }, children: chartMeta.description })] })] })] }) }));
};
export default SatisfactionStatsHeader;
