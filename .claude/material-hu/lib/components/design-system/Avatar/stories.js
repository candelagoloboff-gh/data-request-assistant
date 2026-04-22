import { IconUser } from '@tabler/icons-react';
import Avatar from '.';
const meta = {
    component: Avatar,
    title: 'Design System/Avatars/Avatar',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays a user or entity avatar. Renders an image when `src` is provided, falls back to ' +
                    '`text` (initials), then to an `Icon` (default: IconUser). Supports three sizes, multiple ' +
                    'colour variants, an optional badge, and a loading skeleton that respects the configured size and variant.',
            },
        },
    },
    argTypes: {
        src: {
            description: 'Image URL. Takes priority over `text` and `Icon`.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        text: {
            description: 'Fallback text (e.g. initials) shown when `src` is not available.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        Icon: {
            description: 'Fallback icon shown when neither `src` nor `text` is available.',
            control: false,
            table: {
                type: { summary: 'TablerIcon' },
                defaultValue: { summary: 'IconUser' },
            },
        },
        alt: {
            description: 'Alt text for the image.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        size: {
            description: 'Avatar dimensions: small (32px), medium (40px), large (60px).',
            control: 'select',
            options: ['small', 'medium', 'large'],
            table: {
                type: { summary: "'small' | 'medium' | 'large'" },
                defaultValue: { summary: "'medium'" },
            },
        },
        variant: {
            description: 'Shape of the avatar. Also determines the skeleton shape when loading.',
            control: 'select',
            options: ['circular', 'rounded', 'square'],
            table: {
                type: { summary: "'circular' | 'rounded' | 'square'" },
            },
        },
        color: {
            description: 'Background/foreground colour variant applied to the fallback state.',
            control: 'select',
            options: [
                'white',
                'default',
                'primary',
                'highlight',
                'success',
                'error',
                'warning',
                'info',
            ],
            table: {
                type: {
                    summary: "'white' | 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning' | 'info'",
                },
                defaultValue: { summary: "'default'" },
            },
        },
        loading: {
            description: 'When true, renders a Skeleton placeholder matching the configured size and variant.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            description: 'If true, reduces opacity and disables pointer events.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        withBadge: {
            description: 'If true, wraps the avatar with a Badge.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        badgeProps: {
            description: 'Props forwarded to the Badge component. `badgeContent` controls the number; ' +
                '`variant` is forced to `dot` for small avatars or when no content is provided.',
            control: 'object',
            table: { type: { summary: 'BadgeProps' } },
        },
        onClick: {
            description: 'Click handler for the avatar.',
            control: false,
            table: { type: { summary: '(event: React.MouseEvent) => void' } },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the inner MUI Avatar.',
            control: false,
            table: { type: { summary: 'SxProps' } },
        },
    },
    args: {
        src: 'https://humand-dev.b-cdn.net/images/image--9b77db1c-fe4d-4bcf-b767-117688bf6d02.JPG',
        alt: 'Avatar Alt',
        text: 'SF',
        variant: 'rounded',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const FallbackText = {
    args: {
        src: 'https://example.com/nonexistent-image.png',
        alt: undefined,
    },
};
export const FallbackAlt = {
    args: {
        src: 'https://example.com/nonexistent-image.png',
        text: undefined,
    },
};
export const Fallback = {
    args: {
        src: 'https://example.com/nonexistent-image.png',
        alt: '',
        text: undefined,
    },
};
export const IconSmall = {
    args: {
        Icon: IconUser,
        src: undefined,
        text: undefined,
        size: 'small',
    },
};
export const IconMedium = {
    args: {
        Icon: IconUser,
        src: undefined,
        text: undefined,
        size: 'medium',
    },
};
export const IconLarge = {
    args: {
        Icon: IconUser,
        src: undefined,
        text: undefined,
        size: 'large',
    },
};
export const SquareAvatar = {
    args: {
        variant: 'square',
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const LoadingSmall = {
    args: {
        loading: true,
        size: 'small',
    },
};
export const LoadingLarge = {
    args: {
        loading: true,
        size: 'large',
    },
};
export const LoadingRounded = {
    args: {
        loading: true,
        variant: 'rounded',
    },
};
export const LoadingSquare = {
    args: {
        loading: true,
        variant: 'square',
    },
};
export const Badge = {
    args: {
        withBadge: true,
    },
};
export const BadgeNumber = {
    args: {
        withBadge: true,
        badgeProps: {
            badgeContent: 12,
        },
    },
};
export const BadgeMax = {
    args: {
        withBadge: true,
        badgeProps: {
            badgeContent: 1000,
        },
    },
};
