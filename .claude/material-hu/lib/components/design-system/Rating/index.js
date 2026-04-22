import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Rating as MuiRating, Stack, useTheme } from '@mui/material';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import CustomHelperText from '../Inputs/Base/CustomHelperText';
import { getNumericValue, getValidMax, getValidSize } from './utils';
const Rating = forwardRef(({ max, size, value, error, helperText, ...props }, ref) => {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const validMax = getValidMax(max);
    const validSize = getValidSize(size);
    const numericValue = getNumericValue(value);
    return (_jsxs(Stack, { children: [_jsx(MuiRating, { ref: ref, sx: {
                    color: newPalette?.action.button.background.primary.default,
                    gap: 0.5,
                }, emptyIcon: _jsx(IconStar, { size: validSize, color: newPalette?.action.button.background.primary.disabled }), icon: _jsx(IconStarFilled, { size: validSize }), max: validMax, value: numericValue || 0, ...props, precision: 1 }), _jsx(CustomHelperText, { error: error, helperText: helperText, value: value?.toString() || '' })] }));
});
Rating.displayName = 'Rating';
export default Rating;
