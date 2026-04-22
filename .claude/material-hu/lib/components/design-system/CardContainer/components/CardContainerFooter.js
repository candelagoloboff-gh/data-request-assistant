import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, CardActions, Typography, useTheme } from '@mui/material';
import { IconChevronRight } from '@tabler/icons-react';
const CardContainerFooter = ({ footer, sx }) => {
    const { palette } = useTheme();
    if (!footer)
        return null;
    const wrapperProps = {
        className: 'CardContainerFooter-root',
        sx: {
            justifyContent: 'space-between',
            borderTop: '1px solid',
            borderColor: palette.new.border.neutral.default,
            py: 1,
            ...sx,
        },
    };
    if ('action2' in footer) {
        return (_jsxs(CardActions, { ...wrapperProps, children: [_jsx(Button, { className: "CardContainerFooter-action2", variant: "tertiary", sx: { flex: 1 }, ...footer.action2, children: footer.action2.title }), _jsx(Button, { className: "CardContainerFooter-action1", variant: "primary", sx: { flex: 1 }, ...footer.action1, children: footer.action1.title })] }));
    }
    return (_jsxs(CardActions, { ...wrapperProps, children: [!!footer.text && (_jsx(Typography, { className: "CardContainerFooter-text", variant: "globalXXS", sx: {
                    color: palette.new.text.neutral.lighter,
                }, children: footer.text })), _jsx(Button, { className: "CardContainerFooter-action1", variant: "tertiary", sx: { minWidth: 'fit-content', ml: 'auto', order: 2 }, endIcon: _jsx(IconChevronRight, { fontSize: "small" }), ...footer.action1, children: footer.action1.title })] }));
};
export default CardContainerFooter;
