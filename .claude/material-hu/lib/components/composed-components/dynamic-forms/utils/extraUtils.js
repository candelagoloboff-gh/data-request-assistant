import { getAttachmentFromFileAsset } from '../../../../utils/attachments';
import i18next from 'i18next';
import { getComponentSchema } from '../utils/getComponentSchema';
import { getParseAnswer } from '../utils/getParseAnswer';
export const getFieldName = (section, field) => `${section}-${field}`;
export const hasRequiredFieldError = (errors) => Object.values(errors).some(error => error?.message ===
    i18next.t('service_management.required_field', {
        ns: 'material_hu_only',
    }));
export const scrollToFormTop = () => {
    const formSection = document.getElementById('form-section');
    if (!formSection)
        return;
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
export const getInitialFiles = (initialFiles) => {
    if (!initialFiles?.length)
        return [];
    const formattedInitialValues = initialFiles?.map(file => ({
        status: 'success',
        attachment: {
            ...getAttachmentFromFileAsset(file),
            fileAssetReferenceId: file.id,
        },
    }));
    return formattedInitialValues;
};
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
export const isFileAsset = (value) => {
    if (!value || typeof value !== 'object')
        return false;
    const obj = value;
    return (typeof obj.id === 'number' &&
        typeof obj.url === 'string' &&
        typeof obj.key === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.contentType === 'string');
};
export const transformIntegerInput = (value) => {
    if (!value)
        return value;
    let cleaned = value.replace(/[^0-9.,]/g, '');
    const firstSeparatorMatch = cleaned.match(/[.,]/);
    if (firstSeparatorMatch) {
        const separatorIndex = cleaned.indexOf(firstSeparatorMatch[0]);
        const beforeSeparator = cleaned.substring(0, separatorIndex);
        const afterSeparator = cleaned
            .substring(separatorIndex + 1)
            .replace(/[.,]/g, '');
        cleaned = beforeSeparator + firstSeparatorMatch[0] + afterSeparator;
    }
    return cleaned;
};
