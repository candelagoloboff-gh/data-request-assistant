import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Stack } from '@mui/material';
import { Page } from '../../../../../config/react-pdf';
import { getScale, getThreshold } from '../../utils';
export const PdfPage = ({ page, zoom, variant, onUpdatePageNumber = () => null, onLoadSuccess = () => null, dimensions, }) => {
    const threshHold = useMemo(() => getThreshold(zoom || 0), [zoom]);
    const skipInView = (!dimensions.height || !dimensions.width) && variant === 'floating';
    const { ref, inView } = useInView({
        threshold: threshHold,
        skip: skipInView,
    });
    useEffect(() => {
        if (inView) {
            onUpdatePageNumber(page);
        }
    }, [inView, page, onUpdatePageNumber]);
    return (_jsx(Stack, { sx: { mb: 2 }, children: _jsx(Page, { inputRef: ref, scale: getScale(zoom), pageNumber: page, onLoadSuccess: onLoadSuccess, width: dimensions.width || undefined, height: dimensions.height || undefined, loading: "" }) }, `page_${page}`));
};
export default PdfPage;
