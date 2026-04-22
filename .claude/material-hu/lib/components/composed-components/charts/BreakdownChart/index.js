import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Title from '../../../design-system/Title';
import { Divider, Stack, useTheme } from '@mui/material';
import { getMonochromeColors } from '../../../../utils/colors';
const BreakdownChart = ({ values, colors, labels }) => {
    const { palette } = useTheme();
    const finalColors = colors ||
        getMonochromeColors(palette.new.action.button.background.primary.hover, values.length);
    return (_jsx(Stack, { className: "BreakdownChart-root", sx: {
            gap: 1,
            width: '100%',
        }, children: values.map((value, index) => (_jsxs(Stack, { sx: {
                gap: 1,
                '&:last-child > .MuiDivider-root': {
                    display: 'none',
                },
            }, children: [_jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1,
                    }, children: [_jsx(Stack, { sx: {
                                width: '12px',
                                height: '12px',
                                borderRadius: '100%',
                                backgroundColor: finalColors[index],
                            } }), _jsx(Title, { variant: "S", fontWeight: "fontWeightRegular", overflow: "tooltip", withEllipsis: true, sx: { flex: 1, minWidth: 0 }, title: labels[index] }), _jsx(Title, { variant: "M", title: value.toString() })] }), _jsx(Divider, {})] }, `${labels[index]}-${value}`))) }));
};
export default BreakdownChart;
