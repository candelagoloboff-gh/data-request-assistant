import { type Key } from 'react';
export declare const normalizeText: (text: string) => string;
export declare const isEqualText: (textA: string, textB: string) => boolean;
export declare const isCreatableOption: (value: Key) => value is string;
export declare const getCreatableValue: (value: string) => string;
export declare const getCreatableInputText: (value: string) => string;
