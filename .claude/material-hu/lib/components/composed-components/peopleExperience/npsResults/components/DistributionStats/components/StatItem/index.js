import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Title from '../../../../../../../design-system/Title';
import { Stack } from '@mui/material';
import Decorator from '../Decorator';
const StatItem = ({ type, title, value, differenceIndicator, }) => {
    return (_jsxs(Stack, { component: "li", sx: {
            flexDirection: 'row',
            alignItems: 'center',
            py: 2,
        }, children: [_jsx(Decorator, { type: type }), _jsx(Title, { title: title, variant: "S", fontWeight: "fontWeightRegular", sx: { ml: 0.5 } }), _jsx(Title, { title: value, variant: "L", sx: { marginLeft: 'auto' } }), differenceIndicator && (_jsx(Stack, { sx: { ml: 1 }, children: differenceIndicator }))] }));
};
export default StatItem;
