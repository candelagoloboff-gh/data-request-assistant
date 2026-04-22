import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Fade, Stack, Typography } from '@mui/material';
const BadgeCountButton = ({ buttonProps, count, children, }) => {
    return (_jsx(Button, { ...buttonProps, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                gap: 0.5,
                alignItems: 'center',
            }, children: [_jsx(Typography, { variant: "globalXS", fontWeight: "fontWeightSemiBold", sx: {
                        color: ({ palette }) => palette?.new?.text?.neutral?.brand,
                    }, children: children }), _jsx(Fade, { in: count > 0, unmountOnExit: true, children: _jsx(Typography, { sx: {
                            p: 0.25,
                            borderRadius: '100%',
                            backgroundColor: theme => theme.palette.newBase?.brand[500],
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: theme => theme.palette.newBase?.white,
                            boxSizing: 'border-box',
                            fontSize: '12px !important',
                            fontWeight: theme => theme.typography.fontWeightMedium,
                            aspectRatio: '1/1',
                        }, children: count === 0 ? 1 : count }) })] }) }));
};
export default BadgeCountButton;
