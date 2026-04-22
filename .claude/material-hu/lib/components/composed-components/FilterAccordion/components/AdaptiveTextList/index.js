import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { TEXT_WIDTH } from './constants';
import { getDisplayText } from './utils';
const AdaptiveTextList = ({ items = [], actualCount, getAndText, getMoreText, }) => {
    const [visibleCount, setVisibleCount] = useState(items.length);
    const containerRef = useRef(null);
    const measureRef = useRef(null);
    const effectiveTotal = actualCount ?? items.length;
    useLayoutEffect(() => {
        const calculateVisibleItems = () => {
            if (!containerRef.current || !measureRef.current || items.length === 0) {
                return;
            }
            const containerWidth = containerRef.current.offsetWidth;
            const measureText = (text) => {
                measureRef.current.textContent = text;
                return measureRef.current.offsetWidth;
            };
            let count = items.length;
            while (count > 0) {
                const sampleText = getDisplayText(getAndText, getMoreText, items.slice(0, count), effectiveTotal);
                if (measureText(sampleText) <= containerWidth) {
                    break;
                }
                count--;
            }
            setVisibleCount(count);
        };
        calculateVisibleItems();
        const resizeObserver = new ResizeObserver(calculateVisibleItems);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, [items]);
    const visibleItems = items.slice(0, visibleCount);
    const displayText = getDisplayText(getAndText, getMoreText, visibleItems, effectiveTotal);
    return (_jsxs(Box, { ref: containerRef, sx: {
            width: TEXT_WIDTH,
            display: 'inline-block',
            position: 'relative',
        }, component: "span", children: [displayText, _jsx(Box, { ref: measureRef, component: "span", sx: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    visibility: 'hidden',
                    whiteSpace: 'nowrap',
                    minWidth: TEXT_WIDTH,
                }, "aria-hidden": "true" })] }));
};
export default AdaptiveTextList;
