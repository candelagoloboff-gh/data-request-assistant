import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from '../Tooltip';
import { AccordionDetails, IconButton, Link, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, Stack, Typography, useTheme, } from '@mui/material';
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react';
import { useOverflowed } from '../../../hooks/useOverflowed';
import MenuList from '../../composed-components/MenuList';
import Avatar from '../Avatar';
import Pills from '../Pills';
const Accordion = ({ title, caption = '', description = '', avatar = null, pill, textDetail = null, customDetail = null, sx = {}, menuList, hasPadding = true, withTitleEllipsis = false, action, slotProps, ...accordionProps }) => {
    const { palette } = useTheme();
    const { overflowed: isTitleOverflowed, ref: titleRef } = useOverflowed();
    return (_jsxs(MuiAccordion, { sx: {
            borderRadius: '8px',
            '&:before': {
                backgroundColor: 'transparent',
            },
            color: palette.new.text.neutral.default,
            backgroundColor: hasPadding
                ? palette.new.background.elements.default
                : 'transparent',
            ...sx,
        }, disableGutters: true, ...accordionProps, children: [_jsx(MuiAccordionSummary, { className: "accordion-summary", sx: {
                    p: hasPadding ? 2 : 0,
                    minHeight: 'auto',
                    m: 0,
                    gap: 1,
                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                        ...(withTitleEllipsis && { overflow: 'hidden' }),
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        color: 'inherit',
                    },
                }, expandIcon: _jsx(IconChevronDown, { className: "accordion-collapse-icon" }), children: _jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                    }, children: [_jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                gap: 1,
                                width: 'inherit',
                                alignItems: 'inherit',
                                ...(withTitleEllipsis && { overflow: 'hidden' }),
                            }, children: [avatar && _jsx(Avatar, { ...avatar }), _jsxs(Stack, { sx: { mr: 1, ...(withTitleEllipsis && { overflow: 'hidden' }) }, children: [caption && (_jsx(Typography, { variant: "globalXXS", fontWeight: "regular", color: palette.new.text.neutral.lighter, children: caption })), _jsx(Tooltip, { description: title, disableTooltip: !isTitleOverflowed || !withTitleEllipsis, children: _jsx(Typography, { ref: titleRef, variant: "globalS", fontWeight: "semiBold", color: palette.new.text.neutral.default, sx: {
                                                    ...(withTitleEllipsis && {
                                                        whiteSpace: 'nowrap',
                                                        textOverflow: 'ellipsis',
                                                        overflow: 'hidden',
                                                    }),
                                                    ...slotProps?.title?.sx,
                                                }, children: title }) }), description && (_jsx(Typography, { variant: "globalXS", fontWeight: "regular", color: palette.new.text.neutral.lighter, children: description }))] })] }), _jsxs(Stack, { sx: { gap: 1, flexDirection: 'row', alignItems: 'center' }, children: [pill && _jsx(Pills, { ...pill }), action && _jsx(IconButton, { ...action }), menuList && _jsx(MenuList, { ...menuList })] })] }) }), _jsxs(AccordionDetails, { sx: { p: 0 }, className: "accordion-details", children: [!textDetail && (_jsx(Stack, { className: "accordion-details-custom-detail", sx: { p: hasPadding ? 2 : 0, pt: 0 }, children: customDetail })), textDetail && (_jsxs(Stack, { sx: {
                            px: hasPadding ? 2 : 0,
                            pb: hasPadding ? 2 : 0,
                            gap: 1,
                        }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "regular", color: palette.new.text.neutral.lighter, children: textDetail.description }), _jsxs(Link, { sx: {
                                    color: palette.new.action.button.background.primary.default,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 0.5,
                                }, href: textDetail.link, children: [textDetail.label, _jsx(IconArrowRight, { size: "1em", color: palette.new.action.button.background.primary.default })] })] }))] })] }));
};
export default Accordion;
