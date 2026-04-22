import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import TaskFocusLayout from './index';
const meta = {
    title: 'Composed Components/TaskFocusLayout',
    component: TaskFocusLayout,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        slotProps: {
            control: 'object',
            description: 'Slot props for customizing layout and header, e.g. root (StackProps) and header (TaskFocusHeaderProps).',
            table: {
                type: {
                    summary: '{ root?: StackProps; header: TaskFocusHeaderProps }',
                },
            },
        },
        children: {
            control: false,
            description: 'Content of the layout to display under the header.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
    },
};
export default meta;
export const Default = {
    args: {
        slotProps: {
            root: {
                sx: { background: '#fafbfc', minHeight: 400, minWidth: 300, p: 0 },
            },
            header: {
                title: 'Task Focus Title',
                onClose: () => alert('Close clicked!'),
            },
        },
        children: (_jsx(Stack, { sx: { p: 3 }, children: _jsxs(Typography, { children: ["This is the body content of the ", _jsx("b", { children: "TaskFocusLayout" }), ". Use this layout to keep your users focused on a single important task."] }) })),
    },
};
export const WithCustomHeader = {
    args: {
        slotProps: {
            root: {
                sx: { background: '#e3f2fd', minHeight: 400, minWidth: 300, p: 0 },
            },
            header: {
                title: 'Custom Task',
                onClose: () => alert('Custom close clicked!'),
                pillProps: {
                    label: 'In Progress',
                    type: 'warning',
                },
                mainActions: [
                    {
                        key: 'action1',
                        children: 'Action 1',
                        onClick: () => alert('action1 clicked'),
                    },
                ],
            },
        },
        children: (_jsx(Stack, { sx: { p: 3 }, children: _jsxs(Typography, { variant: "body1", children: ["Try customizing the ", _jsx("em", { children: "TaskFocusHeader" }), " using", ' ', _jsx("code", { children: "slotProps.header" }), "."] }) })),
    },
};
