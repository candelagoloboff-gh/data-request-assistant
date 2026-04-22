import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton as MuiIconButton, Stack, } from '@mui/material';
import { omit } from 'lodash';
const getActions = (action, action2) => {
    if (!action && !action2)
        return null;
    const IconAction1 = action?.Icon;
    const IconAction2 = action2?.Icon;
    const handleClick = (callback) => (event) => {
        event.stopPropagation();
        callback && callback(event);
    };
    const commonProps = {
        size: 'medium',
        sx: { svg: { width: 'inherit', height: 'inherit' } },
    };
    return (_jsxs(Stack, { sx: {
            gap: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }, children: [action && (_jsx(MuiIconButton, { ...commonProps, ...omit(action, 'Icon'), onClick: handleClick(action.onClick), children: IconAction1 && _jsx(IconAction1, { size: 24 }) })), action2 && (_jsx(MuiIconButton, { ...commonProps, ...omit(action2, 'Icon'), onClick: handleClick(action2.onClick), children: IconAction2 && _jsx(IconAction2, { size: 24 }) }))] }));
};
export default getActions;
