import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListItemSkeleton from '../../../../../design-system/List/components/ListItemSkeleton';
import Stack from '@mui/material/Stack';
import { appearFromBottom } from '../../../../../../utils/animations';
const baseStyles = {
    animation: `${appearFromBottom} 125ms ease-in-out backwards`,
    width: '100%',
    ml: -2,
};
const SkeletonList = ({ sx }) => {
    return (_jsxs(Stack, { sx: { ...sx }, children: [_jsx(ListItemSkeleton, { sx: baseStyles }), _jsx(ListItemSkeleton, { sx: baseStyles }), _jsx(ListItemSkeleton, { sx: baseStyles }), _jsx(ListItemSkeleton, { sx: baseStyles }), _jsx(ListItemSkeleton, { sx: baseStyles })] }));
};
export default SkeletonList;
