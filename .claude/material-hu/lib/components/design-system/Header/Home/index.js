import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppBar, Button, ButtonBase, IconButton, Popover, Stack, Toolbar, useTheme, } from '@mui/material';
import { IconBell, IconHelp, IconMenu2, IconWorld } from '@tabler/icons-react';
import { isNil } from 'lodash';
import Avatar from '../../Avatar';
import Badge from '../../Badge';
import Pills from '../../Pills';
const POPOVER_ANCHOR_ORIGIN = {
    vertical: 'bottom',
    horizontal: 'right',
};
const POPOVER_TRANSFORM_ORIGIN = {
    vertical: 'top',
    horizontal: 'right',
};
const HomeHeader = forwardRef(({ onOpenMenu, logoSrc, logoAlt, isAdmin = false, extraOptions, avatarProps, notificationsCount = 0, avatarButtonProps, avatarPopoverContent, hideSupportButton = false, onOpenLanguageMenu, onOpenSupportMenu, hideNotificationsButton = false, sx, logoLink = '/', hideMenuButton = false, supportButtonProps, onOpenNotificationsMenu, id, disabledMenuButton = false, banner, hasUnreadNotifications = false, onOpenAvatarMenu, avatarPopoverOpen, onAvatarPopoverOpenChange, }, ref) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const [internalAvatarAnchor, setInternalAvatarAnchor] = useState(null);
    const isControlled = !isNil(avatarPopoverOpen);
    const avatarAnchorEl = !isControlled || avatarPopoverOpen ? internalAvatarAnchor : null;
    const handleOpenAvatarMenu = useCallback((event) => {
        onOpenAvatarMenu?.(event);
        setInternalAvatarAnchor(event.currentTarget);
        if (isControlled) {
            onAvatarPopoverOpenChange?.(true);
        }
    }, [isControlled, onOpenAvatarMenu, onAvatarPopoverOpenChange]);
    const handleCloseAvatarMenu = useCallback(() => {
        setInternalAvatarAnchor(null);
        if (isControlled) {
            onAvatarPopoverOpenChange?.(false);
        }
    }, [isControlled, onAvatarPopoverOpenChange]);
    const notificationsIconSx = useMemo(() => hasUnreadNotifications
        ? {
            '& .MuiBadge-root svg': {
                transform: 'rotate(45deg)',
                transition: 'transform 200ms ease',
            },
        }
        : undefined, [hasUnreadNotifications]);
    return (_jsxs(AppBar, { id: id, ref: ref, elevation: 0, sx: {
            backgroundColor: theme.palette.new.background.layout.tertiary,
            borderBottom: `1px solid ${theme.palette.new.border.neutral.default}`,
            ...sx,
        }, children: [banner, _jsxs(Toolbar, { sx: { px: `${theme.spacing(2)} !important`, py: 1.5, gap: 2 }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [!hideMenuButton && (_jsx(IconButton, { onClick: onOpenMenu, disabled: disabledMenuButton, children: _jsx(IconMenu2, {}) })), _jsx(Link, { to: logoLink, children: _jsx(Stack, { sx: {
                                        height: '48px',
                                        maxWidth: '140px',
                                        p: 0.25,
                                        boxSizing: 'border-box',
                                    }, children: _jsx("img", { src: logoSrc, alt: logoAlt, style: {
                                            height: '100%',
                                            objectFit: 'contain',
                                        } }) }) }), isAdmin && (_jsx(Pills, { label: t('hu_header.admin'), type: "highlight", hasIcon: false, size: "small" }))] }), _jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            ml: 'auto',
                        }, children: [extraOptions?.map(({ key, ...buttonProps }) => (_jsx(Button, { variant: "outlined", ...buttonProps }, key))), !hideSupportButton && !onOpenSupportMenu && (_jsx(IconButton, { target: "_blank", ...supportButtonProps, children: _jsx(IconHelp, { color: theme.palette.new.text.neutral.default }) })), onOpenSupportMenu && (_jsx(IconButton, { onClick: onOpenSupportMenu, "aria-label": t('hu_header.open_support_menu'), children: _jsx(IconHelp, { color: theme.palette.new.text.neutral.default }) })), _jsx(IconButton, { onClick: onOpenLanguageMenu, children: _jsx(IconWorld, { color: theme.palette.new.text.neutral.default }) }), !hideNotificationsButton && (_jsx(IconButton, { onClick: onOpenNotificationsMenu, sx: notificationsIconSx, children: _jsx(Badge, { badgeContent: notificationsCount, color: "primary", children: _jsx(IconBell, { color: theme.palette.new.text.neutral.default }) }) })), _jsx(ButtonBase, { onClick: handleOpenAvatarMenu, ...avatarButtonProps, disableRipple: true, children: _jsx(Avatar, { ...avatarProps }) }), _jsx(Popover, { anchorEl: avatarAnchorEl, anchorOrigin: POPOVER_ANCHOR_ORIGIN, transformOrigin: POPOVER_TRANSFORM_ORIGIN, slotProps: {
                                    paper: {
                                        sx: {
                                            borderRadius: theme.shape.borderRadiusL,
                                            boxShadow: theme.shadows[2],
                                        },
                                    },
                                }, onClose: handleCloseAvatarMenu, open: isControlled ? Boolean(avatarPopoverOpen) : !!avatarAnchorEl, keepMounted: true, children: avatarPopoverContent })] })] })] }));
});
HomeHeader.displayName = 'HomeHeader';
export default HomeHeader;
