import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Stack, Typography } from '@mui/material';
import { mockDataParser, useMockUsersQuery } from '../../mocks';
import { useMockCount, useMockCountLoading, useMockService } from './mocks';
import useIndividualCriteriaDrawer from '.';
const DEFAULT_VALUES = {
    userIds: new Set(),
    search: '',
};
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const meta = {
    title: 'Composed Components/Audience/Hooks/useIndividualCriteriaDrawer',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Story, {}) })),
    ],
    parameters: {
        docs: {
            description: {
                component: 'A hook that manages an individual collaborator selection drawer. ' +
                    'It wraps a `FormIndividualSelection` inside a `useCriteriaDrawer`, providing ' +
                    'pre-configured translated title, description, and cancel confirmation text. ' +
                    'Users can search and select specific collaborators from a paginated list.',
            },
        },
    },
    argTypes: {
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
            description: 'Callback fired when the user submits the form. Receives the individual criteria values (selected user IDs and search text).',
        },
        onClose: {
            description: 'Callback fired when the drawer is closed (via overlay click, close button, or cancel confirmation).',
        },
        inputProps: {
            description: 'Props forwarded to the underlying `IndividualSelection` component (excluding `value`, `onChange`, `searchValue`, and `onSearch`, which are managed by the form).',
            control: 'object',
            table: {
                type: {
                    summary: 'Omit<IndividualSelectionProps, "value" | "onChange" | "searchValue" | "onSearch">',
                },
            },
        },
        collaboratorsReach: {
            description: 'Reactive collaborators-reach configuration passed at **hook level**. ' +
                'When provided, a footer alert shows the collaborator count, a loading skeleton, ' +
                'or an empty-state message depending on form and fetch state. ' +
                'Includes `service` and `queryKey` to power the selected-collaborators drawer.',
            control: false,
            table: {
                type: { summary: 'CollaboratorsReachProps' },
            },
        },
    },
    args: {
        disabled: false,
        loading: false,
    },
};
export default meta;
const IndividualDrawerStory = ({ args, overrides, }) => {
    const [search, setSearch] = useState('');
    const usersQuery = useMockUsersQuery(search);
    const { individualCriteriaDrawer, showIndividualCriteriaDrawer, individualCriteriaForm, } = useIndividualCriteriaDrawer({
        defaultValues: DEFAULT_VALUES,
        inputProps: {
            usersQuery,
            usersQueryDataParser: mockDataParser,
        },
    });
    useEffect(() => {
        const subscription = individualCriteriaForm.watch(formValues => {
            setSearch(formValues.search ?? '');
        });
        return () => subscription.unsubscribe();
    }, [individualCriteriaForm]);
    const handleOpen = () => {
        showIndividualCriteriaDrawer({
            ...args,
            ...overrides,
            onConfirm: (values) => console.debug('[useIndividualCriteriaDrawer] onConfirm', values),
            onClose: () => console.debug('[useIndividualCriteriaDrawer] onClose'),
        });
    };
    return (_jsxs(Stack, { gap: 2, children: [_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), individualCriteriaDrawer] }));
};
export const Default = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "Click the button to open the individual criteria drawer." }), _jsx(IndividualDrawerStory, { args: args })] })),
    parameters: {
        docs: {
            description: {
                story: 'Default usage with collaborator search and selection, confirm and cancel actions.',
            },
        },
    },
};
export const Loading = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The confirm button shows a loading indicator." }), _jsx(IndividualDrawerStory, { args: args, overrides: { loading: true, disabled: true } })] })),
    args: { loading: true },
    parameters: {
        docs: {
            description: {
                story: 'Drawer with loading state — the confirm button shows a spinner and interactions are disabled.',
            },
        },
    },
};
export const Disabled = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer opens with both action buttons disabled." }), _jsx(IndividualDrawerStory, { args: args, overrides: { disabled: true } })] })),
    args: { disabled: true },
    parameters: {
        docs: {
            description: {
                story: 'Drawer with disabled state — both confirm and cancel buttons are disabled.',
            },
        },
    },
};
const IndividualDrawerWithReachStory = ({ args, reachLoading = false, }) => {
    const [search, setSearch] = useState('');
    const usersQuery = useMockUsersQuery(search);
    const { individualCriteriaDrawer, showIndividualCriteriaDrawer, individualCriteriaForm, } = useIndividualCriteriaDrawer({
        defaultValues: DEFAULT_VALUES,
        inputProps: {
            usersQuery,
            usersQueryDataParser: mockDataParser,
        },
        collaboratorsReach: {
            useCount: reachLoading ? useMockCountLoading : useMockCount,
            useService: useMockService,
            queryKey: 'individual-collaborators',
            onViewCollaborators: () => console.debug('[CollaboratorsReach] View collaborators'),
        },
    });
    useEffect(() => {
        const subscription = individualCriteriaForm.watch(formValues => {
            setSearch(formValues.search ?? '');
        });
        return () => subscription.unsubscribe();
    }, [individualCriteriaForm]);
    const handleOpen = () => {
        showIndividualCriteriaDrawer({
            ...args,
            onConfirm: (values) => console.debug('[useIndividualCriteriaDrawer] onConfirm', values),
            onClose: () => console.debug('[useIndividualCriteriaDrawer] onClose'),
        });
    };
    return (_jsxs(Stack, { gap: 2, children: [_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), individualCriteriaDrawer] }));
};
export const WithCollaboratorsReach = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows an info alert with the collaborator count. When no users are selected, an empty-state message is shown instead." }), _jsx(IndividualDrawerWithReachStory, { args: args })] })),
    parameters: {
        docs: {
            description: {
                story: 'Drawer with `collaboratorsReach` configured. The footer alert shows ' +
                    '"no collaborators" when no users are selected, a skeleton while loading, ' +
                    'or the total count with a "View collaborators" button when ready.',
            },
        },
    },
};
export const WithCollaboratorsReachLoading = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows a loading skeleton inside the info alert." }), _jsx(IndividualDrawerWithReachStory, { args: args, reachLoading: true })] })),
    parameters: {
        docs: {
            description: {
                story: 'Drawer with `collaboratorsReach` in loading state — the footer alert displays a skeleton line.',
            },
        },
    },
};
