import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { createContext } from 'react';
import { FormProvider } from 'react-hook-form';
// Cannot use Omit as TypeScript is not able to infer the type of the context
export const DynamicFormContext = createContext({
    isInitializingForm: false,
    formResponse: null,
    isLoading: false,
    updateProgressionMutation: null,
    form: null,
    submitSection: () => { },
    changeStep: () => { },
    getFirstErrorIndex: () => 0,
    isFrozen: false,
    setFormResponse: () => { },
    setFormTitle: () => { },
    setIsFrozen: () => { },
    setCanShowSuccessScreen: () => { },
    setStartTime: () => { },
    shouldShowFormBody: false,
    shouldShowFormFooter: false,
    shouldShowFormSuccess: false,
    formTitle: '',
});
const DynamicFormContextProvider = ({ children, ...props }) => {
    const { formResponse, form } = props;
    return (_createElement(FormProvider, { ...form, key: formResponse?.currentSection },
        _jsx(DynamicFormContext.Provider, { value: props, children: children })));
};
export default DynamicFormContextProvider;
