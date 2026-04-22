import { useEffect } from 'react';
/** Attaches a scroll event listener to a DOM element and invokes the callback on each scroll event. */
export const useScroll = (element, callback) => {
    useEffect(() => {
        if (!element)
            return;
        const handleScroll = (event) => callback(element, event);
        element.addEventListener('scroll', handleScroll);
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [element]);
};
export default useScroll;
