import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useModal } from '../../../hooks/useModal';
import Dialog from '.';
const meta = {
    component: Dialog,
    title: 'Design System/Dialog',
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
const renderStory = (customProps = {}, dialogProps = {}) => function Component() {
    const { modal, showModal, closeModal } = useModal(Dialog, {
        maxWidth: 'sm',
        ...dialogProps,
    }, {
        title: 'Soy un título del Dialog',
        textBody: 'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.',
        actionInfo: 'Soy un texto de información',
        ...customProps,
        primaryButtonProps: {
            children: 'Confirm',
            onClick: () => closeModal(),
            ...customProps.primaryButtonProps,
        },
        secondaryButtonProps: {
            children: 'Cancel',
            onClick: () => closeModal(),
            ...customProps.secondaryButtonProps,
        },
    });
    return (_jsxs(Stack, { children: [modal, _jsx(Button, { variant: "primary", size: "large", sx: { width: 'fit-content' }, onClick: () => showModal(), children: "Open dialog" })] }));
};
const Body = () => (_jsx(Stack, { sx: {
        width: 1,
        border: '1px dashed #CAD5FE',
        backgroundColor: '#EFF2FF',
        height: '200px',
        borderRadius: '8px',
    } }));
export const Default = {
    render: renderStory(),
};
export const WithBody = {
    render: renderStory({ body: _jsx(Body, {}), textBody: undefined }),
};
export const ScrollTextBody = {
    render: renderStory({
        textBody: 'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora.  ahora, se perderán los datos que ingresaste y deberás compl ahora, se perderán los datos que ingresaste y deberás compl',
    }),
};
export const ControllingWidth = {
    render: renderStory(undefined, {
        fullWidth: true,
        maxWidth: 'lg',
    }),
};
export const LoadingButton = {
    render: renderStory({
        primaryButtonProps: {
            loading: true,
        },
    }),
};
export const NonClosableOnBackdropClick = {
    render: () => {
        const [isClickedOutside, setIsClickedOutside] = useState(false);
        const secondaryButtonProps = isClickedOutside
            ? {
                children: 'Confirmar',
                onClick: () => {
                    closeModal();
                    setIsClickedOutside(false);
                },
            }
            : undefined;
        const textBody = isClickedOutside
            ? 'Confirme para cerrar el modal'
            : 'Haga clic fuera del modal para cerrarlo';
        const { modal, showModal, closeModal } = useModal(Dialog, {
            maxWidth: 'sm',
            onClose: (_event, reason) => {
                if (reason === 'backdropClick') {
                    setIsClickedOutside(true);
                    return;
                }
                closeModal();
            },
        }, {
            title: 'Dialog bloquea cierre con click afuera',
            textBody,
            secondaryButtonProps,
            primaryButtonProps: {
                children: isClickedOutside ? 'Volver' : 'Cerrar',
                onClick: () => isClickedOutside ? setIsClickedOutside(false) : closeModal(),
            },
        });
        return (_jsxs(Stack, { children: [modal, _jsx(Button, { variant: "primary", size: "large", sx: { width: 'fit-content' }, onClick: () => showModal(), children: "Open dialog" })] }));
    },
};
export const WithoutTextBody = {
    render: renderStory({
        title: 'Dialog sin Body',
        body: undefined,
        textBody: undefined,
        actionInfo: undefined,
        footerProps: {
            hideBorder: true,
        },
        primaryButtonProps: {
            children: 'Aceptar',
        },
        secondaryButtonProps: {
            children: 'Cancelar',
        },
    }),
};
