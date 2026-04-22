import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Skeleton from '../../../../Skeleton';
import PaginationItem from '../PaginationItem';
export const PaginationNav = ({ loading = false, disabled = false, items, page, onChange, }) => (_jsxs(_Fragment, { children: [loading &&
            [1, 2, 3, 4].map(item => (_jsx(Skeleton, { width: 24, height: 24 }, item))), !loading && (_jsx(Stack, { component: "nav", children: _jsx(Stack, { component: "ul", sx: {
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                    m: 0,
                    p: 0,
                }, children: items?.map((item, index) => (_jsx(PaginationItem, { ...item, selected: item.page === page, disabled: disabled || item.disabled, items: items, onChange: onChange }, index))) }) }))] }));
export default PaginationNav;
