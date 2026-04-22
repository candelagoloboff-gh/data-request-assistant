import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-console */
import List from '../../List';
import ListItem from '../../List/components/ListItem';
import { IconArchive, IconTrash, IconUser } from '@tabler/icons-react';
import SocialHeader from '.';
const meta = {
    title: 'Design System/Header/Social',
    component: SocialHeader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Header variant for social/profile views. Identical to TaskFocus but adds a required ' +
                    'Avatar between the back button and the title. Composes shared Header building blocks ' +
                    '(HeaderContainer, HeaderInfo, HeaderActions) with per-component loading skeletons.',
            },
        },
    },
    argTypes: {
        avatar: {
            description: 'Avatar identity props. At least one of `src`, `text`, or `Icon` should be provided. ' +
                'Additional customisation via `slotProps.avatar`.',
            control: 'object',
            table: {
                type: { summary: "Pick<AvatarProps, 'src' | 'text' | 'Icon'>" },
            },
        },
        title: {
            description: 'Main heading displayed next to the avatar.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        pillLabel: {
            description: 'Optional status label rendered as a small pill after the title.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        mainActions: {
            description: 'Up to 2 primary action buttons. Each item renders as a `Button` or, when `dropdown: true`, as a `Dropdown`.',
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
            description: 'When true every sub-component renders its own skeleton placeholder, including a circular skeleton for the avatar.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        slotProps: {
            description: 'Override props for internal slots: `root` (header container StackProps), `title` (TitleProps), ' +
                '`pill` (PillsProps without label), `extraActions` ({ closeDropdownOnClick }), and `avatar` (Partial<AvatarProps>).',
            control: false,
            table: {
                type: {
                    summary: 'HeaderSlotProps & { avatar?: Partial<AvatarProps> }',
                },
            },
        },
    },
    args: {
        onClose: () => alert('close'),
        onBack: () => alert('back'),
        avatar: {
            src: 'https://i.pravatar.cc/150?img=3',
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Jane Cooper',
        pillLabel: 'Active',
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
                description: 'Remove permanently',
                onClick: () => console.log('delete clicked'),
                avatar: { Icon: IconTrash },
            },
            {
                key: 'archive',
                title: 'Archive',
                description: 'Move to archives',
                onClick: () => console.log('archive clicked'),
                avatar: { Icon: IconArchive },
            },
        ],
    },
};
export const Loading = {
    args: {
        title: '',
        loading: true,
    },
};
export const WithTextAvatar = {
    args: {
        title: 'Jane Cooper',
        pillLabel: 'Active',
        avatar: {
            text: 'JC',
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
export const WithIconAvatar = {
    args: {
        title: 'Unknown User',
        pillLabel: 'Pending',
        avatar: {
            Icon: IconUser,
        },
    },
};
export const MinimalActions = {
    args: {
        title: 'Jane Cooper',
        pillLabel: 'Done',
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
        title: 'Jane Cooper',
        pillLabel: 'Active',
        mainActions: [
            {
                key: 'open',
                label: 'Open',
                dropdown: true,
                hasIcon: false,
                buttonProps: {
                    variant: 'primary',
                },
                children: (_jsxs(List, { children: [_jsx(ListItem, { onClick: () => alert('click 1'), text: { title: 'Option 1' } }), _jsx(ListItem, { onClick: () => alert('click 2'), text: { title: 'Option 2' } })] })),
            },
        ],
    },
};
export const NoActions = {
    args: {
        title: 'Jane Cooper',
        pillLabel: 'Active',
    },
};
export const NoPill = {
    args: {
        title: 'Jane Cooper',
        mainActions: [
            {
                key: 'action1',
                children: 'Primary Action',
                variant: 'contained',
            },
        ],
    },
};
export const WithLargeTitle = {
    args: {
        title: 'This is a very long name that should be truncated This is a very long name that should be truncated',
        pillLabel: 'Active',
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
export const JustBack = {
    args: {
        title: 'Jane Cooper',
        onClose: undefined,
    },
};
export const WithCustomAvatarSlotProps = {
    args: {
        title: 'Jane Cooper',
        pillLabel: 'Active',
        avatar: {
            text: 'JC',
        },
        slotProps: {
            avatar: {
                size: 'small',
                color: 'primary',
            },
        },
    },
};
