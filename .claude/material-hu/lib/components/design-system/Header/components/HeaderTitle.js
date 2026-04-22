import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../Skeleton';
import TitleText from '../../Title/components/TitleText';
const HeaderTitle = ({ title, loading, slotProps }) => {
    if (loading)
        return (_jsx(Skeleton, { width: 150, height: 40 }));
    return (_jsx(TitleText, { variant: "L", title: title, ...slotProps }));
};
export default HeaderTitle;
