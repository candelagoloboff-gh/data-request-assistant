import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from 'react-query';
import FormInputClassic from '../../../../design-system/Inputs/Classic/form';
import { Button, Stack, Typography } from '@mui/material';
import { isFormEmpty, useMockCount, useMockCountLoading, useMockCountReady, useMockService, } from './mocks';
import useCriteriaDrawer from '.';
const DEFAULT_VALUES = {
    name: '',
    description: '',
};
const DRAWER_TITLE = 'Criteria Configuration';
const DRAWER_DESCRIPTION = 'Set the criteria values for the segmentation group.';
const FormFields = () => (_jsxs(Stack, { gap: 2, children: [_jsx(FormInputClassic, { name: "name", inputProps: {
                label: 'Name',
                placeholder: 'Enter criteria name',
                fullWidth: true,
            } }), _jsx(FormInputClassic, { name: "description", inputProps: {
                label: 'Description',
                placeholder: 'Enter criteria description',
                fullWidth: true,
                multiline: true,
            } })] }));
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const meta = {
    title: 'Composed Components/Audience/Hooks/useCriteriaDrawer',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Story, {}) })),
    ],
    parameters: {
        docs: {
            description: {
                component: 'A hook that manages a drawer for configuring segmentation criteria. ' +
                    'It wraps content in a form with react-hook-form, provides confirm/cancel actions, ' +
                    'and shows a confirmation modal when the user tries to close with unsaved changes. ' +
                    'Optionally renders a collaborators-reach info alert in the drawer footer.',
            },
        },
    },
    argTypes: {
        title: {
            description: 'Title displayed in the drawer header.',
            control: 'text',
            table: { defaultValue: { summary: 'undefined' } },
        },
        description: {
            description: 'Description text rendered at the top of the drawer content.',
            control: 'text',
            table: { defaultValue: { summary: 'undefined' } },
        },
        disabled: {
            description: 'Disables the confirm and cancel buttons inside the drawer.',
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } },
        },
        loading: {
            description: 'Shows a loading indicator on the confirm button and disables interactions.',
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } },
        },
        onConfirm: {
            description: 'Callback fired when the user submits the form. Receives the form values as argument.',
        },
        cancelDescription: {
            description: 'Custom body text shown in the cancel confirmation modal. Falls back to a default translation when not provided.',
            control: 'text',
            table: { defaultValue: { summary: 'undefined' } },
        },
        onClose: {
            description: 'Callback fired when the drawer is closed (via overlay click or close button).',
        },
        collaboratorsReach: {
            description: 'Reactive collaborators-reach configuration passed at **hook level**. ' +
                'When provided, a footer alert shows the collaborator count, a loading skeleton, ' +
                'or an empty-state message depending on form and fetch state. ' +
                'Includes `service` and `queryKey` to power the selected-collaborators drawer.',
            control: false,
            table: {
                type: { summary: 'CriteriaCollaboratorsReachConfig<TValues>' },
            },
        },
    },
    args: {
        title: DRAWER_TITLE,
        description: DRAWER_DESCRIPTION,
        cancelDescription: undefined,
        disabled: false,
        loading: false,
        onConfirm: () => alert('[UseCriteriaDrawer] onConfirm'),
        onClose: () => alert('[UseCriteriaDrawer] onClose'),
    },
};
export default meta;
export const Default = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "Click the button to open the criteria drawer." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), criteriaDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Default usage with confirm and cancel actions.',
            },
        },
    },
};
export const Disabled = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                disabled: true,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The drawer opens with both action buttons disabled." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Disabled Drawer" }), criteriaDrawer] }));
    },
    args: { disabled: true },
    parameters: {
        docs: {
            description: {
                story: 'Drawer with disabled state — both confirm and cancel buttons are disabled.',
            },
        },
    },
};
export const Loading = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                loading: true,
                disabled: true,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The confirm button shows a loading indicator." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Loading Drawer" }), criteriaDrawer] }));
    },
    args: { loading: true },
    parameters: {
        docs: {
            description: {
                story: 'Drawer with loading state — the confirm button shows a spinner and interactions are disabled.',
            },
        },
    },
};
export const CollaboratorsReachEmpty = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({
            defaultValues: DEFAULT_VALUES,
            collaboratorsReach: {
                useCount: useMockCount,
                useService: useMockService,
                queryKey: 'criteria-collaborators',
                onViewCollaborators: () => console.debug('[CollaboratorsReach] View collaborators'),
                isFormEmpty,
            },
        });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows the empty-state collaborators alert. Fill a field to see the count." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), criteriaDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer with empty state — shows a "no collaborators selected" info alert when the form is empty.',
            },
        },
    },
};
export const CollaboratorsReachLoading = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({
            defaultValues: { name: 'Filled', description: '' },
            collaboratorsReach: {
                useCount: useMockCountLoading,
                useService: useMockService,
                queryKey: 'criteria-collaborators',
                onViewCollaborators: () => console.debug('[CollaboratorsReach] View collaborators'),
                isFormEmpty,
            },
        });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows a loading skeleton inside the info alert." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), criteriaDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer with loading state — shows a skeleton line inside the info alert.',
            },
        },
    },
};
export const CollaboratorsReachReady = {
    render: args => {
        const { criteriaDrawer, showCriteriaDrawer } = useCriteriaDrawer({
            defaultValues: { name: 'Filled', description: '' },
            collaboratorsReach: {
                useCount: useMockCountReady,
                useService: useMockService,
                queryKey: 'criteria-collaborators',
                onViewCollaborators: () => console.debug('[CollaboratorsReach] View collaborators'),
                isFormEmpty,
            },
        });
        const handleOpen = () => {
            showCriteriaDrawer({
                ...args,
                children: _jsx(FormFields, {}),
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows the collaborator count with a \"View collaborators\" action button. Clicking it opens the selected-collaborators drawer." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), criteriaDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer with ready state — shows the total collaborator count and a "View collaborators" button that opens the selected-collaborators drawer.',
            },
        },
    },
};
