import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@mui/material';
import FormSwitcherCard from './form';
import SwitcherCard from '.';
const meta = {
    component: SwitcherCard,
    title: 'Composed Components/Cards/SwitcherCard',
    tags: ['autodocs'],
    args: {
        sx: {
            width: '100%',
        },
        slotProps: {
            title: {
                title: 'Configuración de notificaciones',
                description: 'Gestiona tus preferencias de notificaciones',
            },
        },
        children: (_jsx(Box, { sx: { p: 2, borderRadius: 1, backgroundColor: 'background.paper' }, children: _jsx(Typography, { children: "Este es el contenido que se muestra cuando el switcher est\u00E1 activado. Puedes incluir cualquier componente o contenido aqu\u00ED." }) })),
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        open: {
            control: { type: 'boolean' },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithTooltip = {
    args: {
        slotProps: {
            title: {
                title: 'Configuración avanzada',
                description: 'Opciones de configuración avanzada',
            },
            tooltip: {
                description: 'Esta configuración afecta el comportamiento del sistema',
            },
        },
    },
};
export const Disabled = {
    args: {
        disabled: true,
        slotProps: {
            title: {
                title: 'Función deshabilitada',
                description: 'Esta función no está disponible',
            },
        },
    },
};
export const InitiallyOpen = {
    args: {
        open: true,
        slotProps: {
            title: {
                title: 'Contenido inicialmente visible',
                description: 'El contenido se muestra por defecto',
            },
        },
    },
};
export const WithCallback = {
    args: {
        slotProps: {
            title: {
                title: 'Con callback',
                description: 'Ejemplo con función de callback',
            },
        },
        onContentToggle: isOpen => {
            alert(`El contenido está ${isOpen ? 'abierto' : 'cerrado'}`);
        },
    },
};
// Componente wrapper para demostrar React Hook Form
const FormExample = () => {
    const methods = useForm({
        defaultValues: {
            example: false,
        },
    });
    const { handleSubmit, watch, formState: { errors }, } = methods;
    const onSubmit = (data) => {
        // eslint-disable-next-line no-console
        console.log('Form data:', data);
        alert(`Datos del formulario: ${JSON.stringify(data, null, 2)}`);
    };
    const watchedValues = watch();
    return (_jsx(FormProvider, { ...methods, children: _jsx(Box, { sx: { width: '100%', maxWidth: 600 }, children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(FormSwitcherCard, { name: "example", switcherCardProps: {
                                slotProps: {
                                    title: {
                                        title: 'Título de SwitcherCard',
                                        description: 'Descripción de SwitcherCard',
                                    },
                                    tooltip: {
                                        description: 'Tooltip de SwitcherCard',
                                    },
                                },
                            }, rules: {
                                required: 'Debes seleccionar una opción',
                            }, children: _jsx(Box, { sx: {
                                    mt: 2,
                                    p: 2,
                                    borderRadius: 1,
                                    backgroundColor: 'background.paper',
                                }, children: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }) }) }), _jsx(Box, { sx: { mt: 2 }, children: _jsx(Button, { type: "submit", variant: "contained", fullWidth: true, children: "Guardar preferencias" }) }), errors.example && (_jsx(Typography, { color: "error", variant: "body2", children: errors.example.message })), _jsxs(Box, { sx: { mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }, children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "Valores actuales del formulario:" }), _jsx(Typography, { variant: "body2", component: "pre", children: JSON.stringify(watchedValues, null, 2) })] })] }) }) }) }));
};
export const WithForm = {
    render: () => _jsx(FormExample, {}),
    parameters: {
        docs: {
            description: {
                story: 'Ejemplo de uso del componente SwitcherCard integrado con React Hook Form usando el componente FormSwitcherCard.',
            },
        },
    },
};
