import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Title from '../../../design-system/Title';
import { colors, Stack } from '@mui/material';
import EmptyStateIcon from '../EmptyStateIcon';
import { EmptyStateVariant } from './types';
const variantStyles = {
    [EmptyStateVariant.DEFAULT]: {},
    [EmptyStateVariant.DASHED]: {
        p: 3,
        border: `1px dashed ${colors.grey[500]}`,
        borderRadius: 2,
    },
};
const EmptyState = ({ title, description, footer, hideIcon, variant = EmptyStateVariant.DEFAULT, slotProps = {}, }) => {
    const { root, title: titleProps } = slotProps;
    return (_jsxs(Stack, { ...root, sx: {
            alignItems: 'center',
            gap: 1,
            backgroundColor: colors.common.white,
            ...variantStyles[variant],
            ...root?.sx,
        }, children: [!hideIcon && _jsx(EmptyStateIcon, {}), _jsx(Title, { ...titleProps, description: description, title: title, variant: "L", centered: true }), footer] }));
};
export default EmptyState;
