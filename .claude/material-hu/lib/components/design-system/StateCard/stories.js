import { IconStar } from '@tabler/icons-react';
import StateCard from '.';
const meta = {
    component: StateCard,
    title: 'Design System/StateCard',
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        variant: {
            control: 'select',
            options: ['primary', 'success', 'error', 'warning', 'wifi-off'],
            table: { defaultValue: { summary: 'primary' } },
        },
        icon: { control: false },
        primaryAction: { control: false },
        secondaryAction: { control: false },
        slotProps: { control: false },
        sx: { control: false },
    },
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'New Feature',
        description: 'This is a new feature that has been added to the application.',
    },
};
export default meta;
export const Default = {};
export const Success = {
    args: {
        title: 'Success',
        variant: 'success',
    },
};
export const Error = {
    args: {
        title: 'Error',
        variant: 'error',
    },
};
export const Warning = {
    args: {
        title: 'Warning',
        variant: 'warning',
    },
};
export const WifiOff = {
    args: {
        title: 'Wifi-off',
        variant: 'wifi-off',
    },
};
export const WithIcon = {
    args: {
        ...Default.args,
        icon: IconStar,
    },
};
export const WithAction = {
    args: {
        ...Default.args,
        primaryAction: {
            label: 'Learn More',
            onClick: () => alert('Action clicked!'),
        },
    },
};
export const WithSecondaryAction = {
    args: {
        primaryAction: {
            label: 'Learn More',
            onClick: () => alert('Learn More clicked!'),
        },
        secondaryAction: {
            label: 'Dismiss',
            onClick: () => alert('Dismiss clicked!'),
        },
        variant: 'warning',
    },
};
