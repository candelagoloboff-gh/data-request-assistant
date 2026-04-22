import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { useHuPagination } from '../../../hooks/useHuPagination';
import Checkbox from '../Checkbox/Checkbox';
import Skeleton from '../Skeleton';
import TableBody from './components/TableBody';
import TableCell from './components/TableCell';
import TableContainer from './components/TableContainer';
import TableHead from './components/TableHead';
import TableLoader from './components/TableLoader';
import TableRow from './components/TableRow';
import TableToolbar from './components/TableToolbar';
import Table from '.';
const rows = [
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
    },
    {
        name: 'Cheesecake',
        calories: 320,
        fat: 22.0,
        carbs: 25,
        protein: 5.0,
    },
    {
        name: 'Chocolate brownie',
        calories: 432,
        fat: 20.0,
        carbs: 52,
        protein: 5.0,
    },
    {
        name: 'Fruit tart',
        calories: 298,
        fat: 12.0,
        carbs: 41,
        protein: 2.8,
    },
    {
        name: 'Carrot cake',
        calories: 508,
        fat: 13.0,
        carbs: 61,
        protein: 1.8,
    },
];
const meta = {
    component: Table,
    title: 'Design System/Table',
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            source: {
                type: 'dynamic',
            },
        },
    },
};
export default meta;
export const Default = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
    },
};
export const DefaultWithOnClick = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { onClick: () => alert(row.name + ' clicked'), children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
    },
};
export const SelectionTable = {
    render: () => {
        const [selectedRows, setSelectedRows] = useState([]);
        const handleSelection = (selectedIdx) => {
            setSelectedRows(prev => {
                if (prev.includes(selectedIdx)) {
                    return prev.filter(idx => idx !== selectedIdx);
                }
                return [...prev, selectedIdx];
            });
        };
        const handleSelectAll = () => {
            if (selectedRows.length === rows.length) {
                setSelectedRows([]);
            }
            else {
                setSelectedRows(rows.map((_, idx) => idx));
            }
        };
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, selectionCell: true, children: _jsx(Checkbox, { sx: { zIndex: 100 }, checked: selectedRows.length === rows.length, onClick: handleSelectAll }) }), _jsx(TableCell, { headerCell: true, tooltipTitle: "Desert column", children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map((row, index) => (_jsxs(TableRow, { selected: selectedRows.includes(index), children: [_jsx(TableCell, { selectionCell: true, children: _jsx(Checkbox, { sx: { zIndex: 100 }, disabled: false, checked: selectedRows.includes(index), onClick: () => handleSelection(index) }) }), _jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
    },
};
export const CollapsableTable = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, collapsableCell: true }), _jsx(TableCell, { headerCell: true, tooltipTitle: "Desert column", children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { collapsable: true, renderDetail: detailRowProps => (_jsxs(TableRow, { ...detailRowProps, children: [_jsx(TableCell, {}), _jsx(TableCell, { children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] })), children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
    },
};
export const Loading = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: _jsx(Skeleton, { isLoading: true, width: 98, height: 33, variant: "rounded" }) }), _jsx(TableCell, { component: "th", scope: "row", children: _jsx(Skeleton, { isLoading: true, width: 98, height: 33, variant: "rounded" }) }), _jsx(TableCell, { component: "th", scope: "row", children: _jsx(Skeleton, { isLoading: true, width: 98, height: 33, variant: "rounded" }) }), _jsx(TableCell, { component: "th", scope: "row", children: _jsx(Skeleton, { isLoading: true, width: 98, height: 33, variant: "rounded" }) }), _jsx(TableCell, { component: "th", scope: "row", children: _jsx(Skeleton, { isLoading: true, width: 98, height: 33, variant: "rounded" }) })] }, row.name))) })] }) }));
    },
};
export const ActionsMenu = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" }), _jsx(TableCell, { "aria-label": 'actions' })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein }), _jsx(TableCell, { variant: "shortField", align: "right", sx: {
                                        whiteSpace: 'nowrap',
                                    } })] }, row.name))) })] }) }));
    },
};
export const Toolbar = {
    render: () => {
        const [selectedRows, setSelectedRows] = useState([]);
        const handleSelection = (selectedIdx) => {
            setSelectedRows(prev => {
                if (prev.includes(selectedIdx)) {
                    return prev.filter(idx => idx !== selectedIdx);
                }
                return [...prev, selectedIdx];
            });
        };
        const handleSelectAll = () => {
            if (selectedRows.length === rows.length) {
                setSelectedRows([]);
            }
            else {
                setSelectedRows(rows.map((_, idx) => idx));
            }
        };
        return (_jsxs(TableContainer, { children: [_jsx(TableToolbar, { children: _jsx(Typography, { variant: "globalS", children: `Selected rows: ${selectedRows.length}` }) }), _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, selectionCell: true, children: _jsx(Checkbox, { checked: selectedRows.length === rows.length, onClick: e => {
                                                e.stopPropagation();
                                                handleSelectAll();
                                            } }) }), _jsx(TableCell, { headerCell: true, tooltipTitle: "Desert column", children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map((row, index) => (_jsxs(TableRow, { selected: selectedRows.includes(index), children: [_jsx(TableCell, { selectionCell: true, children: _jsx(Checkbox, { sx: { zIndex: 100 }, disabled: false, checked: selectedRows.includes(index), onClick: () => handleSelection(index) }) }), _jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] })] }));
    },
};
export const Tooltips = {
    render: () => {
        return (_jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 650 }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, tooltipTitle: "Dessert column", children: "Dessert" }), _jsx(TableCell, { headerCell: true, tooltipTitle: "Calories column", children: "Calories" }), _jsx(TableCell, { headerCell: true, tooltipTitle: 'Fat column', children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, tooltipTitle: 'Carbohydrates column', children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, tooltipTitle: 'Protein column', children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: rows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { tooltipTitle: "Content", component: "th", align: "left", children: _jsx(Content, {}) }), _jsx(TableCell, { tooltipTitle: 'Amount of calories per serving', align: "center", children: row.calories }), _jsx(TableCell, { align: "center", tooltipTitle: 'Amount of fat per serving', children: row.fat }), _jsx(TableCell, { align: "center", tooltipTitle: 'Amount of carbohydrates per serving', children: row.carbs }), _jsx(TableCell, { align: "center", tooltipTitle: 'Amount of protein per serving', children: row.protein })] }, row.name))) })] }) }));
    },
};
const Content = () => (_jsx(Stack, { sx: {
        width: 1,
        height: '33px',
        border: '1px dashed #CAD5FE',
        backgroundColor: '#EFF2FF',
        borderRadius: '8px',
    } }));
