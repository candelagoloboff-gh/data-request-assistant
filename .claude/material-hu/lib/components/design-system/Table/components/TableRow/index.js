import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { IconButton, TableRow as MuiTableRow, useTheme } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import TableCell from '../TableCell';
import { getBackgroundColor } from './utils';
const TableRow = forwardRef(({ children, sx, headerRow = false, selected, collapsable, slotProps = {}, onCollapse = () => null, renderDetail = () => null, open: openProp, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const isControlled = openProp !== undefined;
    const isOpen = isControlled ? openProp : open;
    const theme = useTheme();
    const backgroundStyles = getBackgroundColor(headerRow, selected, theme);
    const handleCollapse = (event) => {
        if (!isControlled)
            setOpen(!open);
        onCollapse(event);
    };
    const rowStyles = {
        borderBottom: `1px solid ${theme.palette.new.border.neutral.default}`,
        ...backgroundStyles,
        ...sx,
        ':hover': {
            backgroundColor: props.onClick
                ? theme.palette.new.action.background.neutral.hover
                : undefined,
            cursor: props.onClick ? 'pointer' : 'default',
        },
        '&:last-child': {
            borderBottom: 'none',
            '& .MuiTableCell-root': {
                borderBottom: 'none',
            },
        },
    };
    const collapsedRowStyles = {
        borderBottom: isOpen ? 'initial' : 'none',
        maxHeight: isOpen ? '200px' : '0',
        transition: theme.transitions.create(['max-height']),
        '& > td': {
            border: isOpen ? undefined : 'none',
            opacity: isOpen ? 1 : 0,
            maxHeight: isOpen ? '200px' : 0,
            py: isOpen ? 2 : 0,
            overflow: 'hidden',
            transition: theme.transitions.create(['padding', 'opacity']),
        },
        '& > td > *': {
            maxHeight: isOpen ? '200px' : 0,
            overflow: 'hidden',
            transition: theme.transitions.create(['max-height', 'padding']),
        },
    };
    return (_jsxs(_Fragment, { children: [_jsxs(MuiTableRow, { ref: ref, ...slotProps.root, sx: { ...rowStyles, ...slotProps.root?.sx }, selected: selected, ...props, children: [collapsable && (_jsx(TableCell, { collapsableCell: true, children: _jsx(IconButton, { onClick: handleCollapse, ...slotProps.collapseButton, children: _jsx(IconChevronDown, { style: {
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease-in-out',
                                } }) }) })), children] }), collapsable &&
                renderDetail({
                    ...slotProps.detail,
                    sx: { ...collapsedRowStyles, ...slotProps.detail?.sx },
                }, isOpen)] }));
});
TableRow.displayName = 'TableRow';
export default TableRow;
