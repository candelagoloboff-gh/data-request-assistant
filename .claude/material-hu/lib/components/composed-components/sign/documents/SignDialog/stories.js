import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useModal } from '../../../../../hooks/useModal';
import HuFormSign from './form';
import HuSignDialog from '.';
const meta = {
    component: HuSignDialog,
    title: 'Composed Components/Sign/Documents/SignDialog',
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            source: {
                type: 'dynamic',
            },
        },
    },
};
export default meta;
export const Default = {
    render: () => {
        const onHandleSave = (signature) => {
            alert(signature);
            closeModal();
        };
        const { modal, showModal, closeModal } = useModal(HuSignDialog, { fullWidth: true }, {
            onSave: onHandleSave,
            onClose: () => closeModal(),
        });
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => showModal(), variant: "primary", children: "Show Sign Modal" }), modal] }));
    },
};
export const Loading = {
    render: () => {
        const onHandleSave = (signature) => {
            alert(signature);
            closeModal();
        };
        const { modal, showModal, closeModal } = useModal(HuSignDialog, { fullWidth: true }, {
            onSave: onHandleSave,
            onClose: () => closeModal(),
            loading: true,
        });
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => showModal(), variant: "primary", children: "Show Sign Modal" }), modal] }));
    },
};
export const Form = {
    render: () => {
        const form = useForm({
            defaultValues: {
                sign: undefined,
            },
        });
        const onHandleSave = (signature) => {
            alert(signature);
            closeModal();
        };
        const onHandleClose = () => {
            alert(form.getValues('sign'));
            closeModal();
        };
        const { modal, showModal, closeModal } = useModal(HuFormSign, { fullWidth: true }, {
            name: 'sign',
            signProps: {
                onClose: onHandleClose,
                onSave: onHandleSave,
                title: 'Sign',
                minStrokes: 100,
            },
        });
        return (_jsxs(FormProvider, { ...form, children: [_jsx(Button, { onClick: () => showModal(), variant: "primary", children: "Show Sign Modal" }), modal] }));
    },
};
