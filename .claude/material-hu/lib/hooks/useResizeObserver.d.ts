/** Observes size changes on a DOM element via ResizeObserver. */
export declare const useResizeObserver: (element: HTMLElement | null, callback: (entries: ResizeObserverEntry[]) => void) => void;
export default useResizeObserver;
