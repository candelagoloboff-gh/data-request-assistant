import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
const ImageSkeleton = ({ sx }) => {
    return (_jsx(Skeleton, { sx: {
            height: 'auto',
            ...sx,
        } }));
};
export default ImageSkeleton;
