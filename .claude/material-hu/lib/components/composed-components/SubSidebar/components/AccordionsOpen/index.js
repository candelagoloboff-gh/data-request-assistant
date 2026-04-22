import { createElement as _createElement } from "react";
import { useTheme } from '@mui/material';
import Accordion from '../../../../design-system/Accordion';
import ListItem from '../../../../design-system/List/components/ListItem';
const SubSidebarAccordionsOpen = ({ id, section, openAccordions, handleOpenAccordion, handleClickItem, }) => {
    const { palette, shape, spacing } = useTheme();
    const isAvatarEmojiType = Boolean(section.avatar?.text);
    return (_createElement(Accordion, { ...section, elevation: 0, id: `${id}-accordion-section-${section.value}`, key: `${id}-accordion-section-${section.value}`, onChange: () => handleOpenAccordion(section.value), expanded: openAccordions.includes(section.value), sx: {
            '&:hover': {
                backgroundColor: palette.new.background.elements.default,
                borderRadius: shape.borderRadiusL,
            },
            '& .MuiAccordionDetails-root > .MuiStack-root > .MuiStack-root': {
                pt: 0,
                gap: 2,
            },
            '& .MuiAccordionSummary-root': { p: 2 },
        }, customDetail: section.items.map(({ avatar, ...item }) => (_createElement(ListItem, { ...item, component: "button", id: `${id}-accordion-section-${section.value}-item-${item.value}`, key: `${id}-accordion-section-${section.value}-item-${item.value}`, sx: {
                ...item.sx,
                '& .MuiButtonBase-root': {
                    borderRadius: shape.borderRadiusL,
                    py: 1,
                },
                '& .Mui-disabled': {
                    opacity: 1,
                    '& *': {
                        color: palette.ilustrations?.neutralIlus,
                    },
                },
            }, onClick: handleClickItem(item.value, item.onClick) }))), avatar: {
            ...section.avatar,
            sx: {
                ...section.avatar?.sx,
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
            },
        } }));
};
export default SubSidebarAccordionsOpen;
