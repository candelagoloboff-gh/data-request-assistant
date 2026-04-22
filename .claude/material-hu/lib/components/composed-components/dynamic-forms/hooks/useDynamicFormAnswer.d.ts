import { type Dispatch, type SetStateAction } from 'react';
import { type UseFormReturn } from 'react-hook-form';
import { type UseMutationOptions, type UseMutationResult } from 'react-query';
import { type DynamicFormAnswer, type DynamicFormAnswerSection, type ErrorTextsDefinition } from '../types';
export type UseDynamicFormAnswerProps<T extends DynamicFormAnswer = DynamicFormAnswer> = {
    /** The function to get the dynamic form answer */
    getAnswerFn?: () => Promise<T>;
    /** The options for the get answer mutation */
    getAnswerMutationOptions?: Omit<UseMutationOptions<T, unknown, void>, 'mutationFn'>;
    /** The error texts */
    errorTexts: ErrorTextsDefinition;
};
export type UseDynamicFormAnswerReturn<T extends DynamicFormAnswer = DynamicFormAnswer> = {
    /** Whether the form is loading */
    isLoading: boolean;
    /** The dynamic form answer */
    formAnswer: T | null;
    /** The mutation to get the dynamic form answer */
    getAnswerMutation: UseMutationResult<T, unknown, void>;
    /** The react-hook-form instance */
    form: UseFormReturn<Record<string, unknown>, unknown>;
    /** Function to handle the submit form section */
    submitSection: (params?: {
        onError?: (error: unknown) => void;
    }) => void;
    /** Function to change the step */
    changeStep: ({ isBackStep }: {
        isBackStep?: boolean;
    }) => void;
    /** The title of the form */
    formTitle: string;
    /** Whether the form is frozen */
    isFrozen: boolean;
    /** Whether the form is on the first section */
    isOnFirstSection: boolean;
    /** Whether the form is on the last section */
    isOnLastSection: boolean;
    /** Function to get the form response */
    setFormTitle: Dispatch<SetStateAction<string>>;
    /** Function to get the form response */
    setIsFrozen: Dispatch<SetStateAction<boolean>>;
    /** The current section */
    currentSection?: DynamicFormAnswerSection | undefined | null;
};
declare const useDynamicFormAnswer: <T extends DynamicFormAnswer = DynamicFormAnswer>({ getAnswerFn, getAnswerMutationOptions, errorTexts, }: UseDynamicFormAnswerProps<T>) => UseDynamicFormAnswerReturn<T>;
export default useDynamicFormAnswer;
