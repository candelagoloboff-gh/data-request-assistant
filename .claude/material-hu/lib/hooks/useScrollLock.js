import { useEffect } from 'react';
/** Locks or unlocks scroll on a DOM element identified by ID. */
export const useScrollLock = (isDisabled, scrollLockElementId, isLocked) => {
    useEffect(() => {
        if (isDisabled)
            return;
        const scrollElement = document.getElementById(scrollLockElementId);
        if (!scrollElement)
            return;
        if (isLocked) {
            scrollElement.style.overflow = 'hidden';
        }
        else {
            scrollElement.style.overflow = 'auto';
        }
        return () => {
            scrollElement.style.overflow = 'auto';
        };
    }, [isLocked, isDisabled, scrollLockElementId]);
};
export default useScrollLock;
