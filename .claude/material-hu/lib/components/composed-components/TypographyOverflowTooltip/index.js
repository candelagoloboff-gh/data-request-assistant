import { jsx as _jsx } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from 'react';
import Tooltip from '../../design-system/Tooltip';
import Typography from '@mui/material/Typography/Typography';
const TOOLTIP_DELAY_DEFAULT = 400;
const TypographyOverflowTooltip = ({ children, tooltipProps, typographyProps, }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef(null);
    useLayoutEffect(() => {
        const checkTruncation = () => {
            if (textRef.current) {
                const element = textRef.current;
                setIsTruncated(element.scrollWidth > element.clientWidth);
            }
        };
        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        return () => {
            window.removeEventListener('resize', checkTruncation);
        };
    }, [children]);
    const { sx, ...rest } = typographyProps ?? {};
    return (_jsx(Tooltip, { disableTooltip: !isTruncated, direction: "top", delay: TOOLTIP_DELAY_DEFAULT, ...tooltipProps, children: _jsx(Typography, { ref: textRef, sx: {
                display: 'block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: 1,
                ...sx,
            }, ...rest, children: children }) }));
};
export default TypographyOverflowTooltip;
