import { getFullName } from '../../../../utils/user';
import { isValid, parse } from 'date-fns';
import { isNil } from 'lodash';
const parseDateAnswer = (answer, pattern) => {
    if (!answer || typeof answer !== 'string')
        return null;
    const datePattern = pattern || 'yyyy-MM-dd';
    const parsedDate = parse(answer, datePattern, new Date());
    return isValid(parsedDate) ? parsedDate : null;
};
const parseTimeAnswer = (answer, pattern) => {
    if (!answer || typeof answer !== 'string')
        return null;
    const timePattern = pattern || 'HH:mm';
    const parsedTime = parse(answer, timePattern, new Date());
    return isValid(parsedTime) ? parsedTime : null;
};
/**
 * Function to get the parsed answer for a component
 * @param component - The component to get the parsed answer for
 * @returns The parsed answer
 */
export const getParseAnswer = (component) => {
    switch (component.type) {
        case 'AUTOCOMPLETE':
            return parseAutocompleteAnswer(component);
        case 'DATE':
            return parseDateAnswer(component.answer, component.validations?.pattern);
        case 'TIME':
            return parseTimeAnswer(component.answer, component.validations?.pattern);
        case 'INFO':
        case 'TEXT':
            return component.answer ?? '';
        case 'DROPDOWN':
            return !isNil(component.answer)
                ? {
                    value: Number(component.content.choices?.[component.answer]),
                    label: component.content.choices?.[component.answer],
                    id: component.answer,
                }
                : null;
        case 'FILE':
        case 'CHECKBOX':
            return component.answer ?? [];
        default:
            return component.answer ?? null;
    }
};
/**
 * INTERNAL FUNCTION
 * Used to parse the autocomplete answer
 */
const parseAutocompleteAnswer = (component) => {
    if (!component.answer)
        return '-';
    switch (component.answer.fieldType) {
        case 'STRING_LIST':
        case 'NUMBER_LIST':
        case 'MULTIPLE_OPTION':
            return component.answer.fieldValue.join(', ');
        case 'NUMBER':
            return component.answer.fieldValue.toString();
        case 'DIRECT_BOSS':
            return (component.answer.fieldValue.fullName ||
                getFullName(component.answer.fieldValue));
        case 'DEPARTMENT':
            return component.answer.fieldValue.name;
        default:
            return component.answer.fieldValue ?? '-';
    }
};
