import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import ExpandibleContent from './components/ExpandibleContent';
import IconsColumn from './components/IconsColumn';
const DEFAULT_CONTENT_WIDTH = 288;
/**
 * CollapsibleInfoSidebar - A sidebar component that can be positioned on the left or right
 * and displays collapsible content items with icons.
 *
 * Features:
 * - Configurable position (left/right)
 * - Collapsible items with icon-only view when collapsed
 * - Customizable widths
 * - Support for controlled and uncontrolled states
 * - Optional always-expanded mode
 */
const CollapsibleInfoSidebar = ({ items, position = 'right', contentWidth = DEFAULT_CONTENT_WIDTH, defaultExpandedIndex, alwaysExpanded = false, expandedIndex: controlledExpandedIndex, onExpandedIndexChange, sx, }) => {
    const theme = useTheme();
    const [internalExpandedIndex, setInternalExpandedIndex] = useState(defaultExpandedIndex ?? null);
    const isControlled = controlledExpandedIndex !== undefined;
    const expandedIndex = isControlled
        ? controlledExpandedIndex
        : internalExpandedIndex;
    const isExpanded = expandedIndex !== null;
    const activeItem = isExpanded ? items[expandedIndex] : null;
    const handleItemClick = (index) => {
        if (alwaysExpanded && expandedIndex === index)
            return;
        const newExpandedIndex = expandedIndex === index ? null : index;
        if (!isControlled)
            setInternalExpandedIndex(newExpandedIndex);
        onExpandedIndexChange?.(newExpandedIndex);
    };
    const handleCollapseClick = () => {
        if (alwaysExpanded)
            return;
        if (!isControlled)
            setInternalExpandedIndex(null);
        onExpandedIndexChange?.(null);
    };
    const isRightPosition = position === 'right';
    return (_jsxs(Stack, { sx: {
            height: '100%',
            backgroundColor: theme.palette.new.background.layout.tertiary,
            flexShrink: 0,
            flexDirection: isRightPosition ? 'row-reverse' : 'row',
            ...sx,
        }, children: [_jsx(IconsColumn, { items: items, expandedIndex: expandedIndex, onItemClick: handleItemClick, position: position }), _jsx(ExpandibleContent, { isExpanded: isExpanded, contentWidth: contentWidth, position: position, activeItem: activeItem, expandedIndex: expandedIndex, alwaysExpanded: alwaysExpanded, onCollapseClick: handleCollapseClick })] }));
};
export default CollapsibleInfoSidebar;
