import { type MutableRefObject } from 'react';
/** Checks whether a text element is visually clamped (truncated by CSS). */
export declare const isTextClamped: (textRef: MutableRefObject<any>) => boolean;
/** Splits text by newline characters and returns an array of React elements with `<br />` separators. */
export declare const mapNewLines: (text: string) => (import("react/jsx-runtime").JSX.Element | import("react/jsx-runtime").JSX.Element[])[];
