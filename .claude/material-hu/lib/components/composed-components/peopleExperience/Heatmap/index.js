import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useEffect, useMemo, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../../design-system/Breadcrumbs';
import ButtonGroup from '../../../design-system/ButtonGroup';
import CardContainer from '../../../design-system/CardContainer';
import Table from '../../../design-system/Table';
import TableBody from '../../../design-system/Table/components/TableBody';
import TableCell from '../../../design-system/Table/components/TableCell';
import TableContainer from '../../../design-system/Table/components/TableContainer';
import TableHead from '../../../design-system/Table/components/TableHead';
import TableRow from '../../../design-system/Table/components/TableRow';
import Title from '../../../design-system/Title';
import { Stack, useTheme } from '@mui/material';
import i18next from 'i18next';
import { compact, concat, times } from 'lodash';
import DropdownList from '../DropdownList';
import TableRowSkeleton from '../TableRowSkeleton';
import { DataSource, ScoreType, SegmentType, } from '../types';
import { HeatmapHeaderCell, HeatScoreCell, ScoreTypeLegend, } from './components';
import { filtersReducer, isBossSegment, isTotalColumn } from './utils';
const COLUMNS_LENGTH = 5;
const Heatmap = ({ totalsData, scoresData, loading, SegmentSelect, onFiltersChange, defaultFilters, scoreSelectDisabled = false, restrictToParentId, }) => {
    const { t } = useTranslation('material_hu_only');
    const theme = useTheme();
    const [filters, setFilters] = useReducer(filtersReducer, defaultFilters);
    const [managers, setManagers] = useState([]);
    const breadcrumbHierarchy = totalsData?.hierarchy.filter(column => !isTotalColumn(column));
    const restrictedParentIndex = useMemo(() => breadcrumbHierarchy?.findIndex(column => column.id === restrictToParentId), [breadcrumbHierarchy, restrictToParentId]);
    const { segment, scoreType } = filters;
    const headerBorderColor = theme.palette.new.action.background.neutral.hover;
    const headerBorder = '2px solid';
    useEffect(() => {
        onFiltersChange(filters);
    }, [filters]);
    const handleChangeDataSource = (nextValue) => {
        setFilters({
            dataSource: nextValue,
        });
    };
    const handleChangeScoreType = (nextValue) => {
        setFilters({
            scoreType: nextValue,
        });
    };
    const handleChangeSegment = (nextValue) => {
        setFilters({
            segment: nextValue,
        });
        if (isBossSegment(nextValue.id)) {
            setManagers([]);
            handleChangeParentId(null);
        }
    };
    const handleChangeParentId = (parentId) => {
        setFilters({
            parentId,
        });
    };
    const handleChangeParent = (column) => {
        if (segment.id === SegmentType.DIRECT_BOSS) {
            setManagers(prev => [...prev, column]);
        }
        handleChangeParentId(column.id);
    };
    const renderHeaderCell = ({ column, isInHierarchy = false, }) => {
        const title = isTotalColumn(column)
            ? t('people_experience.total')
            : column.title;
        return (_jsx(HeatmapHeaderCell, { colSpan: 2, sx: {
                borderTop: headerBorder,
                borderColor: isInHierarchy && !isTotalColumn(column)
                    ? 'primary.main'
                    : headerBorderColor,
                backgroundColor: 'inherit',
            }, align: isTotalColumn(column) ? 'center' : 'left', title: title, subtitle: column.subtitle, participantsAmount: isTotalColumn(column) ? null : column.participantsAmount, onClick: column.hasChildren && !isTotalColumn(column)
                ? () => handleChangeParent(column)
                : undefined }, column.id));
    };
    const baseBredcrumbProps = {
        href: undefined,
        component: 'button',
    };
    const isColumnAccessible = (index) => restrictToParentId
        ? !!restrictedParentIndex && index >= restrictedParentIndex
        : true;
    const breadcrumbLinks = compact(concat(isBossSegment(segment.id) && {
        title: segment.name,
        ...baseBredcrumbProps,
        isPresentational: !!restrictToParentId && segment.id === SegmentType.BOSSES,
        onClick: () => {
            handleChangeParentId(null);
            setManagers([]);
        },
    }, segment.id === SegmentType.BOSSES &&
        breadcrumbHierarchy?.map((column, index) => ({
            title: column.title,
            ...baseBredcrumbProps,
            onClick: () => handleChangeParentId(column.id),
            isPresentational: !isColumnAccessible(index),
        })), segment.id === SegmentType.DIRECT_BOSS &&
        managers.map((manager, index) => ({
            title: manager.title,
            ...baseBredcrumbProps,
            onClick: () => {
                handleChangeParentId(manager.id);
                setManagers(prev => prev.slice(0, index + 1));
            },
            isPresentational: false,
        }))));
    return (_jsxs(Stack, { sx: { gap: 3, flex: '1 1 0%', minHeight: 0 }, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    p: 2,
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: theme.shape.borderRadiusM,
                    border: `1px solid ${theme.palette.border?.neutralBorder}`,
                    backgroundColor: theme.palette.common.white,
                }, children: [_jsxs(Stack, { sx: {
                            flex: 1,
                            flexDirection: 'row',
                            gap: 2,
                            alignItems: 'center',
                        }, children: [_jsx(ButtonGroup, { labels: [
                                    t('people_experience.dimensions'),
                                    t('people_experience.questions'),
                                ], onChange: index => {
                                    if (index === 0) {
                                        handleChangeDataSource(DataSource.TOPICS);
                                    }
                                    else {
                                        handleChangeDataSource(DataSource.QUESTIONS);
                                    }
                                }, fixedCheck: true }), _jsx(DropdownList, { options: [
                                    {
                                        id: ScoreType.SCORE,
                                        name: i18next.t('people_experience.score', {
                                            ns: 'material_hu_only',
                                        }),
                                    },
                                    {
                                        id: ScoreType.DIFFERENCE,
                                        name: i18next.t('people_experience.difference', {
                                            ns: 'material_hu_only',
                                        }),
                                    },
                                ], value: scoreType, onChange: handleChangeScoreType, disabled: scoreSelectDisabled })] }), _jsx(ScoreTypeLegend, { scoreTypeId: scoreType.id })] }), _jsx(CardContainer, { fullWidth: true, padding: 0, sx: {
                    flex: '1 1 0%',
                    minHeight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                }, children: _jsxs(Stack, { sx: { flex: '1 1 0%', minHeight: 0, gap: 2, p: 2 }, children: [breadcrumbLinks.length > 1 && (_jsx(Breadcrumbs, { links: breadcrumbLinks })), _jsx(TableContainer, { children: _jsxs(Table, { stickyHeader: !loading, "aria-label": t('people_experience.alt_sticky_table'), sx: { tableLayout: loading ? 'auto' : 'fixed' }, children: [!loading && (_jsxs("colgroup", { children: [_jsx("col", { style: { width: '300px' } }), _jsx("col", {}), _jsx("col", {}), totalsData?.hierarchy
                                                .concat(totalsData?.stats)
                                                ?.map(column => (_jsxs(Fragment, { children: [_jsx("col", { style: { width: '150px' } }), _jsx("col", {})] }, column.id)))] })), _jsxs(TableHead, { children: [loading && (_jsx(TableRowSkeleton, { columnsLength: COLUMNS_LENGTH, headerRow: true })), !loading && (_jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { colSpan: 3, sx: {
                                                            borderTop: headerBorder,
                                                            borderColor: headerBorderColor,
                                                            backgroundColor: 'inherit',
                                                            position: 'sticky',
                                                            left: 0,
                                                            zIndex: 3,
                                                        }, children: _jsx(SegmentSelect, { value: segment, onChange: handleChangeSegment }) }), totalsData?.hierarchy?.map(column => renderHeaderCell({
                                                        column,
                                                        isInHierarchy: true,
                                                    })), totalsData?.stats?.map(column => renderHeaderCell({
                                                        column,
                                                    }))] }))] }), _jsxs(TableBody, { children: [loading &&
                                                times(8, index => (_jsx(TableRowSkeleton, { columnsLength: COLUMNS_LENGTH }, index))), !loading && (_jsxs(_Fragment, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 3, sx: {
                                                                    position: 'sticky',
                                                                    left: 0,
                                                                    background: theme.palette.common.white,
                                                                }, children: _jsx(Title, { title: t('people_experience.survey_total'), fontWeight: "fontWeightRegular", variant: "S" }) }), totalsData?.hierarchy
                                                                .concat(totalsData?.stats)
                                                                .map(stat => (_jsx(HeatScoreCell, { score: stat.result, difference: stat.baseResultDifference, baseScore: stat.baseResult, scoreType: scoreType.id, isTotal: true }, stat.id)))] }), scoresData?.hierarchy.map((hierarchyStat, rowIndex) => (_jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 3, sx: {
                                                                    position: 'sticky',
                                                                    left: 0,
                                                                    backgroundColor: theme.palette.common.white,
                                                                }, children: _jsx(Title, { title: hierarchyStat.title, copetin: hierarchyStat.subtitle, variant: "S", withEllipsis: true, overflow: "tooltip", fontWeight: "fontWeightRegular" }) }), hierarchyStat.stats
                                                                .concat(scoresData?.stats[rowIndex].stats)
                                                                .map((child, columnIndex) => (_jsx(HeatScoreCell, { score: child.result, difference: child.baseResultDifference, baseScore: child.baseResult, scoreType: scoreType.id, isTotal: columnIndex === 0 || isTotalColumn(child) }, child.id ?? child.title)))] }, hierarchyStat.id)))] }))] })] }) })] }) })] }));
};
export default Heatmap;
