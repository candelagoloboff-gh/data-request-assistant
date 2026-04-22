import { IconDownload, IconEdit, IconEye, IconTrash, } from '@tabler/icons-react';
import ImgAvatar1 from '../../../../../../static/avatar1.png';
export const textOptions = [
    {
        id: 'Only title',
        title: 'John Doe',
    },
    {
        id: 'Title & description',
        title: 'Jane Doe',
        description: 'Software Engineer at Tech Corp',
    },
    {
        id: 'Title & description & copetin',
        title: 'John Smith',
        description: 'Software Engineer at Tech Corp',
        copetin: 'Online',
    },
    {
        id: 'Title & description & copetin & date',
        title: 'John Doe',
        description: 'Software Engineer at Tech Corp',
        copetin: 'Online',
        date: new Date().toLocaleDateString(),
    },
];
export const avatarOptions = [
    {
        id: 'Circular avatar',
        src: ImgAvatar1,
    },
    {
        id: 'Square avatar',
        src: ImgAvatar1,
        variant: 'square',
    },
    {
        id: 'Text avatar',
        text: 'NC',
        color: 'primary',
    },
    {
        id: 'Icon avatar',
        Icon: IconTrash,
        color: 'error',
    },
    {
        id: 'Badge avatar',
        src: ImgAvatar1,
        withBadge: true,
        badgeProps: { color: 'success' },
    },
    {
        id: 'Colored text avatar',
        text: 'JD',
        color: 'success',
    },
];
export const sideContentOptions = [
    {
        id: 'Pill Default',
        sidePill: {
            label: 'Default (info)',
        },
    },
    {
        id: 'Pill Error',
        sidePill: {
            label: 'Inactive',
            type: 'error',
        },
    },
    {
        id: 'Pill Highlight',
        sidePill: {
            label: 'Working',
            type: 'highlight',
        },
    },
    {
        id: 'Text only',
        sideText: {
            title: '2 hours ago',
            copetin: 'Last activity',
        },
    },
    {
        id: 'Avatar group only',
        sideAvatars: {
            avatars: Array.from({ length: 5 }, (_, index) => ({
                src: ImgAvatar1,
                alt: `Avatar ${index + 1}`,
            })),
        },
    },
    {
        id: 'Pill + Text',
        sidePill: {
            label: 'Pending',
        },
        sideText: {
            title: '5 min ago',
            copetin: 'Updated',
        },
    },
    {
        id: 'Text + Avatars',
        sideText: {
            title: '3 members',
            copetin: 'Team',
        },
        sideAvatars: {
            avatars: Array.from({ length: 3 }, (_, index) => ({
                src: ImgAvatar1,
                alt: `Avatar ${index + 1}`,
            })),
        },
    },
    {
        id: 'Full combination',
        sidePill: {
            label: 'Completed',
            type: 'success',
        },
        sideText: {
            title: '2 hours ago',
            copetin: 'Finished',
        },
        sideAvatars: {
            avatars: Array.from({ length: 4 }, (_, index) => ({
                src: ImgAvatar1,
                alt: `Avatar ${index + 1}`,
            })),
        },
    },
];
export const actionConfigs = [
    {
        id: 'Single action',
        actions: {
            action: {
                Icon: IconTrash,
                'aria-label': 'Delete',
                onClick: () => alert('Delete'),
            },
        },
    },
    {
        id: 'Two actions',
        actions: {
            action: {
                Icon: IconEdit,
                'aria-label': 'Edit',
                onClick: () => alert('Edit'),
            },
            action2: {
                Icon: IconTrash,
                'aria-label': 'Delete',
                onClick: () => alert('Delete'),
            },
        },
    },
    {
        id: 'Multiple actions with different variants',
        actions: {
            action: {
                Icon: IconEye,
                variant: 'primary',
                onClick: () => alert('View'),
            },
            action2: {
                Icon: IconDownload,
                variant: 'secondary',
                onClick: () => alert('Download'),
            },
        },
    },
];
export const itemStates = [
    {
        id: 'Default',
    },
    {
        id: 'Disabled',
        disabled: true,
    },
    {
        id: 'Selected',
        selected: true,
    },
    {
        id: 'Clickable (hover to see effect)',
    },
    {
        id: 'Loading',
        loading: true,
    },
];
