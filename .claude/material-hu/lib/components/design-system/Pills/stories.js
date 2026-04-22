import { IconAlertTriangle } from '@tabler/icons-react';
import Pills from '.';
const meta = {
    component: Pills,
    title: 'Design System/Pills',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: [
                'error',
                'success',
                'warning',
                'info',
                'highlight',
                'neutral',
                'disabled',
            ],
            table: {
                type: { summary: 'union' },
            },
            defaultValue: { summary: 'error' },
        },
        size: {
            control: 'radio',
        },
        hasIcon: {
            control: 'boolean',
        },
    },
    args: {
        label: 'Message in pill',
        type: 'error',
        size: 'medium',
        hasIcon: true,
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Error = {
    args: {
        label: 'Error message alert',
        type: 'error',
    },
};
export const Success = {
    args: {
        label: 'Success message alert',
        type: 'success',
    },
};
export const Info = {
    args: {
        label: 'Info message alert',
        type: 'info',
    },
};
export const Highlight = {
    args: {
        label: 'Highlighted message alert',
        type: 'highlight',
    },
};
export const Neutral = {
    args: {
        label: 'Neutral message alert',
        type: 'neutral',
    },
};
export const DisabledStyle = {
    args: {
        label: 'Disabled (visually)',
        type: 'disabled',
        onClick: () => {
            alert('clicking will still work');
        },
    },
};
export const Disabled = {
    args: {
        label: 'Disabled (actually)',
        type: 'disabled',
        disabled: true,
        onClick: () => {
            alert('clicking will not work');
        },
    },
};
export const Clickable = {
    args: {
        label: 'Clickable pill',
        type: 'info',
        onClick: () => {
            alert('clicked');
        },
    },
};
export const CustomIcon = {
    args: {
        label: 'Custom icon',
        type: 'info',
        hasIcon: true,
        customIcon: IconAlertTriangle,
    },
};
