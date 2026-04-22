import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import CardContainer from '.';
const meta = {
    component: CardContainer,
    title: 'Design System/Cards/CardContainer',
    tags: ['autodocs'],
    args: {
        badge: {
            label: 'Badge',
            type: 'success',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "This is an example of content inside the CardContainer." })),
    },
};
export default meta;
export const Default = {
    args: {
        badge: undefined,
        children: (_jsx(Typography, { variant: "body1", children: "This is a default CardContainer with no badge or footer." })),
    },
};
export const WithOnClick = {
    args: {
        badge: undefined,
        children: (_jsx(Typography, { variant: "body1", children: "You can click me! But this is also a default CardContainer with no badge or footer." })),
        onClick: () => alert('Default clicking'),
    },
};
export const WithOnClickNoAction = {
    args: {
        badge: undefined,
        noHover: true,
        children: (_jsx(Typography, { variant: "body1", children: "You can click me! But this is also a default CardContainer with no badge or footer." })),
        onClick: () => alert('Default clicking'),
    },
};
export const WithBadge = {
    args: {
        badge: {
            label: 'Info Badge',
            type: 'info',
            hasIcon: true,
        },
    },
};
export const WithBadgeNoIcon = {
    args: {
        badge: {
            label: 'Info Badge No Icon',
            type: 'info',
            hasIcon: false,
        },
    },
};
export const Error = {
    args: {
        badge: {
            label: 'Error Badge',
            type: 'error',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "Container with an error badge." })),
    },
};
export const Success = {
    args: {
        badge: {
            label: 'Success Badge',
            type: 'success',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "Container with a success badge." })),
    },
};
export const Warning = {
    args: {
        badge: {
            label: 'Warning Badge',
            type: 'warning',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "Container with a warning badge." })),
    },
};
export const Info = {
    args: {
        badge: {
            label: 'Info Badge',
            type: 'info',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "Container with an info badge." })),
    },
};
export const Highlight = {
    args: {
        badge: {
            label: 'Highlight Badge',
            type: 'highlight',
            hasIcon: true,
        },
        children: (_jsx(Typography, { variant: "body1", children: "Container with a highlight badge." })),
    },
};
export const FullWidth = {
    args: {
        badge: {
            label: 'Info Badge',
            type: 'info',
            hasIcon: true,
        },
        fullWidth: true,
        children: (_jsx(Typography, { variant: "body1", children: "Container with an info badge." })),
    },
};
export const WithFooterSingleAction = {
    args: {
        badge: undefined,
        footer: {
            action1: {
                title: 'Learn More',
                onClick: () => alert('Learn More clicked'),
            },
            text: 'This is footer text.',
        },
    },
};
export const WithFooterSingleActionAndNoHelper = {
    args: {
        badge: undefined,
        footer: {
            action1: {
                title: 'Learn More',
                onClick: () => alert('Learn More clicked'),
            },
        },
    },
};
export const WithFooterDoubleAction = {
    args: {
        badge: undefined,
        footer: {
            action1: {
                title: 'Accept',
                onClick: () => alert('Accept clicked'),
            },
            action2: {
                title: 'Decline',
                onClick: () => alert('Decline clicked'),
            },
        },
    },
};
export const WithBadgeAndFooter = {
    args: {
        badge: {
            label: 'Success Badge',
            type: 'success',
            hasIcon: true,
        },
        footer: {
            action1: {
                title: 'Accept',
                onClick: () => alert('Accept clicked'),
            },
            action2: {
                title: 'Decline',
                onClick: () => alert('Decline clicked'),
            },
        },
    },
};
export const EventPropagation = {
    args: {
        fullWidth: true,
        onClick: () => {
            alert('Clicked card!');
        },
        footer: {
            action1: {
                title: 'Accept',
                onClick: e => {
                    e?.stopPropagation();
                    alert('Accept clicked');
                },
            },
            action2: {
                title: 'Decline',
                onClick: () => alert('Decline clicked'),
            },
        },
    },
};
export const WithColorGrey = {
    args: {
        color: 'grey',
    },
};
export const WithShadow = {
    args: {
        hasShadow: true,
    },
};
export const WithImg = {
    args: {
        badge: undefined,
        footer: {
            action1: {
                title: 'Accept',
                onClick: () => alert('Accept clicked'),
            },
            action2: {
                title: 'Decline',
                onClick: () => alert('Decline clicked'),
            },
        },
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.20minutos.es%2Fuploads%2Fimagenes%2F2024%2F05%2F15%2Funa-imagen-creada-por-la-herramienta-imagen-3-de-google.jpeg&f=1&nofb=1&ipt=14a3f0f9f5cd7a85de34990d17d6ec5d2ddb9d80c483c2dc984d1a4d2a9e181c',
    },
};
