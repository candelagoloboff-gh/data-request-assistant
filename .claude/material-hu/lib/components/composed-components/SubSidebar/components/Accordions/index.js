import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Stack, useTheme } from '@mui/material';
import SubSidebarAccordionsCollapsed from '../AccordionsCollapsed';
import SubSidebarAccordionsOpen from '../AccordionsOpen';
import SubSidebarAccordionsSkeleton from '../AccordionsSkeleton';
const SubSidebarAccordions = ({ accordionSections, id, isCollapsed, handleClickItem, isLoading, defaultOpenAccordions = [], }) => {
    const { transitions } = useTheme();
    const [delayedIsCollapsed, setDelayedIsCollapsed] = useState(isCollapsed);
    const [openAccordions, setOpenAccordions] = useState(defaultOpenAccordions);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedIsCollapsed(isCollapsed);
        }, isCollapsed ? 0 : transitions.duration.standard);
        return () => clearTimeout(timer);
    }, [isCollapsed]);
    if (isLoading)
        return _jsx(SubSidebarAccordionsSkeleton, {});
    if (!accordionSections)
        return null;
    const handleOpenAccordion = (sectionValue) => {
        if (openAccordions.includes(sectionValue)) {
            setOpenAccordions(prev => prev.filter(prevId => prevId !== sectionValue));
        }
        else {
            setOpenAccordions(prev => [...prev, sectionValue]);
        }
    };
    return (_jsx(Stack, { sx: {
            mt: 1,
            p: delayedIsCollapsed ? 2 : 0,
            transition: transitions.create(['p'], {
                duration: transitions.duration.standard,
                easing: transitions.easing.easeInOut,
            }),
            opacity: delayedIsCollapsed === isCollapsed ? 1 : 0.5,
        }, children: accordionSections.map(section => {
            const props = {
                id,
                section,
                openAccordions,
                handleClickItem,
                handleOpenAccordion,
            };
            if (delayedIsCollapsed) {
                return (_jsx(SubSidebarAccordionsCollapsed, { ...props }, `${id}-accordion-section-${section.value}`));
            }
            return (_jsx(SubSidebarAccordionsOpen, { ...props }, `${id}-accordion-section-${section.value}`));
        }) }));
};
export default SubSidebarAccordions;
