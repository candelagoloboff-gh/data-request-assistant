import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from '../../Tooltip';
import useOverflowed from '../../../../hooks/useOverflowed';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import { adjustedCopetin, tooltipSize } from '../constants';
const CopetinText = ({ id, copetin = '', copetinTooltip = '', variant = 'M', withEllipsis, overflow = 'hidden', sx = {}, }) => {
    const theme = useTheme();
    const { ref: copetinRef, overflowed: copetinOverflowed } = useOverflowed();
    if (!copetin)
        return null;
    return (_jsxs(Stack, { sx: sx, children: [_jsx(Tooltip, { disableTooltip: overflow !== 'tooltip' || !copetinOverflowed, title: copetin, children: _jsx(Typography, { id: id, ref: copetinRef, variant: adjustedCopetin[variant], sx: {
                        color: theme.palette.new.text.neutral.lighter,
                        gap: 1,
                        ...(withEllipsis && {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }),
                    }, children: copetin }) }), copetinTooltip && (_jsx(Tooltip, { direction: "top", description: copetinTooltip, children: _jsx(IconInfoCircle, { size: tooltipSize[variant].copetin, style: {
                        minWidth: tooltipSize[variant].copetin,
                        color: theme.palette.new.text.neutral.lighter,
                    } }) }))] }));
};
export default CopetinText;
