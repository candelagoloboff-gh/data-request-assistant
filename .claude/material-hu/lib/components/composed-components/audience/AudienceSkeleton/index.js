import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../design-system/CardContainer';
import Skeleton from '../../../design-system/Skeleton';
import { Stack } from '@mui/material';
const CARDS_COUNT = 3;
const AudienceSkeleton = ({ sx }) => (_jsxs(Stack, { sx: { gap: 3, ...sx }, children: [_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Skeleton, { sx: { width: '30%', height: 28 } }), _jsx(Skeleton, { sx: { width: '50%', height: 20 } })] }), Array.from({ length: CARDS_COUNT }).map((_, index) => (_jsxs(CardContainer, { fullWidth: true, sx: {
                '& .MuiCardContent-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                },
            }, children: [_jsx(Skeleton, { sx: { width: '25%', height: 24 } }), _jsx(Skeleton, { sx: { width: '40%', height: 20 } })] }, index)))] }));
export default AudienceSkeleton;
