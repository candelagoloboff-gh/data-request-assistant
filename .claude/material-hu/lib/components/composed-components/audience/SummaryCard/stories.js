import { IconUsers } from '@tabler/icons-react';
import SummaryCard from './index';
const meta = {
    component: SummaryCard,
    title: 'Composed Components/Audience/Cards/Summary/SummaryCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Generic summary card that displays an icon, title, description and optional edit/delete actions. Used as the base building block for all audience summary card variants.',
            },
        },
    },
    argTypes: {
        Icon: {
            description: 'Tabler icon displayed inside the avatar.',
            table: {
                type: { summary: 'TablerIcon' },
            },
            control: false,
        },
        title: {
            description: 'Primary heading shown next to the avatar.',
            table: {
                type: { summary: 'string' },
            },
            control: { type: 'text' },
        },
        description: {
            description: 'Secondary text displayed below the title.',
            table: {
                type: { summary: 'string' },
            },
            control: { type: 'text' },
        },
        loading: {
            description: 'When `true`, replaces the description with a skeleton loader.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        onEdit: {
            description: 'Callback fired when the edit button is clicked. If omitted the button is not rendered.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        onDelete: {
            description: 'Callback fired when the delete button is clicked. If omitted the button is not rendered.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        disabled: {
            description: 'When `true`, disables both action buttons.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root container.',
            table: {
                type: { summary: 'SxProps' },
            },
            control: false,
        },
        slotProps: {
            description: 'Props forwarded to each inner slot of the card.',
            table: {
                type: { summary: 'SummaryCardSlotProps' },
            },
            control: false,
        },
    },
    args: {
        Icon: IconUsers,
        title: 'Selection criteria',
        description: 'Choose the collaborators you want to include.',
        onEdit: () => alert('[SummaryCard] onEdit'),
        onDelete: () => alert('[SummaryCard] onDelete'),
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
