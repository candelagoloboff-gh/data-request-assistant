import { useForm, } from 'react-hook-form';
import { z } from 'zod';
import { getFieldName } from '../utils/extraUtils';
import { getComponentSchema } from '../utils/getComponentSchema';
import { getParseAnswer } from '../utils/getParseAnswer';
export const buildFormSchemaAndValues = ({ sectionId, components, errorTexts, }) => {
    // Initialize accumulators
    const formSchema = {};
    const values = {};
    // Process each component
    for (const component of components) {
        // Get the name of the component
        const name = getFieldName(sectionId, component.nameId);
        // Get the component schema
        const componentSchema = getComponentSchema(component, errorTexts);
        // Assign the validation schema for the component
        if (componentSchema) {
            formSchema[name] = componentSchema;
        }
        // Assign the value for the component
        values[name] = getParseAnswer(component);
    }
    return { schema: formSchema, values };
};
// Utility to convert ZodError to Hook Form-compatible FieldErrors
const zodToHookFormErrors = (zodError) => {
    const errors = {};
    for (const issue of zodError.issues) {
        const path = issue.path.join('.') || 'root';
        errors[path] = {
            type: issue.code,
            message: issue.message,
        };
    }
    return errors;
};
// Custom resolver for useForm()
export const customResolver = (schema) => {
    return async (values) => {
        try {
            const result = await schema.safeParseAsync(values);
            if (result.success) {
                return {
                    values: result.data,
                    errors: {},
                };
            }
            else {
                return {
                    values: {},
                    errors: zodToHookFormErrors(result.error),
                };
            }
        }
        catch (error) {
            console.error('Resolver error: ', error);
            return {
                values: {},
                errors: {
                    root: {
                        type: 'unknown',
                        message: 'An unknown error occurred during validation',
                    },
                },
            };
        }
    };
};
/**
 * Function to build the form schema based on the next section
 */
const useBuildDynamicForm = ({ sectionId, components, errorTexts, }) => {
    const { schema, values } = buildFormSchemaAndValues({
        sectionId,
        components,
        errorTexts,
    });
    // Initialize the form
    const form = useForm({
        resolver: customResolver(z.object(schema || {})),
        values,
        defaultValues: values,
    });
    return form;
};
export default useBuildDynamicForm;
