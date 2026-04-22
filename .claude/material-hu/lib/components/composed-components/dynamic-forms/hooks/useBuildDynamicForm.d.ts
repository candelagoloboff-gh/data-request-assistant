import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { type ZodType, z } from 'zod';
import { type DynamicFormComponent, type DynamicFormValues, type ErrorTextsDefinition } from '../types';
export declare const buildFormSchemaAndValues: ({ sectionId, components, errorTexts, }: {
    sectionId: string;
    components: DynamicFormComponent[];
    errorTexts: ErrorTextsDefinition;
}) => {
    schema: Record<string, ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
    values: DynamicFormValues;
};
export declare const customResolver: (schema: ZodType) => (values: FieldValues) => Promise<{
    values: FieldValues;
    errors: FieldErrors;
}>;
/**
 * Function to build the form schema based on the next section
 */
declare const useBuildDynamicForm: ({ sectionId, components, errorTexts, }: {
    sectionId: string;
    components: DynamicFormComponent[];
    errorTexts: ErrorTextsDefinition;
}) => import("react-hook-form").UseFormReturn<FieldValues, any, undefined>;
export default useBuildDynamicForm;
