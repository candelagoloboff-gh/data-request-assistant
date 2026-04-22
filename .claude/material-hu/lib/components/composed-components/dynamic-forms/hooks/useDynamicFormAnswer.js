import { useEffect, useState } from 'react';
import { useMutation, } from 'react-query';
import useBuildDynamicForm, { buildFormSchemaAndValues, } from './useBuildDynamicForm';
const useDynamicFormAnswer = ({ getAnswerFn, getAnswerMutationOptions, errorTexts, }) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [formAnswer, setFormAnswer] = useState(null);
    const [isFrozen, setIsFrozen] = useState(false);
    const [formTitle, setFormTitle] = useState('');
    const currentSection = formAnswer?.sections[currentSectionIndex];
    const form = useBuildDynamicForm({
        sectionId: currentSection?.nameId || '',
        components: currentSection?.content.components || [],
        errorTexts,
    });
    const getAnswerMutation = useMutation({
        mutationFn: getAnswerFn,
        onSuccess: (data, ...rest) => {
            setFormAnswer(data);
            setFormTitle(data?.form?.title || '');
            setIsFrozen(!data?.editable || false);
            getAnswerMutationOptions?.onSuccess?.(data, ...rest);
        },
        ...getAnswerMutationOptions,
    });
    const changeStep = ({ isBackStep }) => {
        if (isBackStep) {
            if (currentSectionIndex === 0)
                return;
            setCurrentSectionIndex(currentSectionIndex - 1);
        }
        else {
            if (currentSectionIndex === (formAnswer?.sections?.length || 0) - 1)
                return;
            setCurrentSectionIndex(currentSectionIndex + 1);
        }
    };
    const submitSection = () => {
        changeStep({});
    };
    const isOnFirstSection = currentSectionIndex === 0;
    const isOnLastSection = currentSectionIndex === (formAnswer?.sections?.length || 0) - 1;
    useEffect(() => {
        if (currentSection) {
            const { values } = buildFormSchemaAndValues({
                sectionId: currentSection.nameId,
                components: currentSection.content.components || [],
                errorTexts,
            });
            form.reset(values);
        }
    }, [currentSection]);
    return {
        changeStep,
        currentSection,
        form,
        formTitle,
        formAnswer,
        getAnswerMutation,
        isFrozen,
        isLoading: getAnswerMutation.isLoading,
        isOnFirstSection,
        isOnLastSection,
        setFormTitle,
        setIsFrozen,
        submitSection,
    };
};
export default useDynamicFormAnswer;
