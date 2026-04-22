import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { TablePagination } from '@mui/material';
const PaginationController = props => {
    const { control, total, setPage, setLimit, limitOptions, labelRowsPerPage = '', } = props;
    return (_jsx(Controller, { control: control, name: "pagination", render: ({ field }) => (_jsx(TablePagination, { ...field, component: "div", count: total, onPageChange: (event, page) => setPage(page), onRowsPerPageChange: event => setLimit(parseInt(event.target.value, 10)), labelRowsPerPage: labelRowsPerPage, page: field.value.page, rowsPerPage: field.value.limit, rowsPerPageOptions: limitOptions })) }));
};
export default PaginationController;
