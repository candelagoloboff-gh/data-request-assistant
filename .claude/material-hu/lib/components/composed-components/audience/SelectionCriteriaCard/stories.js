import { IconBuildingSkyscraper, IconUsers, IconUsersGroup, } from '@tabler/icons-react';
import SelectionCriteriaCard from './index';
const iconMap = {
    IconUsers,
    IconBuildingSkyscraper,
    IconUsersGroup,
};
const meta = {
    component: SelectionCriteriaCard,
    title: 'Composed Components/Audience/Cards/Criteria/SelectionCriteriaCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Generic criteria card that displays an icon, title, description, an optional info pill with tooltip and an optional chevron arrow. Used as the base building block for all audience criteria card variants.',
            },
        },
    },
    argTypes: {
        onClick: {
            description: 'Callback fired when the card is clicked.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        Icon: {
            description: 'Tabler icon displayed inside the avatar on the left side of the card.',
            control: 'select',
            options: Object.keys(iconMap),
            mapping: iconMap,
            table: {
                type: { summary: 'TablerIcon' },
            },
        },
        title: {
            description: 'Primary text shown as the card heading.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        description: {
            description: 'Secondary text displayed below the title.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        info: {
            description: 'Optional text rendered as a pill badge on the right side of the card.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        infoTooltip: {
            description: 'Optional tooltip text shown when hovering the info pill badge.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        withArrow: {
            description: 'When `true`, renders a chevron arrow on the right side of the card.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root `CardContainer`.',
            control: false,
            table: {
                type: { summary: 'SxProps' },
            },
        },
        slotProps: {
            description: 'Props forwarded to each inner slot: root (CardContainer), avatar (Avatar), title (Title), pills (Pills).',
            control: false,
            table: {
                type: { summary: 'SelectionCriteriaCardSlotProps' },
                defaultValue: { summary: '{}' },
            },
        },
    },
    args: {
        onClick: () => alert('[SelectionCriteriaCard] onClick'),
    },
};
export default meta;
export const Default = {
    args: {
        Icon: IconUsers,
        title: 'Selection criteria',
        description: 'Choose the collaborators you want to include.',
        info: 'Automatic update',
        infoTooltip: 'Tooltip: Automatic update',
    },
};
export const WithoutInfo = {
    args: {
        Icon: IconBuildingSkyscraper,
        title: 'Entire community',
        description: 'Select all collaborators who are part of your community.',
    },
};
