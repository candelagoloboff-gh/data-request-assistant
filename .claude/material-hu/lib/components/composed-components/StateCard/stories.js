import { IconAlertTriangle } from '@tabler/icons-react';
import StateCard from '.';
const meta = {
    component: StateCard,
    title: 'Composed Components/Cards/StateCard',
    tags: ['autodocs'],
    args: {
        title: 'Title of StateCard',
        description: 'This is an example of description in StateCard',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const CustomIcon = {
    args: {
        Icon: IconAlertTriangle,
        color: 'warning',
    },
};
export const WithAction = {
    args: {
        action: {
            children: 'Action',
            onClick: () => alert('click on action'),
        },
    },
};
export const LoadingAction = {
    args: {
        slotProps: {
            button: {
                children: 'Action',
                loading: true,
            },
        },
    },
};
export const Variant = {
    args: {
        variant: 'XL',
        Icon: IconAlertTriangle,
        color: 'warning',
    },
};
export const Error = {
    args: {
        title: 'No podemos mostrar los resultados',
        description: 'Inténtalo de nuevo más tarde o refresca la pantalla.',
        variant: 'S',
        Icon: IconAlertTriangle,
        color: 'error',
        action: {
            children: 'Volver a intentar',
            onClick: () => alert('Try again clicked!'),
        },
        cardContained: false,
        sx: {
            backgroundColor: theme => theme.palette.new?.background?.elements?.default,
        },
    },
};
