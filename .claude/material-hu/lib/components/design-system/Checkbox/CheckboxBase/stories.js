import CheckboxBase from './index';
const meta = {
    title: 'Design System/Checkbox/CheckboxBase',
    component: CheckboxBase,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Estado del checkbox',
        },
        disabled: {
            control: 'boolean',
            description: 'Si el checkbox está deshabilitado',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Estado indeterminado del checkbox',
        },
        error: {
            control: 'boolean',
            description: 'Si el checkbox está en estado de error',
        },
        primaryColor: {
            control: 'color',
            description: 'Color primario del checkbox',
        },
        hoverBackgroundColor: {
            control: 'color',
            description: 'Color de fondo al pasar el mouse',
        },
    },
};
export default meta;
export const Default = {
    args: {
        checked: false,
    },
};
export const Checked = {
    args: {
        checked: true,
    },
};
export const Indeterminate = {
    args: {
        indeterminate: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        disabled: true,
        checked: true,
    },
};
export const WithError = {
    args: {
        error: true,
        primaryColor: '#FF0000',
    },
};
export const CustomColors = {
    args: {
        primaryColor: '#4CAF50',
        hoverBackgroundColor: '#E8F5E9',
    },
};
