import { type DynamicFormComponent } from '../types';
/**
 * Function to get the parsed answer for a component
 * @param component - The component to get the parsed answer for
 * @returns The parsed answer
 */
export declare const getParseAnswer: (component: DynamicFormComponent) => string | number | Date | number[] | import("../../../../types/attachments").FileAsset | import("../../../../types/attachments").FileAsset[] | {
    value: number;
    label: string;
    id: number;
} | null;
