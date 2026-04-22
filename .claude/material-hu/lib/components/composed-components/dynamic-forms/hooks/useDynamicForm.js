import { useState } from 'react';
import { useMutation } from 'react-query';
import { differenceInSeconds } from 'date-fns';
import { SectionEvent, } from '../types';
import { getFieldName } from '../utils/extraUtils';
import { getDynamicFormBody } from '../utils/getDynamicFormBody';
import useBuildDynamicForm, { buildFormSchemaAndValues, } from './useBuildDynamicForm';
export const useDynamicForm = ({ onError, onProgressionSuccess, onProgressionError, initializeFn, getProgressionFn, updateProgressionFn, onCompleteForm, errorTexts, }) => {
    const [formResponse, setFormResponse] = useState(null);
    const [isFrozen, setIsFrozen] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [formTitle, setFormTitle] = useState('');
    const [canShowSuccessScreen, setCanShowSuccessScreen] = useState(false);
    const form = useBuildDynamicForm({
        sectionId: formResponse?.nextSection?.nameId || '',
        components: formResponse?.nextSection?.content.components || [],
        errorTexts,
    });
    // Mutation to INIT the dynamic form
    const initializeMutation = useMutation({
        mutationFn: initializeFn,
        onSuccess: data => {
            if (!data?.form?.title) {
                console.error('No form title was returned from the API – Using empty string');
            }
            setFormResponse(data);
            setFormTitle(data.form?.title || '');
        },
        onError: error => {
            onError?.(error);
        },
    });
    const getProgressionMutation = useMutation({
        mutationFn: getProgressionFn,
        onSuccess: data => {
            setFormResponse(data);
            setFormTitle(data?.form?.title || '');
        },
        onError: error => {
            onError?.(error);
        },
    });
    const updateProgressionMutation = useMutation({
        mutationFn: updateProgressionFn,
        onSuccess: newFormResponse => {
            if (newFormResponse.nextSection) {
                setFormResponse(newFormResponse);
                onProgressionSuccess?.();
                const { values } = buildFormSchemaAndValues({
                    sectionId: newFormResponse.nextSection.nameId,
                    components: newFormResponse.nextSection.content.components || [],
                    errorTexts,
                });
                form.reset(values);
            }
            else {
                // If next section is null, we check if the form is finished
                if (newFormResponse.currentSection !== 'SUCCESS') {
                    onProgressionError?.();
                    return;
                }
                setFormResponse(newFormResponse);
                setIsFrozen(true);
                setCanShowSuccessScreen(true);
                onCompleteForm?.(newFormResponse.formAnswerId);
            }
        },
    });
    const changeStep = ({ isBackStep, fieldValues, }) => {
        if (!formResponse) {
            throw new Error('No form response provided');
        }
        if (!formResponse.id) {
            throw new Error('No progression ID provided');
        }
        if (!formResponse.formTag) {
            throw new Error('No form tag provided');
        }
        const { currentSection, nextSection } = formResponse || {};
        const currentSectionIsEqualToNextSection = currentSection === nextSection?.content.action?.nextSection;
        if (currentSectionIsEqualToNextSection)
            return;
        if (!nextSection) {
            console.error('No next section');
            return;
        }
        const body = getDynamicFormBody({
            sectionName: nextSection.nameId,
            components: nextSection.content.components || [],
            sectionEvent: isBackStep ? SectionEvent.Back : undefined,
            fieldValues: fieldValues || form.getValues(),
            fillingTime: differenceInSeconds(new Date(), startTime),
        });
        updateProgressionMutation.mutate({ body });
        setStartTime(new Date());
    };
    const getFirstErrorIndex = (fieldErrors) => {
        if (!formResponse) {
            throw new Error('No form response provided');
        }
        if (!formResponse.nextSection) {
            throw new Error('No next section provided');
        }
        if (!formResponse.nextSection.content.components) {
            throw new Error('No components provided');
        }
        const firstErrorKey = Object.keys(fieldErrors)[0];
        const { nameId, content: { components }, } = formResponse.nextSection || {};
        if (!firstErrorKey || !components)
            return;
        const firstErrorIndex = components.findIndex(component => getFieldName(nameId, component.nameId) === firstErrorKey);
        return firstErrorIndex;
    };
    const submitSection = ({ onError: onSubmitError, } = {}) => {
        form.handleSubmit((fieldValues) => changeStep({ fieldValues }), onSubmitError)();
    };
    const isOnFirstSection = formResponse?.nextSection?.nameId === formResponse?.firstSection;
    const shouldShowFormBody = Boolean(!initializeMutation.isLoading && formResponse && !formResponse?.finished);
    const shouldShowFormSuccess = Boolean(!initializeMutation.isLoading &&
        formResponse?.finished &&
        canShowSuccessScreen);
    const shouldShowFormFooter = Boolean(formResponse && !formResponse?.finished);
    return {
        changeStep,
        form,
        formTitle,
        formResponse,
        getFirstErrorIndex,
        getProgressionMutation,
        initializeMutation,
        isFrozen,
        isInitializingForm: initializeMutation.isLoading,
        isLoading: updateProgressionMutation.isLoading,
        isOnFirstSection,
        setFormResponse,
        setFormTitle,
        setIsFrozen,
        setCanShowSuccessScreen,
        setStartTime,
        shouldShowFormBody,
        shouldShowFormFooter,
        shouldShowFormSuccess,
        submitSection,
        updateProgressionMutation,
    };
};
export default useDynamicForm;
