import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconHeart, IconSettings, IconUser } from '@tabler/icons-react';
import UserCard from '.';
const meta = {
    component: UserCard,
    title: 'Composed Components/UserCard',
    tags: ['autodocs'],
    argTypes: {
        sizeProps: {
            control: 'object',
            description: 'Size configuration for the card',
        },
        labels: {
            control: 'object',
            description: 'Labels for copy functionality (required for i18n)',
        },
        actionButtons: {
            control: 'object',
            description: 'Array of action buttons (max 3) displayed with equal width',
        },
        copyProps: {
            control: 'object',
            description: 'Configuration for the copy email functionality',
        },
        headerBackgroundColor: {
            control: 'color',
            description: 'Header background color',
        },
        stopPropagation: {
            control: 'boolean',
            description: 'Whether to stop click propagation on the card',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
A reusable card component for displaying user information.

## Features
- **Configurable dimensions** with automatic text overflow handling (ellipsis)
- **Customizable header** background color
- **Copy email** to clipboard functionality with customizable labels
- **Multiple action buttons** (up to 3) with equal width distribution
- **Generic user type** support - pass user objects with additional properties
        `,
            },
        },
    },
};
export default meta;
const defaultLabels = {
    copyEmailLabel: 'Copy email to clipboard',
    copiedLabel: 'Copied!',
};
const sampleUser = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    profilePicture: '',
    employeeInternalId: 'EMP-12345',
};
const userWithLongData = {
    id: '2',
    firstName: 'Alexander',
    lastName: 'Bartholomew-Richardson',
    email: 'alexander.bartholomew-richardson@very-long-company-domain.example.com',
    profilePicture: '',
    employeeInternalId: 'EMP-VERY-LONG-ID-123456789',
};
const userWithProfilePicture = {
    id: '3',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=5',
};
export const Default = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Go to profile',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Default UserCard with a single action button.',
            },
        },
    },
};
export const SingleButton = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'View Profile',
                onClick: user => alert(`View profile: ${user.id}`),
                variant: 'primary',
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with a single primary action button.',
            },
        },
    },
};
export const TwoButtons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Message',
                onClick: user => alert(`Send message to: ${user.email}`),
                variant: 'secondary',
            },
            {
                label: 'Profile',
                onClick: user => alert(`View profile: ${user.id}`),
                variant: 'primary',
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with two action buttons. Both buttons share equal horizontal space.',
            },
        },
    },
};
export const ThreeButtons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Call',
                onClick: user => alert(`Calling ${user.firstName}...`),
                variant: 'tertiary',
            },
            {
                label: 'Message',
                onClick: user => alert(`Send message to: ${user.email}`),
                variant: 'secondary',
            },
            {
                label: 'Profile',
                onClick: user => alert(`View profile: ${user.id}`),
                variant: 'primary',
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with three action buttons (maximum). All buttons share equal horizontal space.',
            },
        },
    },
};
export const ThreeButtonsWithIcons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Profile',
                onClick: user => alert(`View profile: ${user.id}`),
                variant: 'secondary',
                buttonProps: {
                    startIcon: _jsx(IconUser, { size: 18 }),
                },
            },
            {
                label: 'Settings',
                onClick: user => alert(`Open settings for: ${user.firstName}`),
                variant: 'secondary',
                buttonProps: {
                    startIcon: _jsx(IconSettings, { size: 18 }),
                },
            },
            {
                label: 'Favorite',
                onClick: user => alert(`Added ${user.firstName} to favorites`),
                variant: 'secondary',
                buttonProps: {
                    startIcon: _jsx(IconHeart, { size: 18 }),
                },
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with three buttons with icons.',
            },
        },
    },
};
export const ButtonVariants = {
    render: () => (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 2,
            flexWrap: 'wrap',
        }, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Primary variant" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, actionButtons: [
                            {
                                label: 'Primary Action',
                                onClick: user => alert(`Primary: ${user.id}`),
                                variant: 'primary',
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Secondary variant (default)" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, actionButtons: [
                            {
                                label: 'Secondary Action',
                                onClick: user => alert(`Secondary: ${user.id}`),
                                variant: 'secondary',
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Tertiary variant" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, actionButtons: [
                            {
                                label: 'Tertiary Action',
                                onClick: user => alert(`Tertiary: ${user.id}`),
                                variant: 'tertiary',
                            },
                        ] })] })] })),
    parameters: {
        docs: {
            description: {
                story: 'Shows all available button variants: primary, secondary, and tertiary.',
            },
        },
    },
};
export const MixedButtonVariants = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Cancel',
                onClick: () => alert('Cancelled'),
                variant: 'tertiary',
            },
            {
                label: 'Save',
                onClick: user => alert(`Saved ${user.firstName}`),
                variant: 'primary',
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with mixed button variants - tertiary for cancel and primary for save.',
            },
        },
    },
};
export const WithProfilePicture = {
    args: {
        user: userWithProfilePicture,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Go to profile',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard displaying a profile picture instead of initials.',
            },
        },
    },
};
export const LongTextOverflow = {
    args: {
        user: userWithLongData,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Go to profile',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates text truncation with ellipsis for long names, emails, and employee IDs.',
            },
        },
    },
};
export const CustomWidth = {
    render: () => (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 2,
            p: 2,
            overflow: 'auto',
        }, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 250px" }), _jsx(UserCard, { user: userWithLongData, labels: defaultLabels, sizeProps: { width: 250 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 312px (default)" }), _jsx(UserCard, { user: userWithLongData, labels: defaultLabels, sizeProps: { width: 312 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 400px" }), _jsx(UserCard, { user: userWithLongData, labels: defaultLabels, sizeProps: { width: 400 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] })] })),
    parameters: {
        docs: {
            description: {
                story: 'Shows how the card adapts to different widths while maintaining proper text overflow handling.',
            },
        },
    },
};
export const ThreeButtonsInDifferentWidths = {
    render: () => (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 2,
            p: 2,
            overflow: 'auto',
            alignItems: 'flex-start',
        }, children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 280px" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { width: 280 }, actionButtons: [
                            { label: 'Call', variant: 'tertiary' },
                            { label: 'Message', variant: 'secondary' },
                            { label: 'Profile', variant: 'primary' },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 350px" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { width: 350 }, actionButtons: [
                            { label: 'Call', variant: 'tertiary' },
                            { label: 'Message', variant: 'secondary' },
                            { label: 'Profile', variant: 'primary' },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Width: 420px" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { width: 420 }, actionButtons: [
                            { label: 'Call', variant: 'tertiary' },
                            { label: 'Message', variant: 'secondary' },
                            { label: 'Profile', variant: 'primary' },
                        ] })] })] })),
    parameters: {
        docs: {
            description: {
                story: 'Shows how three buttons scale proportionally across different card widths.',
            },
        },
    },
};
export const CustomLabels = {
    args: {
        user: sampleUser,
        labels: {
            copyEmailLabel: 'Copiar correo al portapapeles',
            copiedLabel: '¡Copiado!',
        },
        actionButtons: [
            {
                label: 'Ver perfil',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with custom Spanish labels for internationalization.',
            },
        },
    },
};
export const CustomHeaderColor = {
    render: () => (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 2,
        }, children: [_jsx(UserCard, { user: sampleUser, labels: defaultLabels, headerBackgroundColor: "#1976d2", actionButtons: [
                    {
                        label: 'Profile',
                        onClick: user => alert(`Profile: ${user.id}`),
                    },
                ] }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, headerBackgroundColor: "#9c27b0", actionButtons: [
                    {
                        label: 'Profile',
                        onClick: user => alert(`Profile: ${user.id}`),
                    },
                ] }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, headerBackgroundColor: "#2e7d32", actionButtons: [
                    {
                        label: 'Profile',
                        onClick: user => alert(`Profile: ${user.id}`),
                    },
                ] })] })),
    parameters: {
        docs: {
            description: {
                story: 'UserCards with custom header background colors.',
            },
        },
    },
};
export const WithoutActionButtons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard without any action buttons.',
            },
        },
    },
};
export const WithoutCopyButton = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        copyProps: {
            show: false,
        },
        actionButtons: [
            {
                label: 'Go to profile',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard without the copy email button.',
            },
        },
    },
};
export const WithoutEmail = {
    args: {
        user: {
            id: '4',
            firstName: 'User',
            lastName: 'NoEmail',
        },
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Go to profile',
                onClick: user => alert(`Navigate to profile for user: ${user.id}`),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard for a user without an email address.',
            },
        },
    },
};
export const DifferentAvatarSizes = {
    render: () => (_jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", alignItems: "flex-start", children: [_jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Avatar: small" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { avatarSize: 'small', width: 280 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Avatar: medium" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { avatarSize: 'medium', width: 300 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "caption", children: "Avatar: large (default)" }), _jsx(UserCard, { user: sampleUser, labels: defaultLabels, sizeProps: { avatarSize: 'large', width: 312 }, actionButtons: [
                            {
                                label: 'Profile',
                                onClick: user => alert(`Profile: ${user.id}`),
                            },
                        ] })] })] })),
    parameters: {
        docs: {
            description: {
                story: 'Shows UserCard with different avatar sizes. Text widths are automatically recalculated.',
            },
        },
    },
};
export const InteractiveDemo = {
    render: () => {
        const [copiedEmail, setCopiedEmail] = useState(null);
        const [lastAction, setLastAction] = useState(null);
        return (_jsxs(Stack, { spacing: 2, children: [_jsx(UserCard, { user: sampleUser, labels: defaultLabels, copyProps: {
                        onCopy: email => setCopiedEmail(email),
                    }, actionButtons: [
                        {
                            label: 'Call',
                            onClick: user => setLastAction(`Called ${user.firstName}`),
                            variant: 'tertiary',
                        },
                        {
                            label: 'Message',
                            onClick: user => setLastAction(`Messaged ${user.email}`),
                            variant: 'secondary',
                        },
                        {
                            label: 'Profile',
                            onClick: user => setLastAction(`Opened profile for ${user.id}`),
                            variant: 'primary',
                        },
                    ] }), copiedEmail && (_jsxs(Typography, { variant: "body2", color: "success.main", children: ["Last copied email: ", copiedEmail] })), lastAction && (_jsxs(Typography, { variant: "body2", color: "info.main", children: ["Last action: ", lastAction] }))] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive demo showing the copy callback and multiple button click handlers.',
            },
        },
    },
};
export const WithExtendedUserType = {
    render: () => {
        const extendedUser = {
            id: '6',
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@company.com',
            department: 'Engineering',
            role: 'Senior Developer',
        };
        return (_jsx(UserCard, { user: extendedUser, labels: defaultLabels, actionButtons: [
                {
                    label: 'View Team',
                    onClick: (user) => {
                        alert(`${user.firstName} works in ${user.department}`);
                    },
                    variant: 'secondary',
                },
                {
                    label: 'View Profile',
                    onClick: (user) => {
                        alert(`${user.firstName} is a ${user.role}`);
                    },
                    variant: 'primary',
                },
            ] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates using UserCard with an extended user type that includes additional properties. The generic type ensures type safety for the onClick callbacks.',
            },
        },
    },
};
export const LoadingButtons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Cancel',
                variant: 'tertiary',
            },
            {
                label: 'Save',
                variant: 'primary',
                buttonProps: {
                    loading: true,
                },
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with a loading button state using buttonProps to pass loading state.',
            },
        },
    },
};
export const DisabledButtons = {
    args: {
        user: sampleUser,
        labels: defaultLabels,
        actionButtons: [
            {
                label: 'Edit',
                variant: 'secondary',
                buttonProps: {
                    disabled: true,
                },
            },
            {
                label: 'Delete',
                variant: 'primary',
                buttonProps: {
                    disabled: true,
                },
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'UserCard with disabled buttons using buttonProps.',
            },
        },
    },
};
