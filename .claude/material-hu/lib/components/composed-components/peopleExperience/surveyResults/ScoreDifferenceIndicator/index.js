import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react';
import ScoreDifferencePopover from '../ScoreDifferencePopover';
const ScoreDifferenceIndicator = ({ difference, popoverMeta, slotProps = {}, }) => {
    const theme = useTheme();
    return (_jsx(ScoreDifferencePopover, { ...popoverMeta, ...slotProps.popover, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                alignItems: 'center',
                fontWeight: 'fontWeightSemiBold',
                width: 'fit-content',
            }, children: [difference === 0 && (_jsx(Typography, { variant: "globalXS", sx: {
                        color: theme.palette.newBase?.green[600],
                        fontWeight: 'inherit',
                    }, children: "0" })), difference > 0 && (_jsxs(_Fragment, { children: [_jsx(IconArrowUp, { size: 16, color: theme.palette.newBase?.green[600] }), _jsx(Typography, { variant: "globalXS", sx: {
                                color: theme.palette.newBase?.green[600],
                                fontWeight: 'inherit',
                            }, children: difference })] })), difference < 0 && (_jsxs(_Fragment, { children: [_jsx(IconArrowDown, { size: 16, color: theme.palette.newBase?.red[600] }), _jsx(Typography, { variant: "globalXS", sx: {
                                color: theme.palette.newBase?.red[600],
                                fontWeight: 'inherit',
                            }, children: Math.abs(difference) })] }))] }) }));
};
export default ScoreDifferenceIndicator;
