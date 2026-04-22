import { type Position } from '../types/array';
/** Returns a single-element array if the condition is true, or an empty array otherwise. Useful for conditional spreading. */
export declare const insertIf: <T>(condition: boolean, element: T) => T[];
/** Returns a new Set with the element toggled (added if absent, removed if present). */
export declare function addOrRemoveSet<T>(set: Set<T>, element: T): Set<T>;
/** Sorts an array of items by their `position` property in ascending order. */
export declare const sortPositioned: <T extends Partial<Position>>(array: T[]) => T[];
