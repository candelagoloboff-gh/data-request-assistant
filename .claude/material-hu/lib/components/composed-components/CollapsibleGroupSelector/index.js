import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Skeleton from '../../design-system/Skeleton';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import GroupAccordion from './components/GroupAccordion';
const CollapsibleGroupSelector = ({ fieldName, groups, title, isLoading, expanded: expandedProp, onExpandedChange, selectAllLabel, withSearch = false, sx, }) => {
    const [internalExpanded, setInternalExpanded] = useState(false);
    const [expandedGroup, setExpandedGroup] = useState(null);
    const isControlled = expandedProp !== undefined;
    const isExpanded = isControlled ? expandedProp : internalExpanded;
    const handleExpandedChange = (next) => {
        if (!isControlled)
            setInternalExpanded(next);
        onExpandedChange?.(next);
    };
    if (isLoading) {
        return (_jsx(Skeleton, { height: 28, sx: { my: 1, ...sx } }));
    }
    if (!groups?.length)
        return null;
    return (_jsxs(Stack, { sx: { gap: 2, ...sx }, children: [title && (_jsx(Typography, { variant: "globalM", fontWeight: "fontWeightSemiBold", sx: { mb: 2 }, children: title })), groups.map(group => (_jsx(GroupAccordion, { isParentExpanded: isExpanded, setParentExpanded: handleExpandedChange, isExpanded: expandedGroup === group.name, setExpandedGroup: setExpandedGroup, group: group, groupFieldName: fieldName, selectAllLabel: selectAllLabel, withSearch: withSearch }, group.value)))] }));
};
export default CollapsibleGroupSelector;
