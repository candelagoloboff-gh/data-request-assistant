import { type FieldErrors } from 'react-hook-form';
import { type FileCardType } from '../../../design-system/FileCard/types';
import { type FileAsset } from '../../../../types/attachments';
import { type ZodTypeAny } from 'zod';
import { type DynamicFormComponent, type DynamicFormComponentValue, type DynamicFormValues, type ErrorTextsDefinition } from '../types';
export declare const getFieldName: (section: string, field: string) => string;
export declare const hasRequiredFieldError: (errors: FieldErrors<DynamicFormValues>) => boolean;
export declare const scrollToFormTop: () => void;
export declare const getInitialFiles: (initialFiles: FileAsset[]) => FileCardType[];
export declare const buildFormSchemaAndValues: ({ sectionId, components, errorTexts, }: {
    sectionId: string;
    components: DynamicFormComponent[];
    errorTexts: ErrorTextsDefinition;
}) => {
    schema: Record<string, ZodTypeAny<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>;
    values: DynamicFormValues;
};
export declare const isFileAsset: (value: DynamicFormComponentValue) => value is FileAsset;
export declare const transformIntegerInput: (value: string) => string;
