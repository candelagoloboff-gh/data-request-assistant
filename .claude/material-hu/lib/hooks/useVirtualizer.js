import { useEffect } from 'react';
import { useVirtualizer as useTanstackVirtualizer, } from '@tanstack/react-virtual';
/**
 * Hook to manage virtual scrolling using `@tanstack/react-virtual` with support for:
 * - Window-based or container-based scrolling
 * - Opt-in infinite scroll behaviour
 * - Dynamic row heights
 *
 * This hook wraps \@tanstack/react-virtual's `useVirtualizer` hook and provides
 * additional functionality for infinite scrolling and flexible scroll container handling.
 *
 * @template TData - The type of items in the registers array
 *
 * @param {TData[]} registers - Array of items to virtualize
 * @param {PartialKeys<VirtualizerOptions<HTMLElement, Element>, 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'>} virtualizerOptions - Virtualizer configuration options. Note that 'observeElementRect', 'observeElementOffset', and 'scrollToFn' are handled internally and should not be provided.
 * @param {MutableRefObject<HTMLElement | null>} scrollElementRef - Ref to the scroll container element. When `withWindowScroll` is true, this will be automatically set to the element with the specified `windowScrollElementId`.
 * @param {boolean} [withWindowScroll=false] - Enable window-based scrolling instead of container scrolling (or parent container scrolling). When true, the hook will automatically find and use the element with `windowScrollElementId` as the scroll container.
 * @param {string} [windowScrollElementId='dashboard-layout-content'] - ID of the window scroll element (only used if `withWindowScroll` is true)
 * @param {boolean} [hasNextPage=false] - Whether there are more pages to fetch (only needed if `fetchNextPage` is provided)
 * @param {boolean} [isFetchingNextPage=false] - Whether currently fetching the next page (only needed if `fetchNextPage` is provided)
 * @param {() => void} [fetchNextPage] - Function to fetch the next page (enables infinite scroll). When provided, the hook will automatically call this function when the last visible item reaches the end of the current data.
 *
 * @returns {VirtualItem[]} virtualRows - Array of virtual items that should be rendered, calculated by \@tanstack/react-virtual
 * @returns {Virtualizer<HTMLElement, Element>} rowVirtualizer - The underlying virtualizer instance from \@tanstack/react-virtual, providing access to methods like `scrollToIndex`, `measureElement`, etc.
 */
const useVirtualizer = ({ registers, virtualizerOptions, scrollElementRef, withWindowScroll = false, windowScrollElementId = 'dashboard-layout-content', hasNextPage = false, isFetchingNextPage = false, fetchNextPage, }) => {
    useEffect(() => {
        if (!withWindowScroll)
            return;
        // Find the parent scroll container
        const windowScrollElement = document.getElementById(windowScrollElementId);
        if (windowScrollElement) {
            scrollElementRef.current = windowScrollElement;
        }
        /*
         "withWindowScroll" and "windowScrollElementId" shouldn't change (why would we want to change the scrolling behavior?)
         so we don't need to add them as dependencies
        */
    }, []);
    const rowVirtualizer = useTanstackVirtualizer({
        ...virtualizerOptions,
        getScrollElement: () => scrollElementRef.current,
        count: virtualizerOptions.count ?? registers.length,
        overscan: virtualizerOptions.overscan ?? 5,
    });
    const virtualRows = rowVirtualizer.getVirtualItems();
    // For infinite loading, only trigger fetch next page when the last item of the table is visible
    useEffect(() => {
        if (!fetchNextPage)
            return;
        const lastItem = virtualRows[virtualRows.length - 1];
        // Prevent fetching next page if there none, is already fetching, or there's no items in the table
        if (!hasNextPage || !lastItem || isFetchingNextPage)
            return;
        if (lastItem.index >= registers.length - 1) {
            fetchNextPage();
        }
    }, [
        hasNextPage,
        isFetchingNextPage,
        virtualRows,
        fetchNextPage,
        registers.length,
    ]);
    return { virtualRows, rowVirtualizer };
};
export default useVirtualizer;
