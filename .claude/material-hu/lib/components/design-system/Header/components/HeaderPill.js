import { jsx as _jsx } from "react/jsx-runtime";
import Pills from '../../Pills';
import Skeleton from '../../Skeleton';
const HeaderPill = ({ label, loading, pillProps }) => {
    if (loading)
        return (_jsx(Skeleton, { width: 78, height: 40 }));
    if (!label)
        return null;
    return (_jsx(Pills, { hasIcon: false, size: "small", label: label, ...pillProps }));
};
export default HeaderPill;
