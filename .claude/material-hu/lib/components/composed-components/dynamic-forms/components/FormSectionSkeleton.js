import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../../design-system/Skeleton';
import Stack from '@mui/material/Stack';
const FormSectionSkeleton = () => {
    return (_jsxs(Stack, { sx: { gap: 4, opacity: 0.5 }, children: [_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Skeleton, { height: 32, width: "200px" }), _jsx(Skeleton, { height: 24, width: "400px" })] }), _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Skeleton, { height: 100, width: "100%" }), _jsx(Skeleton, { height: 100, width: "100%" }), _jsx(Skeleton, { height: 100, width: "100%" }), _jsx(Skeleton, { height: 100, width: "100%" })] })] }));
};
export default FormSectionSkeleton;
