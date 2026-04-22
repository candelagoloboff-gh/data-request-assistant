import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import { Typography } from '@mui/material';
const PropertySkeleton = ({ variant }) => {
    const globalVariant = `global${variant}`;
    return (_jsx(Skeleton, { children: _jsx(Typography, { variant: globalVariant, children: 'Loading...' }) }));
};
export default PropertySkeleton;
