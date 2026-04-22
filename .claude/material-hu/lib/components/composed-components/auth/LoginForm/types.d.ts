import { type ReactNode } from 'react';
import { type RegisterOptions } from 'react-hook-form';
export type FormFieldConfig = {
    rules: RegisterOptions;
};
export type LoginFormConfig = {
    email: FormFieldConfig;
    password: FormFieldConfig;
};
export type SSOConfig = {
    azureButton: React.ReactNode;
    googleButton: React.ReactNode;
    oktaButton: React.ReactNode;
};
export type LoginCallbacks = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onRecoverPassword: () => void;
    onSelectAnother: () => void;
};
export type LoginFormProps = {
    title: ReactNode;
    hasInstanceSelected: boolean;
    showAnotherInstanceButton: boolean;
    formConfig: LoginFormConfig;
    callbacks: LoginCallbacks;
    isSubmitting: boolean;
    sso: SSOConfig;
    termsOfUseAndPrivacy?: ReactNode;
};
