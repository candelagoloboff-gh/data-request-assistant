import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../../../../../../design-system/Skeleton';
import TableCell from '../../../../../../../design-system/Table/components/TableCell';
import TableRow from '../../../../../../../design-system/Table/components/TableRow';
const CommentListRowSkeleton = () => {
    return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx(Skeleton, { isLoading: true, width: 40, height: 24, variant: "rounded" }) }), _jsx(TableCell, { children: _jsx(Skeleton, { isLoading: true, width: "100%", height: 24, variant: "rounded" }) })] }));
};
export default CommentListRowSkeleton;
