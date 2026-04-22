import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import Spinner from '../../design-system/ProgressIndicators/Spinner';
import useSnackbar from '../../design-system/Snackbar';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SAMPLE_FILE_ASSET } from '../../../mock/data/dynamic-form';
import dynamicFormService from '../../../mock/services/dynamic-form';
import { SnackbarProvider } from 'notistack';
import DynamicFormContextProvider from './components/DynamicFormContextProvider';
import FormFooter from './components/FormFooter';
import FormInputsCatalog from './components/FormInputsCatalog';
import FormSectionSkeleton from './components/FormSectionSkeleton';
import FormSuccessScreen from './components/FormSuccessScreen';
import useDynamicForm from './hooks/useDynamicForm';
import useDynamicFormAnswer from './hooks/useDynamicFormAnswer';
const DynamicFormWithProviders = () => {
    const { enqueueSnackbar } = useSnackbar();
    const methods = useDynamicForm({
        initializeFn: dynamicFormService.initDynamicForm,
        getProgressionFn: dynamicFormService.getDynamicFormProgress,
        updateProgressionFn: dynamicFormService.updateDynamicFormProgress,
        onError: () => {
            enqueueSnackbar({
                title: 'Error al inicializar el formulario',
                variant: 'error',
            });
        },
        errorTexts: {
            required: 'Este campo es requerido',
        },
    });
    useEffect(() => {
        methods.getProgressionMutation.mutate();
    }, []);
    if (methods.isInitializingForm) {
        return _jsx(Spinner, {});
    }
    return (_jsxs(DynamicFormContextProvider, { ...methods, children: [methods.shouldShowFormSuccess && (_jsx(FormSuccessScreen, { action: {
                    children: 'Siguiente',
                    onClick: () => { },
                }, title: "Formulario completado", description: "El formulario se ha completado correctamente" })), methods.shouldShowFormBody && (_jsx(FormInputsCatalog.Connected, { slotProps: {
                    fields: {
                        TEXT: {
                            placeholder: 'Ingrese un valor',
                        },
                        FLOAT: {
                            placeholder: '0.00',
                        },
                        INTEGER: {
                            placeholder: '0',
                        },
                        FILE: {
                            uploadFn: () => Promise.resolve([SAMPLE_FILE_ASSET]),
                        },
                        SIGNATURE: {
                            signProps: {
                                uploadFn: () => Promise.resolve([SAMPLE_FILE_ASSET]),
                            },
                            buttonProps: {
                                children: 'Firma',
                            },
                            deleteButtonProps: {
                                children: 'Eliminar',
                            },
                            editButtonProps: {
                                children: 'Editar',
                            },
                        },
                    },
                } })), methods.shouldShowFormFooter && (_jsx(FormFooter, { nextButton: {
                    children: 'Siguiente',
                    onClick: () => methods.submitSection(),
                }, backButton: {
                    children: 'Atrás',
                    onClick: () => methods.changeStep({ isBackStep: true }),
                } }))] }));
};
const meta = {
    component: DynamicFormWithProviders,
    title: 'Composed Components/DynamicForms/DynamicForm',
    tags: ['autodocs'],
    decorators: [
        Story => {
            const queryClient = new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            });
            return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(SnackbarProvider, { children: _jsx("div", { style: { minHeight: '100vh', width: '100%' }, children: _jsx(Story, {}) }) }) }) }));
        },
    ],
};
export const Loading = {
    render: () => {
        return _jsx(FormSectionSkeleton, {});
    },
};
export const DynamicFormResults = {
    render: () => {
        return _jsx(DynamicFormResultsWithProviders, {});
    },
};
const DynamicFormResultsWithProviders = () => {
    const methods = useDynamicFormAnswer({
        getAnswerFn: dynamicFormService.getDynamicFormAnswer,
        errorTexts: {
            required: 'Este campo es requerido',
        },
    });
    useEffect(() => {
        methods.getAnswerMutation.mutate();
    }, []);
    if (methods.isLoading) {
        return _jsx(Spinner, {});
    }
    return (_jsx(Stack, { sx: { minHeight: '100vh' }, children: _jsxs(FormProvider, { ...methods.form, children: [_jsx(Stack, { sx: { flex: 1 }, children: _jsx(FormInputsCatalog, { section: methods.currentSection, isFrozen: methods.isFrozen }) }), _jsx(FormFooter, { nextButton: {
                        children: 'Siguiente',
                        onClick: () => methods.changeStep({}),
                    }, backButton: {
                        children: 'Atrás',
                        onClick: () => methods.changeStep({ isBackStep: true }),
                    } })] }) }));
};
export default meta;
export const Default = {};
