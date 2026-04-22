/** Tracks whether a DOM element's content overflows its bounds. */
export declare const useOverflowed: () => {
    overflowed: boolean;
    ref: (node: HTMLElement | null) => void;
};
export default useOverflowed;
