import { type RefObject } from 'react';
export default function useScrollZoom(contentRef: RefObject<HTMLDivElement>): {
    zoom: number;
    setZoom: import("react").Dispatch<import("react").SetStateAction<number>>;
};
