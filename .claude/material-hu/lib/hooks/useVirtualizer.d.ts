import { type MutableRefObject } from 'react';
import { type PartialKeys, type VirtualizerOptions } from '@tanstack/react-virtual';
type Props<TData = unknown> = {
    /** Array of items to virtualize */
    registers: TData[];
    /** Virtualizer configuration options */
    virtualizerOptions: PartialKeys<VirtualizerOptions<HTMLElement, Element>, 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'>;
    /** Ref to the scroll container element */
    scrollElementRef: MutableRefObject<HTMLElement | null>;
    /** Enable window-based scrolling instead of container scrolling */
    withWindowScroll?: boolean;
    /** ID of the window scroll element (only used if withWindowScroll is true) */
    windowScrollElementId?: string;
    /** Whether there are more pages to fetch (only needed if fetchNextPage is provided) */
    hasNextPage?: boolean;
    /** Whether currently fetching the next page (only needed if fetchNextPage is provided) */
    isFetchingNextPage?: boolean;
    /** Function to fetch the next page (enables infinite scroll) */
    fetchNextPage?: () => void;
};
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
declare const useVirtualizer: ({ registers, virtualizerOptions, scrollElementRef, withWindowScroll, windowScrollElementId, hasNextPage, isFetchingNextPage, fetchNextPage, }: Props) => {
    virtualRows: import("@tanstack/virtual-core").VirtualItem[];
    rowVirtualizer: import("@tanstack/virtual-core").Virtualizer<HTMLElement, Element>;
};
export default useVirtualizer;
