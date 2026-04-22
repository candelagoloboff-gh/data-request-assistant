import { useCallback, useEffect, useRef, useState } from 'react';
export const defaultDimensions = { width: 0, height: 0 };
/**
 * Custom React hook to observe and return the dimensions (width and height) of a DOM element.
 *
 * @param element
 *   The target DOM element to observe. If omitted, returns a 'ref' callback to attach to a React element.
 *
 * @returns
 *   - ref: Use as a React ref callback if element is not provided.
 *   - dimensions: Current width and height of the observed element.
 */
export const useDimensions = (element) => {
    const [dimensions, setDimensions] = useState(defaultDimensions);
    const observerRef = useRef(null);
    const observe = useCallback((node) => {
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
        }
        if (!node)
            return;
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const target = entry.target;
                setDimensions({
                    width: target.offsetWidth || 0,
                    height: target.offsetHeight || 0,
                });
            }
        });
        observerRef.current = resizeObserver;
        resizeObserver.observe(node);
    }, []);
    useEffect(() => {
        if (element) {
            observe(element);
        }
        return () => {
            if (element) {
                observerRef.current?.disconnect();
            }
        };
    }, [element, observe]);
    const ref = element !== undefined ? undefined : observe;
    return {
        ref,
        dimensions,
    };
};
export default useDimensions;
