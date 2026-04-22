import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Stack, Typography } from '@mui/material';
import { createMockService } from './mocks';
import useSelectedCollaboratorsDrawer from '.';
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const meta = {
    title: 'Composed Components/Audience/Hooks/useSelectedCollaboratorsDrawer',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Story, {}) })),
    ],
    parameters: {
        docs: {
            description: {
                component: 'A hook that manages a drawer for displaying selected collaborators. ' +
                    'It renders a virtualized, infinitely-scrollable list of users inside a ' +
                    '`DrawerV2`, with built-in search, loading skeletons, and an empty-state card. ' +
                    'The hook returns the drawer element together with `show` / `close` helpers.',
            },
        },
    },
    argTypes: {
        service: {
            description: 'Async function that fetches a page of collaborators. Receives `{ q?: string; limit: number; cursor?: string }` ' +
                'and must return `{ data: { cursor?: string; items: (User & { id: string })[] } }`.',
            table: {
                type: {
                    summary: '(params: ServiceParams) => Promise<ServiceResponse>',
                },
            },
        },
        queryKey: {
            description: 'Base key used by `useInfiniteQuery` to cache and invalidate the collaborator list. ' +
                'The search term is appended automatically.',
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        totalCount: {
            description: 'Total number of selected collaborators. Shown in the list header independently of how many items have been loaded.',
            control: 'number',
            table: {
                type: { summary: 'number' },
            },
        },
        onClose: {
            description: 'Callback fired when the drawer is closed (via the close button, overlay click, or the secondary back button).',
        },
    },
    args: {
        queryKey: 'selected-collaborators',
        totalCount: 50,
    },
};
export default meta;
const DrawerStory = ({ service, queryKey, totalCount, }) => {
    const { selectedCollaboratorsDrawer, showSelectedCollaboratorsDrawer } = useSelectedCollaboratorsDrawer();
    const handleOpen = () => {
        showSelectedCollaboratorsDrawer({
            service,
            queryKey,
            totalCount,
            onClose: () => console.debug('[useSelectedCollaboratorsDrawer] onClose'),
        });
    };
    return (_jsxs(Stack, { gap: 2, children: [_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), selectedCollaboratorsDrawer] }));
};
export const Default = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "Click the button to open the selected collaborators drawer. Scroll down to trigger infinite loading of additional pages." }), _jsx(DrawerStory, { service: createMockService(), queryKey: String(args.queryKey), totalCount: args.totalCount })] })),
    parameters: {
        docs: {
            description: {
                story: 'Default usage — the drawer displays a virtualized list of collaborators ' +
                    'with cursor-based pagination. Scrolling near the bottom automatically ' +
                    'fetches the next page.',
            },
        },
    },
};
export const EmptyResults = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer opens with zero collaborators, showing the empty-state card." }), _jsx(DrawerStory, { service: createMockService({ empty: true }), queryKey: String(args.queryKey), totalCount: 0 })] })),
    parameters: {
        docs: {
            description: {
                story: 'When the service returns no items the drawer renders a `StateCard` ' +
                    'with a "no results" message instead of the list.',
            },
        },
    },
};
