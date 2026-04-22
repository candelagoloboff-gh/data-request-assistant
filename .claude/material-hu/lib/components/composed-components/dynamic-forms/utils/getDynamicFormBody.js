import { SectionEvent, } from '../types';
import { getFieldName } from './extraUtils';
/**
 * Function to format the answer for a component
 * @returns The formatted answer
 */
const formatAnswer = (component) => {
    if (!component || component.answer == null)
        return null;
    switch (component.type) {
        case 'FILE':
            return component.answer.map(asset => ({
                id: asset.id,
                name: asset.name,
            }));
        case 'AUTOCOMPLETE':
            return null;
        case 'SIGNATURE':
            return {
                id: component.answer.id,
                name: component.answer.name,
            };
        default:
            return component.answer;
    }
};
/**
 * Function to get the dynamic form body
 * @returns The dynamic form body
 */
export const getDynamicFormBody = ({ sectionName, fieldValues, sectionEvent = SectionEvent.Complete, components, fillingTime, }) => {
    const fields = fieldValues ? Object.entries(fieldValues) : [];
    const answers = fields
        .map(([fieldKey, value]) => {
        const component = components.find(c => getFieldName(sectionName, c.nameId) === fieldKey);
        if (!component)
            return { componentNameId: '', answer: null };
        const newComponent = {
            ...component,
            answer: value,
        };
        return {
            componentNameId: component.nameId,
            answer: formatAnswer(newComponent),
        };
    })
        .filter(entry => entry.answer !== null);
    // Get the file asset ids
    const fileAssetIds = answers
        .flatMap(answer => {
        const component = components.find(c => c.nameId === answer.componentNameId);
        if (component?.type === 'FILE') {
            return answer.answer.map(asset => asset.id);
        }
        if (component?.type === 'SIGNATURE') {
            return answer.answer.id;
        }
        return null;
    })
        .filter(id => id !== null && id !== undefined);
    return {
        sectionNameId: sectionName,
        sectionEvent,
        fillingTime,
        fileAssetIds,
        answers,
    };
};
