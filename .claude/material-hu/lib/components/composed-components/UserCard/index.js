import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { IconCopy } from '@tabler/icons-react';
import { getFullName, getInitials } from '../../../utils/user';
import Avatar from '../../design-system/Avatar';
import Button from '../../design-system/Buttons/Button';
import Tooltip from '../../design-system/Tooltip';
import TypographyOverflowTooltip from '../TypographyOverflowTooltip';
const SPACING_UNIT = 8;
const COPY_RESET_DELAY = 2000;
const AVATAR_SIZE_MAP = {
    small: 32,
    medium: 40,
    large: 60,
};
/**
 * Calculate the available width for text elements based on card dimensions
 */
const calculateTextWidths = (cardWidth, horizontalPadding, headerGap, avatarSize) => {
    const paddingPx = horizontalPadding * SPACING_UNIT * 2;
    const gapPx = headerGap * SPACING_UNIT;
    const avatarPx = AVATAR_SIZE_MAP[avatarSize];
    const iconButtonWidth = 32; // Small icon button width
    const emailGap = 4; // 0.5 spacing units
    // Header text width = card width - padding - avatar - gap
    const headerTextWidth = cardWidth - paddingPx - avatarPx - gapPx;
    // Email text width = card width - padding - icon button - gap
    const emailTextWidth = cardWidth - paddingPx - iconButtonWidth - emailGap;
    return {
        headerTextWidth: Math.max(headerTextWidth, 0),
        emailTextWidth: Math.max(emailTextWidth, 0),
    };
};
/**
 * UserCard - A reusable card component for displaying user information
 *
 * Features:
 * - Configurable dimensions with dynamic text overflow handling
 * - Customizable header background color
 * - Copy email to clipboard functionality
 * - Profile action button
 * - Supports generic user types with additional properties
 */
const MAX_ACTION_BUTTONS = 3;
const UserCard = ({ user, sizeProps = {}, labels, actionButtons = [], copyProps = {}, headerBackgroundColor, sx, stopPropagation = true, avatarProps = {}, }) => {
    const theme = useTheme();
    const [copied, setCopied] = useState(false);
    // Size props
    const { width = 312, horizontalPadding = 2, headerGap = 1, avatarSize = 'large', } = sizeProps;
    const { copyEmailLabel, copiedLabel } = labels;
    // Copy props
    const { show: showCopy = true, copyLabel = copyEmailLabel, copiedLabel: copyDoneLabel = copiedLabel, onCopy, } = copyProps;
    // Calculate text widths based on card dimensions
    const { headerTextWidth, emailTextWidth } = useMemo(() => calculateTextWidths(width, horizontalPadding, headerGap, avatarSize), [width, horizontalPadding, headerGap, avatarSize]);
    // Get derived user data
    const fullName = getFullName(user);
    const initials = getInitials(fullName);
    // Determine if employee ID should be shown
    const showEmployeeId = !!user.employeeInternalId && user.employeeInternalId !== user.email;
    // Resolve header background color
    const resolvedHeaderBgColor = typeof headerBackgroundColor === 'function'
        ? headerBackgroundColor(theme)
        : (headerBackgroundColor ?? theme.palette.newBase?.brand[500]);
    const handleCopy = async () => {
        if (!user.email)
            return;
        await navigator.clipboard.writeText(user.email);
        setCopied(true);
        onCopy?.(user.email);
        setTimeout(() => {
            setCopied(false);
        }, COPY_RESET_DELAY);
    };
    // Normalize action buttons (limited to max 3)
    const normalizedActionButtons = useMemo(() => actionButtons.slice(0, MAX_ACTION_BUTTONS), [actionButtons]);
    const handleCardClick = (e) => {
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    return (_jsxs(Stack, { component: Paper, elevation: 8, sx: {
            backgroundColor: theme.palette.new.background.layout.tertiary,
            borderRadius: '16px',
            width,
            ...sx,
        }, onClick: handleCardClick, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    p: horizontalPadding,
                    borderRadius: '16px 16px 0 0',
                    gap: headerGap,
                    alignItems: 'center',
                    backgroundColor: resolvedHeaderBgColor,
                }, children: [_jsx(Avatar, { size: avatarSize, src: user.profilePicture, text: initials, ...avatarProps }), _jsxs(Stack, { sx: { minWidth: 0, flex: 1 }, children: [_jsx(TypographyOverflowTooltip, { tooltipProps: {
                                    description: fullName,
                                }, typographyProps: {
                                    variant: 'globalS',
                                    fontWeight: 'fontWeightSemiBold',
                                    sx: {
                                        maxWidth: headerTextWidth,
                                        color: theme.palette.textColors?.neutralTextInverted,
                                    },
                                }, children: fullName }), showEmployeeId && (_jsx(TypographyOverflowTooltip, { typographyProps: {
                                    variant: 'globalXS',
                                    sx: {
                                        maxWidth: headerTextWidth,
                                        color: theme.palette.textColors?.neutralTextInverted,
                                    },
                                }, tooltipProps: {
                                    description: user.employeeInternalId,
                                }, children: user.employeeInternalId }))] })] }), _jsxs(Stack, { sx: { gap: 1.5, px: horizontalPadding, py: 1 }, children: [user.email && (_jsxs(Stack, { sx: {
                            width: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 0.5,
                        }, children: [_jsx(Typography, { variant: "globalXS", sx: {
                                    display: 'block',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    maxWidth: emailTextWidth,
                                    color: theme.palette.new.text.neutral.default,
                                }, children: user.email }), showCopy && (_jsx(Tooltip, { description: copied ? copyDoneLabel : copyLabel, children: _jsx("span", { children: _jsx(IconButton, { onClick: handleCopy, size: "small", children: _jsx(IconCopy, { size: 16 }) }) }) }))] })), normalizedActionButtons.length > 0 && (_jsx(Stack, { sx: {
                            flexDirection: 'row',
                            gap: 1,
                            width: '100%',
                        }, children: normalizedActionButtons.map((action, index) => (_jsx(Button, { variant: action.variant || 'secondary', onClick: () => action.onClick?.(user), sx: { flex: 1, minWidth: 0 }, ...action.buttonProps, children: action.label }, index))) }))] })] }));
};
export default UserCard;
