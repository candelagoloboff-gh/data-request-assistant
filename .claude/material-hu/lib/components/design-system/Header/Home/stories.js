import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from '../../Menu';
import MenuItem from '../../Menu/components/MenuItem';
import { Box, Stack } from '@mui/material';
import { IconCoins } from '@tabler/icons-react';
import { colorPalette } from '../../../../theme/hugo/colors';
import HomeHeader from '.';
const companyLogo = 'https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Emblem.png';
const TemplateContent = () => {
    return (_jsx(Stack, { sx: {
            width: '300px',
            height: '200px',
            borderRadius: '16px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
        }, children: _jsx(Stack, { sx: {
                borderRadius: '8px',
                border: '1px dashed #CAD5FE',
                backgroundColor: '#EFF2FF',
                width: 1,
                height: 1,
            } }) }));
};
const meta = {
    component: HomeHeader,
    title: 'Design System/Header/Home',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Main application header (AppBar). Renders the company logo, an optional admin pill, ' +
                    'extra action buttons, support/language/notification controls, and a user avatar with a popover. ' +
                    'Intended for the top-level shell layout.',
            },
        },
    },
    argTypes: {
        onOpenMenu: {
            description: 'Callback fired when the hamburger menu button is clicked.',
            table: { type: { summary: '() => void' } },
            control: false,
        },
        logoSrc: {
            description: 'URL of the company logo image.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        logoAlt: {
            description: 'Alt text for the company logo.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        logoLink: {
            description: 'Navigation path for the logo link. Defaults to "/".',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        isAdmin: {
            description: 'If true, shows an "Admin" pill next to the logo.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        extraOptions: {
            description: 'Up to 2 extra action buttons rendered between the logo area and the right-side controls.',
            control: false,
            table: { type: { summary: '[ExtraOption?, ExtraOption?]' } },
        },
        avatarProps: {
            description: 'Props forwarded to the user Avatar component.',
            control: false,
            table: { type: { summary: 'AvatarProps' } },
        },
        avatarPopoverContent: {
            description: 'Content rendered inside the avatar popover panel.',
            control: false,
            table: { type: { summary: 'React.ReactNode' } },
        },
        avatarButtonProps: {
            description: 'Additional props for the avatar button wrapper.',
            control: false,
            table: { type: { summary: 'ButtonProps' } },
        },
        avatarPopoverOpen: {
            description: 'Controlled open state for the avatar popover.',
            control: { type: 'boolean' },
            table: { type: { summary: 'boolean' } },
        },
        onAvatarPopoverOpenChange: {
            description: 'Callback when the avatar popover open state changes.',
            control: false,
            table: { type: { summary: '(open: boolean) => void' } },
        },
        onOpenAvatarMenu: {
            description: 'Callback fired when the avatar button is clicked.',
            control: false,
            table: {
                type: {
                    summary: '(event: React.MouseEvent<HTMLButtonElement>) => void',
                },
            },
        },
        notificationsCount: {
            description: 'Badge count displayed on the notifications button.',
            control: { type: 'number' },
            table: { type: { summary: 'number' } },
        },
        hasUnreadNotifications: {
            description: 'If true, shows an unread indicator on the notifications badge.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        hideNotificationsButton: {
            description: 'If true, hides the notifications button entirely.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        notificationsButtonProps: {
            description: 'Additional props for the notifications IconButton.',
            control: false,
            table: { type: { summary: 'ButtonProps' } },
        },
        onOpenNotificationsMenu: {
            description: 'Callback fired when the notifications button is clicked.',
            control: false,
            table: {
                type: {
                    summary: '(event: React.MouseEvent<HTMLButtonElement>) => void',
                },
            },
        },
        onOpenLanguageMenu: {
            description: 'Callback fired when the language button is clicked.',
            control: false,
            table: {
                type: {
                    summary: '(event: React.MouseEvent<HTMLButtonElement>) => void',
                },
            },
        },
        supportButtonProps: {
            description: 'Props for the support link button (must include `href`).',
            control: false,
            table: { type: { summary: 'LinkButtonProps' } },
        },
        hideSupportButton: {
            description: 'If true, hides the support button.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        onOpenSupportMenu: {
            description: 'Callback fired when the support button is clicked. When provided, the button acts as a menu trigger instead of a link.',
            control: false,
            table: {
                type: {
                    summary: '(event: React.MouseEvent<HTMLButtonElement>) => void',
                },
            },
        },
        supportUrl: {
            description: 'Deprecated URL prop for support. Use `supportButtonProps.href`.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        hideMenuButton: {
            description: 'If true, hides the hamburger menu button.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        disabledMenuButton: {
            description: 'If true, disables the hamburger menu button.',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        banner: {
            description: 'Optional banner node rendered below the header bar.',
            control: false,
            table: { type: { summary: 'React.ReactNode' } },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root Stack.',
            control: false,
            table: { type: { summary: 'SxProps' } },
        },
        id: {
            description: 'HTML id attribute for the root element.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
    },
    args: {
        isAdmin: true,
        logoSrc: companyLogo,
        logoAlt: "Bank of America's logo",
        notificationsCount: 2,
        avatarProps: {
            src: 'https://siliconvalleyism.com/characters/richard-small.jpg',
            alt: "Richard's avatar",
        },
        avatarPopoverContent: _jsx(TemplateContent, {}),
        supportButtonProps: {
            href: 'https://help.humand.co/hc/es-419?utm_source=platform&utm_medium=humandweb',
        },
        hideNotificationsButton: true,
    },
    render: args => (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsx(Box, { sx: {
                        position: 'relative',
                        height: '10vh',
                        overflow: 'hidden',
                    }, children: _jsx(HomeHeader, { ...args }) }) }) }) })),
};
export default meta;
export const DefaultStory = {
    args: {},
};
export const ShortLogo = {
    args: {
        logoSrc: 'https://s3.amazonaws.com/shoptagr-prod-tagimages/fog_uploads/tag_71677188/c_pad%2Ch_1400%2Cw_1400/71677188_1688983116.png',
        logoAlt: "Temu's logo",
        notificationsCount: 2,
    },
};
export const ExtraOption = {
    args: {
        extraOptions: [
            {
                key: 'huCoins',
                children: 'Gana HuCoins',
                startIcon: _jsx(IconCoins, {}),
            },
        ],
    },
};
export const WithSupportMenu = {
    args: {
        ...meta.args,
    },
    render: args => {
        const [supportAnchorEl, setSupportAnchorEl] = useState(null);
        return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsxs(Box, { sx: {
                            position: 'relative',
                            height: '10vh',
                            overflow: 'hidden',
                        }, children: [_jsx(HomeHeader, { onOpenSupportMenu: event => setSupportAnchorEl(event.currentTarget), ...args }), _jsxs(Menu, { open: !!supportAnchorEl, onClose: () => setSupportAnchorEl(null), anchorEl: supportAnchorEl, children: [_jsx(MenuItem, { children: "Support item 1" }), _jsx(MenuItem, { children: "Support item 2" }), _jsx(MenuItem, { children: "Support item 3" })] })] }) }) }) }));
    },
};
export const WithUnreadNotifications = {
    args: {
        ...meta.args,
        hideNotificationsButton: false,
        notificationsCount: 3,
        hasUnreadNotifications: true,
    },
};
export const ControlledAvatarOneAtATime = {
    args: {
        ...meta.args,
        hideNotificationsButton: false,
        notificationsCount: 2,
    },
    render: args => {
        const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
        const [notificationsOpen, setNotificationsOpen] = useState(false);
        const [avatarOpen, setAvatarOpen] = useState(false);
        return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsxs(Box, { sx: {
                            position: 'relative',
                            height: '10vh',
                            overflow: 'hidden',
                        }, children: [_jsx(HomeHeader, { ...args, onOpenLanguageMenu: e => {
                                    setNotificationsOpen(false);
                                    setAvatarOpen(false);
                                    setLanguageAnchorEl(e.currentTarget);
                                }, onOpenNotificationsMenu: () => {
                                    setLanguageAnchorEl(null);
                                    setAvatarOpen(false);
                                    setNotificationsOpen(prev => !prev);
                                }, onOpenAvatarMenu: () => {
                                    setLanguageAnchorEl(null);
                                    setNotificationsOpen(false);
                                    setAvatarOpen(true);
                                }, avatarPopoverOpen: avatarOpen, onAvatarPopoverOpenChange: setAvatarOpen }), _jsxs(Menu, { open: !!languageAnchorEl, onClose: () => setLanguageAnchorEl(null), anchorEl: languageAnchorEl, children: [_jsx(MenuItem, { children: "Idioma 1" }), _jsx(MenuItem, { children: "Idioma 2" })] }), notificationsOpen && (_jsxs(Box, { sx: {
                                    position: 'fixed',
                                    top: 56,
                                    right: 16,
                                    width: 320,
                                    height: 400,
                                    bgcolor: 'background.paper',
                                    boxShadow: 2,
                                    borderRadius: 1,
                                    p: 2,
                                }, children: ["Panel de notificaciones (demo). Cierra con click fuera.", _jsx("button", { type: "button", onClick: () => setNotificationsOpen(false), children: "Cerrar" })] }))] }) }) }) }));
    },
};
