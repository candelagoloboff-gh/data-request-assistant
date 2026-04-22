import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from '@mui/material';
import DemoImage1 from '../../../assets/ryp-es-tutorial-step-1.png';
import DemoImage2 from '../../../assets/ryp-es-tutorial-step-2.png';
import DemoImage3 from '../../../assets/ryp-es-tutorial-step-3.png';
import { useTutorialModal } from './index';
const mockSteps = [
    {
        id: 1,
        title: 'Ahora cuentas con Roles',
        description: 'Los roles te permitirán organizar los permisos en Humand, asegurando que los usuarios tengan las capacidades adecuadas. Además podrás agrupar permisos por segmentos de usuarios en lugar de asignarlos individualmente.',
        image: DemoImage1,
    },
    {
        id: 2,
        title: 'Hay roles predefinidos y personalizados',
        description: "Los roles 'Administrador total' y 'Todos los usuarios' fueron creados automáticamente por Humand. También puedes crear roles personalizados según las necesidades de tu empresa, y asignar usuarios a múltiples roles.",
        image: DemoImage2,
    },
    {
        id: 3,
        title: 'Concede permisos generales',
        description: 'Al crear un rol, puedes otorgarle permisos generales que habilitan las funciones esenciales del módulo.',
        image: DemoImage3,
    },
];
const mockStepsWithCarousel = [
    {
        id: 1,
        title: 'Info del mensaje',
        description: 'Ahora puedes consultar quien ha leído tus mensajes en un chat grupal desde info del mensaje.',
        image: DemoImage1,
    },
    {
        id: 2,
        title: 'Arrastrar y soltar',
        description: 'Puedes arrastrar y soltar archivos multimedia directamente en la conversación para enviarlos.',
        image: DemoImage1,
    },
    {
        id: 1,
        title: 'Descargar imágenes y videos',
        description: 'Descarga y guarda las imagenes y videos compartidos en tus chats.',
        image: DemoImage1,
    },
];
const meta = {
    title: 'Composed Components/TutorialModal',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        steps: {
            description: 'Array of tutorial steps to display. Each step contains an id, title, description, and image URL.',
            table: {
                type: { summary: 'TutorialStep[]' },
            },
        },
        texts: {
            description: 'Text configuration for the modal including the header title and button labels (nextButtonText, previousButtonText, completeButtonText).',
            table: {
                type: {
                    summary: '{ title: string; nextButtonText: string; previousButtonText: string; completeButtonText: string }',
                },
            },
        },
        callbacks: {
            description: 'Optional callback functions triggered during tutorial interactions: onShow (modal opens), onNext (advance step), onPrevious (go back), onClose (modal closes), onComplete (tutorial finished).',
            table: {
                type: { summary: 'TutorialModalCallbacks' },
            },
        },
        isCarousel: {
            description: 'When enabled, displays clickable navigation dots below the image allowing users to jump directly to any step.',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        bodyVariant: {
            description: 'Controls the size variant of the Title component used in the modal body. Affects the typography scale of the step title and description.',
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            table: {
                defaultValue: { summary: 'L' },
                type: { summary: 'TitleVariantTypes' },
            },
        },
        minTitleHeight: {
            description: 'Minimum height in pixels for the title section. Useful to maintain consistent modal height across steps with varying content lengths.',
            control: 'number',
            table: {
                defaultValue: { summary: '150' },
                type: { summary: 'number' },
            },
        },
    },
};
export default meta;
export const Default = {
    args: {
        isCarousel: false,
    },
    render: args => {
        const { modal, showModal } = useTutorialModal({
            steps: mockSteps,
            texts: {
                title: 'Renovamos la forma de gestionar permisos',
                nextButtonText: 'Siguiente',
                previousButtonText: 'Anterior',
                completeButtonText: 'Entendido',
            },
            isCarousel: args.isCarousel,
            callbacks: {
                onShow: () => console.log('Tutorial abierto'),
                onNext: step => console.log(`Avanzando del paso ${step} al ${step + 1}`),
                onPrevious: step => console.log(`Retrocediendo del paso ${step} al ${step - 1}`),
                onClose: step => console.log(`Tutorial cerrado en el paso ${step}`),
                onComplete: () => console.log('Tutorial completado'),
            },
        });
        return (_jsxs(Stack, { sx: { gap: 2, alignItems: 'center' }, children: [_jsx(Button, { variant: "contained", onClick: showModal, children: "Ver tutorial" }), modal] }));
    },
};
export const WithCarousel = {
    args: {
        isCarousel: true,
    },
    render: args => {
        const { modal, showModal } = useTutorialModal({
            steps: mockStepsWithCarousel,
            texts: {
                title: 'Nuevas funcionalidades en chats',
                nextButtonText: 'Siguiente',
                previousButtonText: 'Anterior',
                completeButtonText: 'Cerrar',
            },
            isCarousel: args.isCarousel,
            bodyVariant: 'S',
            minTitleHeight: 62,
        });
        return (_jsxs(Stack, { sx: { gap: 2, alignItems: 'center' }, children: [_jsx(Button, { variant: "contained", onClick: showModal, children: "Ver tutorial" }), modal] }));
    },
};
