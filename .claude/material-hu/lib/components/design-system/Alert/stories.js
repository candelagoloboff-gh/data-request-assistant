import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Alert from '.';
const meta = {
    component: Alert,
    title: 'Design System/Alert',
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        loading: { control: 'boolean' },
    },
    args: {
        description: 'Description example',
        title: 'Title example',
        severity: 'success',
        hasClose: true,
        action: { text: 'Action!', onClick: () => alert('Action has been run') },
        loading: false,
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Success = {
    args: {
        severity: 'success',
    },
};
export const Loading = {
    args: {
        severity: 'success',
        loading: true,
    },
};
export const Error = {
    args: {
        severity: 'error',
    },
};
export const Warning = {
    args: {
        severity: 'warning',
    },
};
export const Info = {
    args: {
        severity: 'info',
    },
};
export const Highlight = {
    args: {
        severity: 'highlight',
    },
};
export const NoDescription = {
    args: {
        severity: 'highlight',
        description: undefined,
    },
};
export const NoAction = {
    args: {
        severity: 'highlight',
        description: undefined,
        action: undefined,
    },
};
export const CustomDescription = {
    args: {
        severity: 'highlight',
        description: (_jsx(Stack, { sx: {
                p: 2,
                border: '1px solid',
            }, children: "Custom description using React.ReactNode. Used to display Trans i18n content." })),
        action: undefined,
    },
};
export const NoClose = {
    args: {
        severity: 'highlight',
        description: undefined,
        action: undefined,
        hasClose: false,
    },
};
