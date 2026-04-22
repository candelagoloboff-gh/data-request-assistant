import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../../design-system/CardContainer';
import Skeleton from '../../../../design-system/Skeleton';
import Stack from '@mui/material/Stack';
const SatisfactionStatsHeaderSkeleton = ({ slotProps = {}, }) => {
    return (_jsx(CardContainer, { padding: 24, fullWidth: true, children: _jsxs(Stack, { ...slotProps.root, sx: { gap: 2, width: '100%', ...slotProps.root?.sx }, children: [_jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 1 }, children: _jsx(Skeleton, { width: "40%", height: 28 }) }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 4 }, children: [_jsx(Skeleton, { width: 60, height: 72, sx: { flexShrink: 0 } }), _jsxs(Stack, { sx: { gap: 1, width: '100%' }, children: [_jsx(Skeleton, { width: "25%", height: 20 }), _jsx(Skeleton, { width: "100%", height: 16 }), _jsx(Skeleton, { width: "40%", height: 14 })] })] })] }) }));
};
export default SatisfactionStatsHeaderSkeleton;
