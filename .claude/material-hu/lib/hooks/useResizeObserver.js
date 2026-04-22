import { useEffect } from 'react';
/** Observes size changes on a DOM element via ResizeObserver. */
export const useResizeObserver = (element, callback) => {
    useEffect(() => {
        if (!element)
            return;
        const resizeObserver = new ResizeObserver(callback);
        resizeObserver.observe(element);
        return () => {
            resizeObserver.unobserve(element);
        };
    }, [element]);
};
export default useResizeObserver;
