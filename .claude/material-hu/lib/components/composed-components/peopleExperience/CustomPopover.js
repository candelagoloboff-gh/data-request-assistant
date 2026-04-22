import { jsx as _jsx } from "react/jsx-runtime";
import { Popover, useTheme } from '@mui/material';
import { merge } from 'lodash';
const CustomPopover = (props) => {
    const theme = useTheme();
    return (_jsx(Popover, { ...merge({
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            transformOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
            disableRestoreFocus: true,
            slotProps: {
                paper: {
                    sx: {
                        p: 2,
                        borderRadius: theme.spacing(2),
                    },
                },
            },
            sx: {
                pointerEvents: 'none',
                borderRadius: theme.spacing(2),
                boxShadow: theme.shadows[2],
            },
        }, props) }));
};
export default CustomPopover;
