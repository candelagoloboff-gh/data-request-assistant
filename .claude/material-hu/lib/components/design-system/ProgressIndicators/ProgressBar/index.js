import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinearProgress, linearProgressClasses, Stack, Typography, } from '@mui/material';
import Title from '../../Title';
const ProgressBar = ({ title = '', description = '', helper = '', variant = 'indeterminate', current = 0, total = 100, hasPercentage = false, withEllipsis = false, progressHeight = 4, decimalPrecision = 0, sx, }) => {
    const progress = (100 * current) / total;
    return (_jsxs(Stack, { sx: { gap: 0.5, ...sx }, children: [(title || description) && (_jsx(Title, { variant: "S", title: title, description: description, withEllipsis: withEllipsis, overflow: "tooltip" })), _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: [_jsx(LinearProgress, { sx: {
                            backgroundColor: theme => theme.palette.new.border.neutral.divider,
                            [`& .${linearProgressClasses.bar}`]: {
                                backgroundColor: theme => theme.palette.newBase?.brand[500],
                            },
                            width: '100%',
                            borderRadius: 1,
                            my: 1,
                            height: progressHeight,
                        }, variant: variant, value: Math.min(progress, 100) }), hasPercentage && (_jsx(Typography, { variant: "globalXS", sx: {
                            color: theme => theme.palette.new.text.neutral.lighter,
                            ml: 0.5,
                        }, children: `${Number(progress).toFixed(decimalPrecision)}%` }))] }), helper && typeof helper === 'string' && (_jsx(Typography, { variant: "globalXXS", sx: { color: theme => theme.palette.new.text.neutral.lighter }, children: helper })), helper && typeof helper !== 'string' && helper] }));
};
export default ProgressBar;
