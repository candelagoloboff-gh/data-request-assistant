import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import humandLogo from '../../../../assets/HUMAND-Blue.svg';
import loginBanner from '../../../../assets/login-banner.png';
import InstanceCard from '../components/InstanceCard';
import LoginLayout from '../components/LoginLayout';
import SSOButton from './components/SSOButton';
import useSelectIntanceDrawer from './hooks/useSelectIntanceDrawer';
import LoginForm from '.';
const meta = {
    title: 'Composed Components/Auth/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;
const baseFormConfig = {
    email: {
        rules: {
            required: 'El usuario es requerido',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'El usuario no es válido',
            },
        },
    },
    password: {
        rules: {
            required: 'La contraseña es requerida',
            minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
            },
        },
    },
};
const baseCallbacks = {
    onSubmit: e => {
        e.preventDefault();
    },
    onRecoverPassword: () => { },
    onSelectAnother: () => { },
};
const baseSSO = {
    azureButton: (_jsx(SSOButton, { type: "Microsoft", onClick: () => { } })),
    googleButton: (_jsx(SSOButton, { type: "Google", onClick: () => { } })),
    oktaButton: (_jsx(SSOButton, { type: "Okta", onClick: () => { } })),
};
export const Default = {
    render: () => {
        const form = useForm({
            defaultValues: {
                email: '',
                password: '',
            },
        });
        const instances = [
            {
                id: 1,
                name: 'Techint Engineering & Construction',
                color: '#000000',
                logo: humandLogo,
                samlURI: 'https://saml.humand.co',
                userHasEmail: true,
                forceOTP: false,
                otpAfterRegularLogin: false,
            },
            {
                id: 2,
                name: 'Humand',
                color: '#000000',
                logo: humandLogo,
                samlURI: 'https://saml.humand.co',
                userHasEmail: true,
                forceOTP: false,
                otpAfterRegularLogin: false,
            },
        ];
        const selectedInstance = [];
        const { drawer: selectInstanceDrawer, showDrawer: showSelectInstanceDrawer, } = useSelectIntanceDrawer({
            onClose: () => { },
            loading: false,
            instances,
            onSelectInstance: () => { },
            searchProps: {
                query: '',
                setQuery: () => { },
            },
        });
        return (_jsxs(_Fragment, { children: [selectInstanceDrawer, _jsx(Stack, { sx: {
                        width: '100%',
                        height: '100%',
                        p: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, children: _jsx(LoginLayout, { banner: { src: loginBanner }, showBackdrop: false, children: _jsx(BrowserRouter, { children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: {
                                        alignItems: 'center',
                                        height: '100vh',
                                        justifyContent: 'center',
                                        flex: 1,
                                    }, children: _jsx(LoginForm, { title: _jsx(Typography, { variant: "globalXL", fontWeight: "fontWeightSemiBold", color: theme => theme.palette.new.text.neutral.default, children: "Inicia sesi\u00F3n en el panel del administrador" }), isSubmitting: false, formConfig: baseFormConfig, hasInstanceSelected: selectedInstance.length > 0, showAnotherInstanceButton: selectedInstance.length > 0 && instances.length > 1, callbacks: {
                                            ...baseCallbacks,
                                            onSubmit: e => {
                                                e.preventDefault();
                                                showSelectInstanceDrawer(true);
                                            },
                                        }, sso: baseSSO }) }) }) }) }) })] }));
    },
};
export const WithInstanceSelected = {
    render: () => {
        const form = useForm({
            defaultValues: {
                email: 'email@humand.co',
                password: '',
            },
        });
        const instanceSelected = {
            id: 1,
            name: 'Humand',
            logo: humandLogo,
        };
        const instances = [
            {
                id: 1,
                name: 'Humand',
                color: '#000000',
                logo: humandLogo,
                samlURI: 'https://saml.humand.co',
                userHasEmail: true,
                forceOTP: false,
                otpAfterRegularLogin: false,
            },
            {
                id: 2,
                name: 'Humand',
                color: '#000000',
                logo: humandLogo,
                samlURI: 'https://saml.humand.co',
                userHasEmail: true,
                forceOTP: false,
                otpAfterRegularLogin: false,
            },
        ];
        return (_jsx(Stack, { sx: {
                width: '100%',
                height: '100%',
                p: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }, children: _jsx(LoginLayout, { banner: { src: loginBanner }, showBackdrop: false, children: _jsx(BrowserRouter, { children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: {
                                alignItems: 'center',
                                height: '100vh',
                                justifyContent: 'center',
                                flex: 1,
                            }, children: _jsx(LoginForm, { title: _jsx(InstanceCard, { name: instanceSelected?.name ?? '', logo: instanceSelected?.logo ?? '' }), isSubmitting: false, formConfig: baseFormConfig, hasInstanceSelected: !!instanceSelected, showAnotherInstanceButton: !!instanceSelected && instances.length > 1, callbacks: baseCallbacks, sso: baseSSO }) }) }) }) }) }));
    },
};
