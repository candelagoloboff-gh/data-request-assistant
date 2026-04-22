import { type ReactNode } from 'react';
import { type UseDynamicFormReturn } from '../hooks/useDynamicForm';
import { type DynamicFormProgressionBase } from '../types';
export type DynamicFormContextProviderProps<T extends DynamicFormProgressionBase = DynamicFormProgressionBase> = UseDynamicFormReturn<T> & {
    children: ReactNode;
};
export declare const DynamicFormContext: import("react").Context<Pick<UseDynamicFormReturn, "isLoading" | "formResponse" | "setFormResponse" | "isFrozen" | "setIsFrozen" | "setStartTime" | "formTitle" | "setFormTitle" | "setCanShowSuccessScreen" | "isInitializingForm" | "shouldShowFormBody" | "shouldShowFormFooter" | "shouldShowFormSuccess" | "submitSection" | "changeStep" | "getFirstErrorIndex"> & {
    updateProgressionMutation: UseDynamicFormReturn["updateProgressionMutation"] | null;
    form: UseDynamicFormReturn["form"] | null;
}>;
declare const DynamicFormContextProvider: <T extends DynamicFormProgressionBase = DynamicFormProgressionBase>({ children, ...props }: DynamicFormContextProviderProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DynamicFormContextProvider;
