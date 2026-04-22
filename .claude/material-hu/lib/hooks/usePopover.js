import { useEffect, useId, useMemo, useState } from 'react';
import { debounce } from 'lodash';
/** Manages popover anchor state with a debounced open and immediate close. */
const usePopover = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const debouncedSetAnchorEl = useMemo(() => debounce(setAnchorEl, 300), []);
    const id = useId();
    useEffect(() => () => {
        debouncedSetAnchorEl.cancel();
    }, []);
    const openPopover = (event) => {
        debouncedSetAnchorEl(event.currentTarget);
    };
    const closePopover = () => {
        debouncedSetAnchorEl.cancel();
        setAnchorEl(null);
    };
    const isOpen = Boolean(anchorEl);
    return {
        isOpen,
        anchorEl,
        openPopover,
        closePopover,
        id,
    };
};
export default usePopover;
