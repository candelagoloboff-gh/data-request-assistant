import { jsx as _jsx } from "react/jsx-runtime";
import { SnackbarProvider } from 'notistack';
import SnackbarWrapper from './SnackbarWraper';
const meta = {
    component: SnackbarWrapper,
    title: 'Design System/Snackbar',
    tags: ['autodocs'],
    parameters: {
        docs: {
            story: { height: '80px' },
        },
    },
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        variant: {
            control: 'radio',
            options: ['success', 'error', 'warning', 'info'],
        },
        hasClose: { control: 'boolean' },
        cancelAction: { control: 'object' },
    },
    args: {
        title: 'Snackbar Title',
        description: 'This is a description for the snackbar.',
        variant: 'success',
        hasClose: true,
        cancelAction: undefined,
    },
};
export default meta;
const SnackbarTemplate = args => {
    return (_jsx(SnackbarProvider, { children: _jsx(SnackbarWrapper, { ...args }) }));
};
export const Default = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
};
export const Success = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Success',
        description: 'This is a success message',
        variant: 'success',
    },
};
export const Error = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Error',
        description: 'This is an error message',
        variant: 'error',
    },
};
export const Warning = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Warning',
        description: 'This is a warning message',
        variant: 'warning',
    },
};
export const Info = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Info',
        description: 'This is an informational message',
        variant: 'info',
    },
};
export const OnlyTitle = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Title very descriptive itself',
        description: undefined,
        variant: 'info',
    },
};
export const WithCancelAction = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Action Required',
        description: 'This message has an action',
        variant: 'warning',
        cancelAction: {
            text: 'Cancel action',
            onClick: () => alert('Undo action triggered!'),
        },
    },
};
export const WithLongText = {
    render: args => _jsx(SnackbarTemplate, { ...args }),
    args: {
        title: 'Action Required',
        description: 'This message has an action that is very descriptive and talkative and wow please stop writing',
        variant: 'warning',
        cancelAction: {
            text: 'Cancel action because it’s important',
            onClick: () => alert('Undo action triggered!'),
        },
    },
};
