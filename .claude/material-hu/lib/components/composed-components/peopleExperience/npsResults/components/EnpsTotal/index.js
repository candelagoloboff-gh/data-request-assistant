import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../../../design-system/CardContainer';
import Title from '../../../../../design-system/Title';
import { cardContentClasses } from '@mui/material';
import SemiDonutChart from './components/SemiDonutChart';
const EnpsTotal = ({ title, description, value, nullValueTooltip, footer, slotProps, }) => {
    return (_jsxs(CardContainer, { ...slotProps?.root, sx: {
            width: 'fit-content',
            ...slotProps?.root?.sx,
            [`& .${cardContentClasses.root}`]: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                gap: 2.5,
                width: 360,
            },
        }, children: [_jsx(Title, { title: title, description: description, variant: "L", sx: {} }), _jsx(SemiDonutChart, { value: value, nullValueTooltip: nullValueTooltip, slotProps: {
                    root: {
                        sx: { alignSelf: 'center' },
                    },
                } }), footer] }));
};
export default EnpsTotal;
