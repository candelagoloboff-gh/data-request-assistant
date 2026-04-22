import { useMemo, useState } from 'react';
import { defaultDimensions, useDimensions, } from './useDimensions';
/** Computes PDF page dimensions that fit within a wrapper element, supporting fitWidth/fitHeight modes. */
export const usePdfDimensions = (element, options = {}) => {
    const { fitWidth = false, fitHeight = false } = options;
    const [pageDimensions, setPageDimensions] = useState(defaultDimensions);
    const { dimensions: wrapperDimensions } = useDimensions(element);
    const handleLoadPage = (page) => {
        setPageDimensions({
            width: page.width,
            height: page.height,
        });
    };
    const dimensions = useMemo(() => {
        if (fitWidth || fitHeight) {
            return {
                width: fitWidth ? wrapperDimensions.width : null,
                height: fitHeight ? wrapperDimensions.height : null,
            };
        }
        const widthRatio = pageDimensions.width / wrapperDimensions.width;
        const heightRatio = pageDimensions.height / wrapperDimensions.height;
        const fitHorizontal = widthRatio >= heightRatio;
        return {
            width: fitHorizontal ? wrapperDimensions.width : null,
            height: fitHorizontal ? wrapperDimensions.height : null,
        };
    }, [pageDimensions, wrapperDimensions]);
    return {
        dimensions,
        handleLoadPage,
    };
};
export default usePdfDimensions;
