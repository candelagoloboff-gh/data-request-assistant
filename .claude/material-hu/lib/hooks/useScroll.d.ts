/** Attaches a scroll event listener to a DOM element and invokes the callback on each scroll event. */
export declare const useScroll: (element: HTMLElement | null, callback: (element: HTMLElement | null, event: Event) => void) => void;
export default useScroll;
