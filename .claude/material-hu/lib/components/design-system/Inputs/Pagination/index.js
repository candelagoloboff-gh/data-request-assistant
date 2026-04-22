import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper } from '@mui/material';
import usePagination from '@mui/material/usePagination';
import { isNumber } from 'lodash';
import PaginationChanger from './components/PaginationChanger';
import PaginationNav from './components/PaginationNav';
export const Pagination = ({ loading = false, disabled = false, type = 'changer', totalPages, page, onChangePage = () => null, limit, limitOptions, onChangeLimit = () => null, sx = {}, }) => {
    const handleChange = (_, newPage) => {
        if (isNumber(newPage)) {
            onChangePage(newPage);
        }
    };
    const { items } = usePagination({
        count: totalPages,
        disabled,
        page,
        onChange: handleChange,
    });
    return (_jsxs(Paper, { variant: "outlined", sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1.5,
            gap: 3,
            borderColor: theme => theme.palette.new.border.neutral.default,
            ...sx,
        }, children: [_jsx(PaginationNav, { loading: loading, items: items, page: page, onChange: handleChange }), type === 'changer' && (_jsx(PaginationChanger, { limit: limit, limitOptions: limitOptions, onChange: onChangeLimit, loading: loading, disabled: disabled }))] }));
};
export default Pagination;
