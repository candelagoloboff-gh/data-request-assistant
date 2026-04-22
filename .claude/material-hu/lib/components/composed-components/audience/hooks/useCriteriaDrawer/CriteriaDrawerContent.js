import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
const CriteriaDrawerContent = ({ description, sx, slotProps = {}, children, }) => {
    const { root: rootProps, description: descriptionProps } = slotProps;
    return (_jsxs(Stack, { ...rootProps, sx: {
            gap: 2,
            height: '100%',
            ...sx,
            ...rootProps?.sx,
        }, children: [_jsx(Typography, { variant: "globalS", ...descriptionProps, children: description }), children] }));
};
export default CriteriaDrawerContent;
