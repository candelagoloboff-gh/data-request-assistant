export declare const useDynamicFormContext: () => Pick<import("./useDynamicForm").UseDynamicFormReturn, "isLoading" | "formResponse" | "setFormResponse" | "isFrozen" | "setIsFrozen" | "setStartTime" | "formTitle" | "setFormTitle" | "setCanShowSuccessScreen" | "isInitializingForm" | "shouldShowFormBody" | "shouldShowFormFooter" | "shouldShowFormSuccess" | "submitSection" | "changeStep" | "getFirstErrorIndex"> & {
    updateProgressionMutation: import("./useDynamicForm").UseDynamicFormReturn["updateProgressionMutation"] | null;
    form: import("./useDynamicForm").UseDynamicFormReturn["form"] | null;
};
