import { jsx as _jsx } from "react/jsx-runtime";
import Tooltip from '../../../../design-system/Tooltip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
const SatisfactionChart = ({ promoters, detractors, neutrals, size = 'small', getTooltipTitle = (key, value) => `${key}: ${value}`, }) => {
    const total = promoters + detractors + neutrals;
    const theme = useTheme();
    const chartMeta = [
        {
            key: 'detractors',
            value: detractors,
            color: theme.palette.newBase?.red[600],
        },
        {
            key: 'neutrals',
            value: neutrals,
            color: theme.palette.newBase?.yellow[600],
        },
        {
            key: 'promoters',
            value: promoters,
            color: theme.palette.newBase?.green[700],
        },
    ];
    return (_jsx(Stack, { sx: { flexDirection: 'row', width: '100%', gap: 0.5 }, children: chartMeta.map(({ key, value, color }) => {
            if (value === 0) {
                return null;
            }
            return (_jsx(Tooltip, { description: getTooltipTitle(key, value), followCursor: true, children: _jsx(Stack, { sx: {
                        width: `calc(100% * ${value} / ${total})`,
                        height: size === 'small' ? 8 : 16,
                        backgroundColor: color,
                        borderRadius: 1,
                    } }) }, key));
        }) }));
};
export default SatisfactionChart;
