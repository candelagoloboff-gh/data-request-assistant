import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-console */
import List from '../../List';
import ListItem from '../../List/components/ListItem';
import { IconArchive, IconTrash } from '@tabler/icons-react';
import TaskFocusHeader from '.';
const meta = {
    title: 'Design System/Header/TaskFocus',
    component: TaskFocusHeader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Header variant for task-focused views. Displays a title with an optional status pill, ' +
                    'up to 2 primary action buttons, an overflow "More actions" dropdown, and back/close navigation. ' +
                    'Composes shared Header building blocks (HeaderContainer, HeaderInfo, HeaderActions). ' +
                    'When `loading` is true, renders the TaskFocusSkeleton.',
            },
        },
    },
    argTypes: {
        title: {
            description: 'Main heading text.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        pillLabel: {
            description: 'Status label rendered as a small pill after the title.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        pillProps: {
            description: '**Deprecated.** Use `pillLabel` for the label and `slotProps.pill` for customisation.',
            control: 'object',
            table: {
                type: { summary: 'PillsProps' },
            },
        },
        mainActions: {
            description: 'Up to 2 primary action buttons. Each item renders as a `Button` or, when `dropdown: true`, as a `Dropdown`. Excess items are ignored.',
            control: false,
            table: { type: { summary: 'HeaderMainAction[]' } },
        },
        extraActions: {
            description: 'Overflow actions shown inside a "More actions" dropdown menu.',
            control: false,
            table: { type: { summary: 'HeaderExtraAction[]' } },
        },
        onBack: {
            description: 'Callback for the back arrow button. If omitted the button is not rendered.',
            table: { type: { summary: '() => void' } },
            control: false,
        },
        onClose: {
            description: 'Callback for the close (X) button. If omitted the button is not rendered.',
            table: { type: { summary: '() => void' } },
            control: false,
        },
        copyLinkButton: {
            description: 'Slot for a copy-link button that appears on hover next to the title area.',
            control: false,
            table: { type: { summary: 'React.ReactNode' } },
        },
        loading: {
            description: 'When true renders the TaskFocusSkeleton placeholder.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        slotProps: {
            description: 'Override props for internal slots: `root` (header container StackProps), `title` (TitleProps), ' +
                '`pill` (PillsProps without label), `extraActions` ({ closeDropdownOnClick }).',
            control: false,
            table: { type: { summary: 'HeaderSlotProps' } },
        },
    },
    args: {
        onClose: () => alert('close'),
        onBack: () => alert('back'),
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Task Title',
        pillProps: {
            label: 'In Progress',
            type: 'warning',
        },
        mainActions: [
            {
                key: 'action1',
                children: 'Action 1',
                onClick: () => console.log('action1 clicked'),
            },
            {
                key: 'action2',
                children: 'Action 2',
                onClick: () => console.log('action2 clicked'),
            },
        ],
        extraActions: [
            {
                key: 'delete',
                title: 'Delete',
                description: 'Remove this task permanently',
                onClick: () => console.log('delete clicked'),
                avatar: { Icon: IconTrash },
            },
            {
                key: 'archive',
                title: 'Archive',
                description: 'Move this task to archives',
                onClick: () => console.log('archive clicked'),
                avatar: { Icon: IconArchive },
            },
        ],
    },
};
export const MinimalActions = {
    args: {
        title: 'Simple Task',
        pillProps: {
            label: 'Done',
            type: 'success',
        },
        mainActions: [
            {
                key: 'save',
                children: 'Save',
                variant: 'contained',
            },
        ],
    },
};
export const DropdownMainActions = {
    args: {
        title: 'Simple Task',
        pillProps: {
            label: 'Done',
            type: 'success',
        },
        mainActions: [
            {
                key: 'save',
                label: 'Open',
                dropdown: true,
                hasIcon: false,
                buttonProps: {
                    variant: 'primary',
                },
                children: (_jsxs(List, { children: [_jsx(ListItem, { onClick: () => alert('click 1'), text: { title: 'Opción 1' } }), _jsx(ListItem, { onClick: () => alert('click 2'), text: { title: 'Opción 2' } })] })),
            },
        ],
    },
};
export const NoActions = {
    args: {
        title: 'View Only Task',
        pillProps: {
            label: 'Completed',
            type: 'success',
        },
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const NoPill = {
    args: {
        title: 'Task Without Status',
        mainActions: [
            {
                key: 'action1',
                children: 'Primary Action',
                variant: 'contained',
            },
            {
                key: 'action2',
                children: 'Secondary Action',
            },
        ],
        extraActions: [
            {
                key: 'archive',
                title: 'Archive',
                description: 'Move this task to archives',
                onClick: () => console.log('archive clicked'),
            },
        ],
    },
};
export const NoMainOrExtraActions = {
    args: {
        title: 'Task Without Actions',
        pillProps: {
            label: 'In Progress',
            type: 'info',
        },
    },
};
export const JustBack = {
    args: {
        title: 'Task Just Back',
        onClose: undefined,
    },
};
export const WithLargeTitle = {
    args: {
        pillLabel: 'In Progress',
        title: 'This is a very long title that should be truncated This is a very long title that should be truncated',
        slotProps: {
            title: {
                withEllipsis: true,
                overflow: 'tooltip',
                sx: {
                    width: '270px',
                },
            },
        },
    },
};
