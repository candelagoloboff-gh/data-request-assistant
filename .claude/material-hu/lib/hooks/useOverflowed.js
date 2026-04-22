import { useState } from 'react';
import { isOverflowed } from '../utils/elements';
import { useResizeObserver } from './useResizeObserver';
/** Tracks whether a DOM element's content overflows its bounds. */
export const useOverflowed = () => {
    const [overflowed, setOverflowed] = useState(false);
    const [element, setElement] = useState(null);
    const ref = (node) => {
        setElement(node);
    };
    useResizeObserver(element, entries => {
        for (const entry of entries) {
            const entryElement = entry.target;
            setOverflowed(isOverflowed(entryElement));
        }
    });
    return {
        overflowed,
        ref,
    };
};
export default useOverflowed;
