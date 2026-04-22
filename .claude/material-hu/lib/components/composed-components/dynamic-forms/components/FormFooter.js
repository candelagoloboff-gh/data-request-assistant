import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../../../design-system/Buttons/Button';
import Stack from '@mui/material/Stack';
const FormFooter = ({ nextButton, backButton, sx, slotProps, }) => {
    return (_jsx(Stack, { sx: {
            backgroundColor: theme => theme.palette.new.background.layout.default,
            bottom: 0,
            position: 'sticky',
            justifyContent: 'center',
            flexDirection: 'row',
            p: 2,
            ...sx,
        }, ...slotProps?.root, children: _jsxs(Stack, { sx: {
                flex: 1,
                mx: 'auto',
                gap: 2,
                px: 3,
                maxWidth: theme => theme.breakpoints.values.lg,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                ...slotProps?.wrapper?.sx,
            }, ...slotProps?.wrapper, children: [_jsx(Button, { size: "large", variant: "tertiary", ...backButton }), _jsx(Button, { size: "large", variant: "primary", ...nextButton })] }) }));
};
export default FormFooter;
