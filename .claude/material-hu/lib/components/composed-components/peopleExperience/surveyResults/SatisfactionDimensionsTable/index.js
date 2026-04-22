import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import Pill from '../../../../design-system/Pills';
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
import SatisfactionChart from '../SatifactionChart';
import SatisfactionTableContentSkeleton from '../SatisfactionTableContentSkeleton';
import ScoreDifferenceIndicator from '../ScoreDifferenceIndicator';
const SatisfactionDimensionsTable = ({ dimensions, dimensionsCount, dimensionsHeading, scoreHeading, scoreDifferenceHeading, tooltipLabels, getTooltipTitle, distributionHeading, noAnswerLabel, noQuestionsLabel, onClickRow, slotProps = {}, loading = false, loadingMore = false, differenceIndicatorMeta, }) => {
    const theme = useTheme();
    const hasScoreDifference = useMemo(() => dimensions.some(dimension => dimension.scoreDifference !== null), [dimensions]);
    const renderScoreCell = (row) => {
        if (!row.hasThresholdPassed) {
            return (_jsx(Tooltip, { description: noAnswerLabel, children: _jsx(IconMessage2X, { size: 20, color: theme.palette.new.text.neutral.default }) }));
        }
        else if (!row.hasQuestions) {
            return (_jsx(Tooltip, { description: noQuestionsLabel, children: _jsx(IconInfoCircle, { size: 20, color: theme.palette.new.text.neutral.default }) }));
        }
        else {
            return (_jsx(Title, { title: row.score, variant: "S", fontWeight: "fontWeightRegular" }));
        }
    };
    const columns = useMemo(() => {
        const baseColumns = [
            {
                id: 'name',
                heading: (count) => `${dimensionsHeading} (${count})`,
                width: '50%',
                renderCell: (row) => (_jsx(Title, { title: row.name, description: row.questionsLabel, variant: "S", fontWeight: "fontWeightRegular" })),
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
                    if (row.score !== null &&
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
            width: '50%',
            renderCell: (row) => {
                if (!row.hasThresholdPassed) {
                    return (_jsx(Pill, { label: noAnswerLabel, type: "disabled", size: "medium", hasIcon: false }));
                }
                if (!row.hasQuestions) {
                    return (_jsx(Pill, { label: noQuestionsLabel, type: "disabled", size: "medium", hasIcon: false }));
                }
                if ([row.promoters, row.detractors, row.neutrals].every(value => value === 0)) {
                    return '--';
                }
                return (_jsx(SatisfactionChart, { promoters: row.promoters, detractors: row.detractors, neutrals: row.neutrals, getTooltipTitle: (key, value) => getTooltipTitle
                        ? getTooltipTitle(key, value)
                        : `${tooltipLabels[key]}: ${value}` }));
            },
        });
        baseColumns.push({
            id: 'actions',
            heading: '',
            width: 24,
            renderCell: () => _jsx(IconChevronRight, { size: 16 }),
        });
        return baseColumns;
    }, [
        dimensionsHeading,
        scoreHeading,
        scoreDifferenceHeading,
        hasScoreDifference,
        distributionHeading,
        noAnswerLabel,
        noQuestionsLabel,
        tooltipLabels,
        getTooltipTitle,
        onClickRow,
        differenceIndicatorMeta,
        theme,
    ]);
    const handleRowClick = (question) => () => {
        const selection = window.getSelection();
        if (selection && selection.type === 'Range' && selection.toString()) {
            return;
        }
        if (onClickRow) {
            onClickRow(question);
        }
    };
    return (_jsx(TableContainer, { ...slotProps.tableContainer, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { headerRow: true, children: columns.map(column => {
                            const heading = typeof column.heading === 'function'
                                ? column.heading(dimensionsCount)
                                : column.heading;
                            return (_jsx(TableCell, { sx: { width: column.width }, children: _jsx(Title, { title: heading, variant: "S" }) }, column.id));
                        }) }) }), _jsxs(TableBody, { children: [loading && (_jsx(SatisfactionTableContentSkeleton, { rows: 5, hasDifferenceColumn: hasScoreDifference })), !loading &&
                            dimensions.map(dimension => (_jsx(TableRow, { onClick: handleRowClick(dimension), hover: true, children: columns.map(column => (_jsx(TableCell, { sx: { width: column.width }, children: column.renderCell(dimension) }, column.id))) }, dimension.id))), loadingMore && (_jsx(SatisfactionTableContentSkeleton, { rows: 3, hasDifferenceColumn: hasScoreDifference }))] })] }) }));
};
export default SatisfactionDimensionsTable;
