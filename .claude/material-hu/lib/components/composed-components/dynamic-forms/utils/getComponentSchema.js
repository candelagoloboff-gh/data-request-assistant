import { format } from 'date-fns';
import { isNil } from 'lodash';
import { z } from 'zod';
import { fileSchema, numberSchema, stringSchema } from './validationSchemas';
const DEFAULT_STAR_RATING_MIN = 1;
const DEFAULT_STAR_RATING_MAX = 5;
const MAX_PATTERN_LENGTH = 256;
/**
 * Function to get the component validationschema
 * @returns The validation schema for the component
 */
export const getComponentSchema = (component, errorTexts) => {
    const emptyFieldError = errorTexts.required;
    const applyRequiredRefine = (schema) => {
        if (component.content.required) {
            return schema.refine((value) => !isNil(value), {
                message: emptyFieldError,
            });
        }
        return schema;
    };
    const numberPreprocess = (val) => {
        if (isNil(val) || val === '')
            return null;
        const num = Number(val);
        return isNaN(num) ? val : num;
    };
    const datePreprocess = (pattern) => (val) => {
        if (isNil(val) || val === '')
            return null;
        if (!pattern)
            return val;
        const date = new Date(val);
        if (isNaN(date.getTime()))
            return null;
        return format(date, pattern);
    };
    const dropDownPreprocess = (val, dropdownComponent) => {
        if (isNil(val) || val === '')
            return null;
        return (dropdownComponent.content.choices?.findIndex(choice => choice === val.label) ?? null);
    };
    let baseSchema;
    switch (component.type) {
        case 'MULTIPLE_CHOICE':
            baseSchema = applyRequiredRefine(numberSchema(errorTexts.required).nullable());
            break;
        case 'STAR_RATING':
            baseSchema = applyRequiredRefine(z.preprocess(numberPreprocess, numberSchema(errorTexts.required)
                .min(component.validations?.minimum ?? DEFAULT_STAR_RATING_MIN)
                .max(component.validations?.maximum ?? DEFAULT_STAR_RATING_MAX)
                .nullable()));
            break;
        case 'CHECKBOX':
            baseSchema = z
                .array(numberSchema(errorTexts.required))
                .min(component.validations?.minItems ??
                (component.content.required ? 1 : 0), emptyFieldError);
            break;
        case 'TEXT':
            baseSchema = stringSchema(errorTexts.required);
            if (component.content.required) {
                baseSchema = baseSchema.min(1, emptyFieldError);
            }
            if (component.validations?.maxLength) {
                baseSchema = baseSchema.max(component.validations.maxLength);
            }
            if (component.validations?.pattern) {
                const pattern = component.validations.pattern;
                if (pattern.length <= MAX_PATTERN_LENGTH) {
                    const re = new RegExp(`^(?:${pattern})$`);
                    baseSchema = baseSchema.regex(re);
                }
            }
            break;
        case 'DROPDOWN':
            baseSchema = applyRequiredRefine(z.preprocess(val => dropDownPreprocess(val, component), numberSchema(errorTexts.required).nullable()));
            break;
        case 'FILE':
            baseSchema = z
                .array(fileSchema(errorTexts.required))
                .min(component.validations?.minItems ??
                (component.content.required ? 1 : 0), emptyFieldError);
            if (component.validations?.maxItems) {
                baseSchema = baseSchema.max(component.validations.maxItems);
            }
            break;
        case 'SIGNATURE':
            baseSchema = applyRequiredRefine(fileSchema(errorTexts.required));
            break;
        case 'FLOAT':
            baseSchema = applyRequiredRefine(z.preprocess(numberPreprocess, numberSchema(errorTexts.required).nullable()));
            break;
        case 'INTEGER':
            baseSchema = applyRequiredRefine(z.preprocess(numberPreprocess, numberSchema(errorTexts.required).int().nullable()));
            break;
        case 'DATE':
            baseSchema = applyRequiredRefine(z.preprocess(datePreprocess(component.validations?.pattern), stringSchema(errorTexts.required).nullable()));
            break;
        case 'TIME':
            baseSchema = applyRequiredRefine(z.preprocess(datePreprocess(component.validations?.pattern || 'HH:mm'), stringSchema(errorTexts.required).nullable()));
            break;
        default:
            if (component.content.required) {
                baseSchema = z
                    .any()
                    .refine(value => Boolean(value) && (!Array.isArray(value) || value.length > 0), { message: emptyFieldError });
            }
            else {
                baseSchema = z.any().optional();
            }
            break;
    }
    return baseSchema;
};
