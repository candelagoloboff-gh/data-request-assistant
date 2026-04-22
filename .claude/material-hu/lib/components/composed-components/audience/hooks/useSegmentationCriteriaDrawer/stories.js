import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from 'react-query';
import { emptyCondition } from '../../../ConditionGroup/constants';
import { fieldItems, valueItems, } from '../../../ConditionGroup/mocks';
import { Button, Stack, Typography } from '@mui/material';
import { useMockCount, useMockCountLoading, useMockService } from './mocks';
import useSegmentationCriteriaDrawer from '.';
const DEFAULT_VALUES = {
    conditions: [emptyCondition],
};
const INPUT_PROPS = {
    slotProps: {
        conditionLine: {
            fieldSelectorItems: fieldItems,
            valueSelectorItems: valueItems,
        },
    },
};
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const meta = {
    title: 'Composed Components/Audience/Hooks/useSegmentationCriteriaDrawer',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Story, {}) })),
    ],
    parameters: {
        docs: {
            description: {
                component: 'A hook that manages a segmentation criteria drawer. ' +
                    'It wraps a `FormConditionGroup` inside a `useCriteriaDrawer`, providing ' +
                    'pre-configured translated title, description, and cancel confirmation text. ' +
                    'Users can add, edit, and remove condition rules to define audience segmentation.',
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
            description: 'Callback fired when the user submits the form. Receives the segmentation criteria values.',
        },
        onClose: {
            description: 'Callback fired when the drawer is closed (via overlay click, close button, or cancel confirmation).',
        },
        inputProps: {
            description: 'Props forwarded to the underlying `ConditionGroup` component (excluding `value` and `onChange`, which are managed by the form).',
            control: 'object',
            table: {
                type: {
                    summary: 'Omit<ConditionGroupProps<FieldItemType, ValueItemType>, "value" | "onChange">',
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
const CollaboratorsReachStory = ({ args, reachLoading = false, }) => {
    const { segmentationCriteriaDrawer, showSegmentationCriteriaDrawer } = useSegmentationCriteriaDrawer({
        defaultValues: DEFAULT_VALUES,
        collaboratorsReach: {
            useCount: reachLoading ? useMockCountLoading : useMockCount,
            useService: useMockService,
            queryKey: 'segmentation-collaborators',
            onViewCollaborators: () => console.debug('[CollaboratorsReach] View collaborators'),
        },
    });
    const handleOpen = () => {
        showSegmentationCriteriaDrawer({
            ...args,
            onConfirm: (values) => console.debug('[useSegmentationCriteriaDrawer] onConfirm', values),
            onClose: () => console.debug('[useSegmentationCriteriaDrawer] onClose'),
            inputProps: INPUT_PROPS,
        });
    };
    return (_jsxs(Stack, { gap: 2, children: [_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), segmentationCriteriaDrawer] }));
};
export const Default = {
    render: args => {
        const { segmentationCriteriaDrawer, showSegmentationCriteriaDrawer } = useSegmentationCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showSegmentationCriteriaDrawer({
                ...args,
                onConfirm: (values) => console.debug('[useSegmentationCriteriaDrawer] onConfirm', values),
                onClose: () => console.debug('[useSegmentationCriteriaDrawer] onClose'),
                inputProps: INPUT_PROPS,
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "Click the button to open the segmentation criteria drawer." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Drawer" }), segmentationCriteriaDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Default usage with segmentation condition rules, confirm and cancel actions.',
            },
        },
    },
};
export const Loading = {
    render: args => {
        const { segmentationCriteriaDrawer, showSegmentationCriteriaDrawer } = useSegmentationCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showSegmentationCriteriaDrawer({
                ...args,
                loading: true,
                disabled: true,
                onConfirm: (values) => console.debug('[useSegmentationCriteriaDrawer] onConfirm', values),
                onClose: () => console.debug('[useSegmentationCriteriaDrawer] onClose'),
                inputProps: INPUT_PROPS,
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The confirm button shows a loading indicator." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Loading Drawer" }), segmentationCriteriaDrawer] }));
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
export const Disabled = {
    render: args => {
        const { segmentationCriteriaDrawer, showSegmentationCriteriaDrawer } = useSegmentationCriteriaDrawer({ defaultValues: DEFAULT_VALUES });
        const handleOpen = () => {
            showSegmentationCriteriaDrawer({
                ...args,
                disabled: true,
                onConfirm: (values) => console.debug('[useSegmentationCriteriaDrawer] onConfirm', values),
                onClose: () => console.debug('[useSegmentationCriteriaDrawer] onClose'),
                inputProps: INPUT_PROPS,
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [_jsx(Typography, { variant: "globalS", children: "The drawer opens with both action buttons disabled." }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Disabled Drawer" }), segmentationCriteriaDrawer] }));
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
export const WithCollaboratorsReach = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows an info alert with the collaborator count. When no conditions are selected, an empty-state message is shown instead." }), _jsx(CollaboratorsReachStory, { args: args })] })),
    parameters: {
        docs: {
            description: {
                story: 'Drawer with `collaboratorsReach` configured. The footer alert shows ' +
                    '"no collaborators" when the form is empty, a skeleton while loading, ' +
                    'or the total count with a "View collaborators" button when ready.',
            },
        },
    },
};
export const WithCollaboratorsReachLoading = {
    render: args => (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", children: "The drawer footer shows a loading skeleton inside the info alert." }), _jsx(CollaboratorsReachStory, { args: args, reachLoading: true })] })),
    parameters: {
        docs: {
            description: {
                story: 'Drawer with `collaboratorsReach` in loading state — the footer alert displays a skeleton line.',
            },
        },
    },
};
