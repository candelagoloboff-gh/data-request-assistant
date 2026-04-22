import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Skeleton as MuiSkeleton, useTheme } from '@mui/material';
import { getBorderRadius } from './constants';
const Skeleton = ({ isLoading = true, variant = 'rounded', // Safer default than the MUI default 'text' which is not very useful beyond single lines of text (see variant definition at https://mui.com/material-ui/react-skeleton/#variants)
sx, ...skeletonProps }) => {
    const theme = useTheme();
    return isLoading ? (_jsx(MuiSkeleton, { animation: 'wave', sx: {
            bgcolor: theme.palette.new.background.elements.grey,
            borderRadius: getBorderRadius(variant, theme),
            ...sx,
        }, variant: variant, ...skeletonProps })) : (_jsx(_Fragment, { children: skeletonProps?.children }));
};
export default Skeleton;
