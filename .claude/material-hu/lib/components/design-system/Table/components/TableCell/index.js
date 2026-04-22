import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from '../../../Tooltip';
import { TableCell as MuiTableCell, Typography, useTheme } from '@mui/material';
const TableCell = ({ children, sx, tooltipTitle, tooltipProps = {}, headerCell = false, actionable = false, selectionCell = false, collapsableCell = false, ...props }) => {
    const theme = useTheme();
    const hoverStyles = actionable
        ? {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.palette.new.action.background.neutral.hover,
            },
        }
        : {};
    const selectionStyles = selectionCell
        ? {
            borderRight: `4px solid ${theme.palette.new.border.neutral.default}`,
        }
        : {};
    const collapsableStyles = collapsableCell ? { width: '74px' } : {};
    return (_jsx(Tooltip, { description: tooltipTitle, disableTooltip: !tooltipTitle, direction: "bottom", ...tooltipProps, children: _jsxs(MuiTableCell, { align: selectionCell || collapsableCell ? 'center' : 'left', sx: {
                py: 1.5,
                px: 1.5,
                ...selectionStyles,
                ...collapsableStyles,
                ...hoverStyles,
                ...(!headerCell && { height: '60px' }),
                ...(headerCell && {
                    '&:hover': {
                        '& .MuiTypography-root': {
                            color: theme.palette.new.text.neutral.default,
                        },
                    },
                }),
                ...sx,
                '& .MuiCheckbox-root.Mui-checked': {
                    color: theme.palette.new.action.button.background.primary.default,
                },
            }, ...props, children: [headerCell && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: { color: theme.palette.new.text.neutral.lighter }, children: children })), !headerCell && (_jsx("div", { children: _jsx(Typography, { variant: "globalS", children: children }) }))] }) }));
};
export default TableCell;
