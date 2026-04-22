export type Dimensions = {
    width: number;
    height: number;
};
export declare const defaultDimensions: {
    width: number;
    height: number;
};
/**
 * Custom React hook to observe and return the dimensions (width and height) of a DOM element.
 *
 * @param element
 *   The target DOM element to observe. If omitted, returns a 'ref' callback to attach to a React element.
 *
 * @returns
 *   - ref: Use as a React ref callback if element is not provided.
 *   - dimensions: Current width and height of the observed element.
 */
export declare const useDimensions: (element?: HTMLElement | null) => {
    ref: ((node: HTMLElement | null) => void) | undefined;
    dimensions: Dimensions;
};
export default useDimensions;
