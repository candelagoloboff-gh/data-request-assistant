import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import Tooltip from '../../Tooltip';
import useOverflowed from '../../../../hooks/useOverflowed';
import { Stack, Typography, useTheme } from '@mui/material';
const TitleText = ({ id, title = '', variant = 'M', withEllipsis, overflow = 'hidden', disabled = false, fontWeight = 'fontWeightSemiBold', sx = {}, component = 'span', onOverflowChange, onClick, }) => {
    const theme = useTheme();
    const { ref: titleRef, overflowed: titleOverflowed } = useOverflowed();
    useEffect(() => {
        onOverflowChange?.(titleOverflowed);
    }, [titleOverflowed, onOverflowChange]);
    if (typeof title !== 'number' && !title)
        return null;
    return (_jsx(Tooltip, { disableTooltip: overflow !== 'tooltip' || !titleOverflowed, description: title, children: _jsx(Stack, { children: _jsx(Typography, { id: id, ref: titleRef, variant: `global${variant}`, sx: {
                    color: disabled
                        ? theme.palette.new.text.neutral.disabled
                        : theme.palette.new.text.neutral.default,
                    ...(withEllipsis && {
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                        overflow: 'hidden',
                    }),
                    ...sx,
                }, fontWeight: fontWeight, component: component, onClick: onClick, children: title }) }) }));
};
export default TitleText;
