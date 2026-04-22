import { jsx as _jsx } from "react/jsx-runtime";
import Dropdown from '../../Dropdown';
import Skeleton from '../../Skeleton';
import { Button } from '@mui/material';
import { MAX_MAIN_ACTIONS } from '../constants';
const HeaderMainActions = ({ actions = [], loading, }) => {
    if (loading) {
        return (_jsx(Skeleton, { width: 105, height: 40 }));
    }
    if (actions.length === 0)
        return null;
    return actions
        .slice(0, MAX_MAIN_ACTIONS)
        .map(({ key, dropdown, ...buttonProps }) => dropdown ? (_jsx(Dropdown, { ...buttonProps }, key)) : (_jsx(Button, { variant: "outlined", ...buttonProps }, key)));
};
export default HeaderMainActions;
