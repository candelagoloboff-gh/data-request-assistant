import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../Skeleton';
import { IconButton } from '@mui/material';
const HeaderIconButton = ({ Icon, onClick, loading, }) => {
    if (loading) {
        return (_jsx(Skeleton, { width: 40, height: 40 }));
    }
    if (!onClick || !Icon)
        return null;
    return (_jsx(IconButton, { onClick: onClick, children: _jsx(Icon, {}) }));
};
export default HeaderIconButton;
