import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Tooltip from '../../Tooltip';
import useOverflowed from '../../../../hooks/useOverflowed';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import { adjustedDescription, tooltipSize } from '../constants';
const DescriptionText = ({ id, description = '', descriptionTooltip = '', variant = 'M', withEllipsis, overflow = 'hidden', date = '', sx = {}, }) => {
    const theme = useTheme();
    const { ref: descriptionRef, overflowed: descriptionOverflowed } = useOverflowed();
    if (!description && !date)
        return null;
    return (_jsxs(Stack, { sx: sx, children: [date && (_jsxs(Typography, { variant: adjustedDescription[variant], sx: { color: theme.palette.new.text.neutral.lighter }, children: [date, " ", _jsx("span", { style: { color: 'inherit' }, children: "\u2022" })] })), description && (_jsxs(_Fragment, { children: [_jsx(Tooltip, { disableTooltip: overflow !== 'tooltip' || !descriptionOverflowed, description: description, children: _jsx(Typography, { id: id, ref: descriptionRef, variant: adjustedDescription[variant], sx: {
                                color: theme.palette.new.text.neutral.lighter,
                                ...(withEllipsis && {
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                    overflow: 'hidden',
                                }),
                            }, children: description }) }), descriptionTooltip && (_jsx(Tooltip, { direction: "bottom", description: descriptionTooltip, children: _jsx(IconInfoCircle, { size: tooltipSize[variant].description, style: {
                                minWidth: tooltipSize[variant].description,
                                color: theme.palette.new.text.neutral.lighter,
                            } }) }))] }))] }));
};
export default DescriptionText;