export const InfiniteScrolling = {
    render: () => {
        // Initial data set (first page)
        const [desserts, setDesserts] = useState(rows.slice(0, 3));
        const [loading, setLoading] = useState(false);
        const [page, setPage] = useState(1);
        const pageRef = useRef(null);
        const totalItems = rows.length;
        // Simulate a service call to load more data
        const loadMoreData = async () => {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Calculate next items to load
            const startIndex = page * 3;
            const endIndex = Math.min(startIndex + 3, rows.length);
            const hasMoreItems = rows[startIndex] !== undefined;
            if (hasMoreItems) {
                // Add new items
                setDesserts(prev => [...prev, ...rows.slice(startIndex, endIndex)]);
                setPage(page + 1);
            }
            setLoading(false);
        };
        const scrollToTop = () => {
            if (pageRef.current) {
                pageRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        };
        return (_jsxs(Stack, { ref: pageRef, sx: {
                gap: 1,
                maxHeight: '400px',
                padding: 4,
                overflowY: 'auto',
            }, children: [_jsx(TableContainer, { sx: { boxSizing: 'border-box', flex: '1 0 auto' }, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Dessert" }), _jsx(TableCell, { headerCell: true, children: "Calories" }), _jsx(TableCell, { headerCell: true, children: "Fat\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Carbs\u00A0(g)" }), _jsx(TableCell, { headerCell: true, children: "Protein\u00A0(g)" })] }) }), _jsxs(TableBody, { children: [desserts.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))), loading && (_jsx(TableRow, { children: [...Array(5)].map((_, index) => (_jsx(TableCell, { children: _jsx(Skeleton, { isLoading: true, width: "100%", height: 33, variant: "rounded" }) }, index))) }))] })] }) }), _jsx(TableLoader, { loadedCount: desserts.length, totalCount: totalItems, onLoadMore: loadMoreData, onScrollToTop: scrollToTop })] }));
    },
};
export const Sorting = {
    render: () => {
        return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsx(SortingContent, {}) }) }) }));
    },
};
const SortingContent = () => {
    const { HuTableSortingHeader, params } = useHuPagination({
        defaultOrder: 'ASC',
        defaultOrderBy: 'NAME',
    });
    const { order, orderBy } = params;
    const sortedRows = [...rows].sort((a, b) => {
        const getValue = (row, key) => {
            const value = row[key.toLowerCase()];
            return typeof value === 'string' ? value.toLowerCase() : value;
        };
        const aValue = getValue(a, orderBy);
        const bValue = getValue(b, orderBy);
        if (order === 'ASC') {
            if (aValue < bValue)
                return -1;
            if (aValue > bValue)
                return 1;
            return 0;
        }
        else if (order === 'DESC_NULLS_LAST') {
            if (bValue < aValue)
                return -1;
            if (bValue > aValue)
                return 1;
            return 0;
        }
        return 0;
    });
    return (_jsx(TableContainer, { sx: { boxSizing: 'border-box', flex: '1 0 auto' }, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(HuTableSortingHeader, { id: "NAME", children: "Dessert" }), _jsx(HuTableSortingHeader, { id: "CALORIES", children: "Calories" }), _jsx(HuTableSortingHeader, { id: "FAT", children: "Fat\u00A0(g)" }), _jsx(HuTableSortingHeader, { id: "CARBS", children: "Carbs\u00A0(g)" }), _jsx(HuTableSortingHeader, { id: "PROTEIN", children: "Protein\u00A0(g)" })] }) }), _jsx(TableBody, { children: sortedRows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
};
export const SortingWithTooltip = {
    render: () => {
        return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsx(SortingWithTooltipContent, {}) }) }) }));
    },
};
const SortingWithTooltipContent = () => {
    const form = useForm();
    const { HuTableSortingHeader, params } = useHuPagination({
        defaultOrder: 'ASC',
        defaultOrderBy: 'NAME',
    });
    const { order, orderBy } = params;
    const sortedRows = [...rows].sort((a, b) => {
        const getValue = (row, key) => {
            const value = row[key.toLowerCase()];
            return typeof value === 'string' ? value.toLowerCase() : value;
        };
        const aValue = getValue(a, orderBy);
        const bValue = getValue(b, orderBy);
        if (order === 'ASC') {
            if (aValue < bValue)
                return -1;
            if (aValue > bValue)
                return 1;
            return 0;
        }
        else if (order === 'DESC_NULLS_LAST') {
            if (bValue < aValue)
                return -1;
            if (bValue > aValue)
                return 1;
            return 0;
        }
        return 0;
    });
    const getTooltipTitle = (property) => {
        if (orderBy === property) {
            if (order === 'ASC') {
                return 'Sorted by 0 to 100';
            }
            else if (order === 'DESC_NULLS_LAST') {
                return 'Sorted by 100 to 0';
            }
        }
        return 'Sort by';
    };
    return (_jsx(TableContainer, { sx: { boxSizing: 'border-box', flex: '1 0 auto' }, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(FormProvider, { ...form, children: _jsxs(TableRow, { headerRow: true, children: [_jsx(HuTableSortingHeader, { id: "NAME", children: "Dessert" }), _jsx(HuTableSortingHeader, { id: "CALORIES", tooltipTitle: "", children: "Calories" }), _jsx(HuTableSortingHeader, { id: "FAT", tooltipTitle: getTooltipTitle('FAT'), children: "Fat\u00A0(g)" }), _jsx(HuTableSortingHeader, { id: "CARBS", tooltipTitle: "", children: "Carbs\u00A0(g)" }), _jsx(HuTableSortingHeader, { id: "PROTEIN", tooltipTitle: "", children: "Protein\u00A0(g)" })] }) }) }), _jsx(TableBody, { children: sortedRows.map(row => (_jsxs(TableRow, { children: [_jsx(TableCell, { component: "th", scope: "row", children: row.name }), _jsx(TableCell, { children: row.calories }), _jsx(TableCell, { children: row.fat }), _jsx(TableCell, { children: row.carbs }), _jsx(TableCell, { children: row.protein })] }, row.name))) })] }) }));
};
