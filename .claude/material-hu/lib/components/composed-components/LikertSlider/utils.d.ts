import { type LikertSliderProps } from './types';
export declare const isSingleValue: (value: LikertSliderProps["value"]) => value is number;
export declare const isRangeValue: (value: LikertSliderProps["value"]) => value is [number, number];
export declare const formatPropsValue: (value: LikertSliderProps["value"]) => LikertSliderProps["value"];
export declare const formatInternalValue: (value: NonNullable<LikertSliderProps["value"]>) => NonNullable<LikertSliderProps["value"]>;
export declare const buildGetPercentage: (min: number, max: number) => (value: number) => number;
export declare const isBarredValue: (value: LikertSliderProps["value"], min: number, max: number) => boolean;
