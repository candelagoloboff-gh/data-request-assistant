import { type Dispatch, type SetStateAction } from 'react';
import { type FieldErrors, type FieldValues, type UseFormReturn } from 'react-hook-form';
import { type UseMutationResult } from 'react-query';
import { type DynamicFormBody, type DynamicFormProgressionBase, type DynamicFormValues, type ErrorTextsDefinition } from '../types';
export type UseDynamicFormProps<T extends DynamicFormProgressionBase = DynamicFormProgressionBase> = {
    /** The function to initialize the dynamic form */
    initializeFn?: () => Promise<T>;
    /** The function to get the dynamic form progress */
    getProgressionFn?: () => Promise<T>;
    /** The function to update the dynamic form progress */
    updateProgressionFn?: ({ body }: {
        body: DynamicFormBody;
    }) => Promise<T>;
    /** The function to handle the error */
    onError?: (error: unknown) => void;
    /** The function to handle the success */
    onProgressionSuccess?: () => void;
    /** The function to handle the error */
    onProgressionError?: () => void;
    /** The function to handle the complete form */
    onCompleteForm?: (formAnswerId: T['formAnswerId']) => void;
    /** The error texts */
    errorTexts: ErrorTextsDefinition;
};
export type UseDynamicFormReturn<T extends DynamicFormProgressionBase = DynamicFormProgressionBase> = {
    /** Whether the form is initializing */
    isInitializingForm: boolean;
    /** The dynamic form state */
    formResponse: T | null;
    /** Whether the form is loading */
    isLoading: boolean;
    /** The mutation to initialize the dynamic form */
    initializeMutation: UseMutationResult<T, unknown, void>;
    /** The mutation to get the dynamic form progression */
    getProgressionMutation: UseMutationResult<T, unknown, void>;
    /** The mutation to update the dynamic form progress */
    updateProgressionMutation: UseMutationResult<T, unknown, {
        body: DynamicFormBody;
    }>;
    /** The react-hook-form instance */
    form: UseFormReturn<Record<string, unknown>, unknown>;
    /** Function to handle the submit form section */
    submitSection: (params?: {
        onError?: (error: unknown) => void;
    }) => void;
    /** Function to change the step */
    changeStep: ({ isBackStep, fieldValues, }: {
        isBackStep?: boolean;
        fieldValues?: FieldValues;
    }) => void;
    /** Function to get the first error index */
    getFirstErrorIndex: (fieldErrors: FieldErrors<DynamicFormValues>) => number | undefined;
    /** The title of the form */
    formTitle: string;
    /** Whether the form is frozen */
    isFrozen: boolean;
    /** Whether the form is on the first section */
    isOnFirstSection: boolean;
    /** Whether the form body should be shown */
    shouldShowFormBody: boolean;
    /** Whether the form footer should be shown */
    shouldShowFormFooter: boolean;
    /** Whether the form success screen should be shown */
    shouldShowFormSuccess: boolean;
    /** Function to set the form response */
    setFormResponse: Dispatch<SetStateAction<T | null>>;
    /** Function to get the form response */
    setFormTitle: Dispatch<SetStateAction<string>>;
    /** Function to get the form response */
    setIsFrozen: Dispatch<SetStateAction<boolean>>;
    /** Function to get the form response */
    setCanShowSuccessScreen: Dispatch<SetStateAction<boolean>>;
    /** Function to get the form response */
    setStartTime: Dispatch<SetStateAction<Date>>;
};
export declare const useDynamicForm: <T extends DynamicFormProgressionBase = DynamicFormProgressionBase>({ onError, onProgressionSuccess, onProgressionError, initializeFn, getProgressionFn, updateProgressionFn, onCompleteForm, errorTexts, }: UseDynamicFormProps<T>) => UseDynamicFormReturn<T>;
export default useDynamicForm;
