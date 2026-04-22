import { jsx as _jsx } from "react/jsx-runtime";
import CardContainer from '../../../../design-system/CardContainer';
import Skeleton from '@mui/material/Skeleton';
const FilterAccordionSkeleton = () => {
    return (_jsx(CardContainer, { color: "grey", sx: { borderRadius: 2, height: 56 }, fullWidth: true, children: _jsx(Skeleton, { sx: { width: '100%', height: 22 } }) }));
};
export default FilterAccordionSkeleton;
