import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useState } from 'react';
import TableFilterDecorator from '../../../../peopleExperience/TableFilterDecorator';
import CardContainer from '../../../../../design-system/CardContainer';
import { Menu } from '../../../../../design-system/Menu';
import { MenuItem } from '../../../../../design-system/Menu/components/MenuItem';
import Table from '../../../../../design-system/Table';
import TableBody from '../../../../../design-system/Table/components/TableBody';
import TableCell from '../../../../../design-system/Table/components/TableCell';
import TableContainer from '../../../../../design-system/Table/components/TableContainer';
import TableHead from '../../../../../design-system/Table/components/TableHead';
import TableLoader from '../../../../../design-system/Table/components/TableLoader';
import TableRow from '../../../../../design-system/Table/components/TableRow';
import Title from '../../../../../design-system/Title';
import { Button, cardContentClasses, Fade, Stack, Typography, useTheme, } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { times } from 'lodash';
import CommentListRowSkeleton from './components/CommentListRowSkeleton';
import { defaultColumnHeadings, defaultFilterLabels, filterOptions, INITIAL_SKELETON_ROWS, LOADING_MORE_SKELETON_ROWS, } from './constants';
import { FilterOption, } from './types';
import { getFilterColors } from './utils';
const CommentsTableList = ({ title = 'Comments', columnHeadings = defaultColumnHeadings, filterLabels = defaultFilterLabels, selectedFilter = FilterOption.ALL, onFilterChange, data = [], loading = false, loadingMore = false, isPreviousData = false, loadedCount = 0, totalCount = 0, onLoadMore, onScrollToTop, slotProps, emptyStateSlot, }) => {
    const theme = useTheme();
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleMenuItemClick = (option) => {
        setOpen(false);
        onFilterChange?.(option);
    };
    const filterColors = getFilterColors(selectedFilter, theme);
    const columns = useMemo(() => [
        {
            id: 'score',
            heading: columnHeadings.score,
            width: '10%',
            renderCell: (row) => row.score,
        },
        {
            id: 'comment',
            heading: columnHeadings.comment,
            width: '90%',
            renderCell: (row) => (_jsx(Title, { title: row.comment, fontWeight: "fontWeightRegular", variant: "S" })),
        },
    ], [columnHeadings]);
    return (_jsxs(CardContainer, { sx: {
            [`& .${cardContentClasses.root}`]: {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                flexShrink: 0,
            },
        }, fullWidth: true, children: [_jsx(CardContainer, { color: "grey", fullWidth: true, children: _jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                    }, children: [_jsx(Title, { title: title, variant: "L" }), _jsx(Button, { ref: anchorRef, onClick: handleOpen, variant: "secondary", endIcon: _jsx(IconChevronDown, { size: 20 }), children: filterLabels[selectedFilter].label }), _jsx(Menu, { open: open, anchorEl: anchorRef.current, onClose: handleClose, position: "right", children: filterOptions.map(option => (_jsx(MenuItem, { selected: option === selectedFilter, onClick: () => handleMenuItemClick(option), children: _jsx(Typography, { variant: "inherit", noWrap: true, children: filterLabels[option].label }) }, option))) })] }) }), _jsx(Fade, { in: !loading && data.length > 0 && !!filterColors, unmountOnExit: true, timeout: { enter: 225, exit: 0 }, children: _jsx("div", { children: filterColors && (_jsx(TableFilterDecorator, { backgroundColor: filterColors.backgroundColor, textColor: filterColors.textColor, title: filterLabels[selectedFilter].label, description: filterLabels[selectedFilter].description, icon: filterColors.icon })) }) }), !loading && data.length === 0 && emptyStateSlot && emptyStateSlot, (loading || data.length > 0) && (_jsxs(Stack, { ...slotProps?.tableWrapper, sx: {
                    overflowY: 'auto',
                    gap: 2,
                    borderRadius: '16px',
                    ...slotProps?.tableWrapper?.sx,
                }, children: [_jsx(TableContainer, { sx: {
                            opacity: isPreviousData ? 0.5 : 1,
                            overflow: 'hidden',
                        }, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { headerRow: true, children: columns.map(column => (_jsx(TableCell, { headerCell: true, sx: { width: column.width }, children: column.heading }, column.id))) }) }), _jsxs(TableBody, { children: [loading &&
                                            times(INITIAL_SKELETON_ROWS, index => (_jsx(CommentListRowSkeleton, {}, index))), !loading &&
                                            data.map((row, index) => (_jsx(TableRow, { children: columns.map(column => (_jsx(TableCell, { children: column.renderCell(row) }, column.id))) }, index))), !loading &&
                                            loadingMore &&
                                            times(LOADING_MORE_SKELETON_ROWS, index => (_jsx(CommentListRowSkeleton, {}, `loading-more-${index}`)))] })] }) }), onLoadMore && onScrollToTop && (_jsx(TableLoader, { loadedCount: loadedCount, totalCount: totalCount, onLoadMore: onLoadMore, onScrollToTop: onScrollToTop }))] }))] }));
};
export default CommentsTableList;
