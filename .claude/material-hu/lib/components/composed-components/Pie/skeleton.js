import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import { Stack } from '@mui/material';
const PieSkeleton = ({ sx, copetin, title, description, legend = 'none', }) => {
    const showTitle = copetin || title || description;
    const getChartContainerDirection = () => {
        if (legend === 'right')
            return 'row-reverse';
        if (legend === 'left')
            return 'row';
        if (legend === 'top')
            return 'column';
        if (legend === 'bottom')
            return 'column-reverse';
        return undefined;
    };
    const getChartContainerGap = () => {
        if (legend === 'top' || legend === 'bottom')
            return 1;
        if (legend === 'left' || legend === 'right')
            return 3;
        return undefined;
    };
    const getLegendDirection = () => {
        if (legend === 'top' || legend === 'bottom')
            return 'row';
        if (legend === 'left' || legend === 'right')
            return 'column';
        return undefined;
    };
    const getChartSize = () => {
        if (legend === 'left' || legend === 'right')
            return 144;
        return 175;
    };
    return (_jsxs(Stack, { className: "PieSkeleton-root", sx: {
            alignItems: 'center',
            gap: 2,
            ...sx,
        }, children: [_jsxs(Stack, { sx: {
                    flexDirection: getChartContainerDirection(),
                    gap: getChartContainerGap(),
                    alignItems: 'center',
                    jusitfyContent: 'center',
                }, children: [legend !== 'none' && (_jsx(Stack, { sx: {
                            flexDirection: getLegendDirection(),
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 0.5,
                        }, children: Array.from({ length: 3 }, (_, index) => (_jsx(Skeleton, { height: 20, width: 70 }, index))) })), _jsx(Skeleton, { variant: "circular", width: getChartSize(), height: getChartSize() })] }), showTitle && (_jsxs(Stack, { sx: { gap: 0.5, alignItems: 'center' }, children: [copetin && (_jsx(Skeleton, { height: 16, width: 100 })), title && (_jsx(Skeleton, { height: 24, width: 200 })), description && (_jsx(Skeleton, { height: 20, width: 100 }))] }))] }));
};
export default PieSkeleton;
