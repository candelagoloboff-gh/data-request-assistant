import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, useTheme } from '@mui/material';
import PropertySkeleton from './skeleton';
const Property = ({ Icon, title, description, visible = true, variant = 'XS', loading = false, }) => {
    const { typography } = useTheme();
    if (!visible)
        return null;
    if (loading)
        return _jsx(PropertySkeleton, { variant: variant });
    const globalVariant = `global${variant}`;
    const font = typography[globalVariant];
    const isDescriptionString = !!description && typeof description === 'string';
    const isDescriptionNode = !!description && typeof description !== 'string';
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0.5,
        }, children: [!!Icon && (_jsx(Icon, { size: font.fontSize, color: font.color })), !!title && (_jsx(Typography, { component: "span", variant: globalVariant, fontWeight: "fontWeightSemiBold", children: `${title}${description ? ':' : ''}` })), isDescriptionString && (_jsx(Typography, { component: "span", variant: globalVariant, children: description })), isDescriptionNode && description] }));
};
export default Property;
