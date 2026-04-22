import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import { times } from 'lodash';
import Skeleton from '../../../design-system/Skeleton';
import { adjustedCopetin, adjustedDescription, } from '../../../design-system/Title/constants';
const TextInformationSkeleton = ({ variant = 'M', sx = {}, }) => {
    return (_jsxs(Stack, { sx: {
            gap: 0.5,
            '& .MuiSkeleton-root': {
                display: 'flex',
            },
            ...sx,
        }, children: [_jsx(Skeleton, { children: _jsx(Typography, { variant: adjustedCopetin[variant], children: 'Copetin' }) }), _jsx(Skeleton, { children: _jsx(Typography, { variant: `global${variant}`, children: 'Un título de prueba' }) }), times(3, index => (_jsx(Skeleton, { width: "80%", children: _jsx(Typography, { variant: adjustedDescription[variant], sx: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }, children: 'Loading...' }) }, index)))] }));
};
export default TextInformationSkeleton;
