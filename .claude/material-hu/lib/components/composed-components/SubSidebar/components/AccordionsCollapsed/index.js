import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Collapse, Stack, useTheme } from '@mui/material';
import Avatar from '../../../../design-system/Avatar';
import Tooltip from '../../../../design-system/Tooltip';
const SubSidebarAccordionsCollapsed = ({ id, section, openAccordions, handleOpenAccordion, handleClickItem, }) => {
    const { palette, transitions, spacing } = useTheme();
    const isAvatarEmojiType = Boolean(section.avatar?.text);
    return (_jsxs(Stack, { id: `${id}-accordion-section-${section.value}`, sx: { gap: 2, mt: 0.5, alignItems: 'start' }, children: [_jsx(Button, { onClick: () => handleOpenAccordion(section.value), sx: {
                    p: 0,
                    minWidth: 0,
                    '&:hover': {
                        '& .MuiAvatar-root': {
                            backgroundColor: palette.new.background.elements.default,
                        },
                    },
                }, children: _jsx(Tooltip, { direction: "right", title: section.title, children: _jsx("span", { children: _jsx(Avatar, { ...section.avatar, sx: {
                                ...section.avatar?.sx,
                                borderRadius: 1,
                                '& img': {
                                    maxWidth: spacing(2.5),
                                    maxHeight: spacing(2.5),
                                },
                                ...(isAvatarEmojiType && {
                                    '& span': {
                                        fontSize: '1.3rem',
                                        mt: 0.5,
                                    },
                                }),
                            } }) }) }) }), _jsx(Collapse, { in: openAccordions.includes(section.value), timeout: transitions.duration.short, sx: {
                    '& .MuiCollapse-wrapperInner': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        pb: 2,
                    },
                }, children: section.items.map(item => (_jsx(Button, { sx: {
                        p: 0,
                        minWidth: 0,
                        ...(item.selected && {
                            '& .MuiAvatar-root': {
                                backgroundColor: palette.new.background.layout.brand,
                                '& svg': {
                                    stroke: palette.new.action.button.background.primary.hover,
                                },
                            },
                        }),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            ...(!item.disabled && {
                                '& .MuiAvatar-root': {
                                    backgroundColor: palette.new.background.elements.default,
                                },
                            }),
                        },
                    }, onClick: item.disabled
                        ? undefined
                        : handleClickItem(item.value, item.onClick), children: _jsx(Tooltip, { direction: "right", title: item.text?.title || item.value, children: _jsx("span", { children: _jsx(Avatar, { ...item.avatar, disabled: item.disabled }) }) }) }, `${id}-accordion-section-${section.value}-item-${item.value}`))) })] }, `${id}-accordion-section-${section.value}`));
};
export default SubSidebarAccordionsCollapsed;
