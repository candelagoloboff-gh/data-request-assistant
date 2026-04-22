import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../../design-system/CardContainer';
import StateCard from '../../../../design-system/StateCard';
import Table from '../../../../design-system/Table';
import TableBody from '../../../../design-system/Table/components/TableBody';
import TableCell from '../../../../design-system/Table/components/TableCell';
import TableContainer from '../../../../design-system/Table/components/TableContainer';
import TableRow from '../../../../design-system/Table/components/TableRow';
import Title from '../../../../design-system/Title';
import { Stack } from '@mui/material';
import { times } from 'lodash';
import TableRowSkeleton from './components/TableRowSkeleton';
const SatisfactionDrawerCommentList = ({ headerTitle = 'Comments', tableHeaderDecorator, comments = [], loading = false, loadingMore = false, emptyStateTitle = 'No comments available', emptyStateDescription = 'There are no comments to display for the selected criteria', }) => {
    return (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(CardContainer, { color: "grey", fullWidth: true, children: _jsx(Title, { title: headerTitle, variant: "L" }) }), tableHeaderDecorator, !loading && comments.length === 0 && (_jsx(StateCard, { title: emptyStateTitle, description: emptyStateDescription, variant: "primary" })), (loading || comments.length > 0) && (_jsx(TableContainer, { children: _jsx(Table, { children: _jsxs(TableBody, { children: [loading && times(5, index => _jsx(TableRowSkeleton, {}, index)), comments.map(comment => (_jsx(TableRow, { children: _jsx(TableCell, { children: _jsx(Title, { copetin: comment.copetin, title: comment.comment, variant: "S", fontWeight: "fontWeightRegular" }) }) }, comment.id))), loadingMore &&
                                times(3, index => _jsx(TableRowSkeleton, {}, index))] }) }) }))] }));
};
export default SatisfactionDrawerCommentList;
