import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import Pill from '../../../../design-system/Pills';
import ProgressBar from '../../../../design-system/ProgressIndicators/ProgressBar';
import Table from '../../../../design-system/Table';
import TableBody from '../../../../design-system/Table/components/TableBody';
import TableCell from '../../../../design-system/Table/components/TableCell';
import TableContainer from '../../../../design-system/Table/components/TableContainer';
import TableHead from '../../../../design-system/Table/components/TableHead';
import TableRow from '../../../../design-system/Table/components/TableRow';
import Title from '../../../../design-system/Title';
import Tooltip from '../../../../design-system/Tooltip';
import { useTheme } from '@mui/material';
import { IconChevronRight, IconInfoCircle, IconMessage2X, } from '@tabler/icons-react';
import { compact } from 'lodash';
import SatisfactionChart from '../SatifactionChart';
import SatisfactionTableContentSkeleton from '../SatisfactionTableContentSkeleton';
import ScoreDifferenceIndicator from '../ScoreDifferenceIndicator';
const SatisfactionQuestionsTable = ({ questions, questionsCount, questionsHeading, distributionHeading, scoreHeading, scoreDifferenceHeading, noAnswerLabel, openCommentLabel, tooltipLabels, getTooltipTitle, noScoreMessage, onRowClick, slotProps = {}, loading = false, loadingMore = false, differenceIndicatorMeta, }) => {
    const theme = useTheme();
    const hasScoreDifference = useMemo(() => questions.some(question => question.type === 'LIKERT' && question.scoreDifference !== null), [questions]);
    const renderScoreCell = (row) => {
        if (row.type === 'LIKERT') {
            if (row.hasThresholdPassed) {
                return (_jsx(Title, { title: row.score, variant: "S", fontWeight: "fontWeightRegular" }));
            }
            else {
                return (_jsx(Tooltip, { description: noAnswerLabel, children: _jsx(IconMessage2X, { size: 20, color: theme.palette.new.text.neutral.default }) }));
            }
        }
        return (_jsx(Tooltip, { description: noScoreMessage, children: _jsx(IconInfoCircle, { size: 20, color: theme.palette.new.text.neutral.default }) }));
    };
    const columns = useMemo(() => {
        const baseColumns = [
            {
                id: 'statement',
                heading: (count) => `${questionsHeading} ${count ? `(${count})` : ''}`,
                width: '50%',
                renderCell: (row) => (_jsx(Title, { title: row.statement, description: compact([
                        row.answersLabel,
                        row.commentsLabel,
                        row.topicLabel,
                    ]).join(' | '), variant: "S", fontWeight: "fontWeightRegular" })),
            },
            {
                id: 'score',
                heading: scoreHeading,
                renderCell: renderScoreCell,
            },
        ];
        if (hasScoreDifference) {
            baseColumns.push({
                id: 'scoreDifference',
                heading: scoreDifferenceHeading,
                renderCell: (row) => {
                    if (row.type === 'LIKERT' &&
                        row.score !== null &&
                        row.scoreDifference !== null &&
                        row.baseScore !== null) {
                        return (_jsx(ScoreDifferenceIndicator, { difference: row.scoreDifference, popoverMeta: {
                                scoreDifferenceDescription: differenceIndicatorMeta.getScoreDifferenceDescription(row),
                                score: row.score,
                                baseScore: row.baseScore,
                                scoreLabel: differenceIndicatorMeta.scoreLabel,
                                baseScoreLabel: differenceIndicatorMeta.baseScoreLabel,
                                footerLabel: differenceIndicatorMeta.footerLabel,
                            } }));
                    }
                    return renderScoreCell(row);
                },
            });
        }
        baseColumns.push({
            id: 'distribution',
            heading: distributionHeading,
            width: '40%',
            renderCell: (row) => {
                if (!row.hasThresholdPassed) {
                    return (_jsx(Pill, { label: noAnswerLabel, type: "disabled", size: "medium", hasIcon: false }));
                }
                switch (row.type) {
                    case 'LIKERT':
                        if ([row.promoters, row.detractors, row.neutrals].every(value => value === 0)) {
                            return '--';
                        }
                        return (_jsx(SatisfactionChart, { promoters: row.promoters, detractors: row.detractors, neutrals: row.neutrals, getTooltipTitle: (key, value) => getTooltipTitle
                                ? getTooltipTitle(key, value)
                                : `${tooltipLabels[key]}: ${value}` }));
                    case 'TEXT':
                        return (_jsx(Pill, { label: openCommentLabel, type: "neutral", size: "medium", hasIcon: false }));
                    case 'SELECT':
                        return (_jsx(ProgressBar, { helper: `${row.scorePercentage}%: "${row.answer}"`, current: row.scorePercentage, total: 100, variant: "determinate" }));
                    default:
                        return null;
                }
            },
        }, {
            id: 'actions',
            heading: '',
            width: 24,
            renderCell: () => _jsx(IconChevronRight, { size: 16 }),
        });
        return baseColumns;
    }, [
        questionsHeading,
        scoreHeading,
        scoreDifferenceHeading,
        hasScoreDifference,
        distributionHeading,
        noAnswerLabel,
        openCommentLabel,
        tooltipLabels,
        getTooltipTitle,
        noScoreMessage,
        onRowClick,
        theme,
    ]);
    const handleRowClick = (question) => () => {
        const selection = window.getSelection();
        if (selection && selection.type === 'Range' && selection.toString()) {
            return;
        }
        onRowClick?.(question);
    };
    return (_jsx(TableContainer, { ...slotProps.tableContainer, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { headerRow: true, children: columns.map(column => {
                            const heading = typeof column.heading === 'function'
                                ? column.heading(questionsCount)
                                : column.heading;
                            return (_jsx(TableCell, { sx: { width: column.width }, children: _jsx(Title, { title: heading, variant: "S" }) }, column.id));
                        }) }) }), _jsxs(TableBody, { children: [loading && (_jsx(SatisfactionTableContentSkeleton, { rows: 5, hasDifferenceColumn: hasScoreDifference })), !loading &&
                            questions.map(question => (_jsx(TableRow, { onClick: handleRowClick(question), hover: true, children: columns.map(column => (_jsx(TableCell, { sx: { width: column.width }, children: column.renderCell(question) }, column.id))) }, question.id))), loadingMore && (_jsx(SatisfactionTableContentSkeleton, { rows: 3, hasDifferenceColumn: hasScoreDifference }))] })] }) }));
};
export default SatisfactionQuestionsTable;
