/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { SAMPLE_ANSWER_RESPONSE, SAMPLE_DYNAMIC_FORM_PROGRESSION_RESPONSE, SAMPLE_DYNAMIC_FORM_RESPONSE, } from '../data/dynamic-form';
const dynamicFormService = {
    initDynamicForm: async () => {
        return SAMPLE_DYNAMIC_FORM_RESPONSE;
    },
    getDynamicFormProgress: async () => {
        return SAMPLE_DYNAMIC_FORM_RESPONSE;
    },
    updateDynamicFormProgress: async () => {
        return SAMPLE_DYNAMIC_FORM_PROGRESSION_RESPONSE;
    },
    getDynamicFormAnswer: async () => {
        return {
            ...SAMPLE_ANSWER_RESPONSE,
            nextSection: SAMPLE_ANSWER_RESPONSE.sections[0],
        };
    },
};
export default dynamicFormService;
