import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
const Category = ({ label, Icon, selected, onClick }) => {
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            p: 2,
            borderRadius: 2,
            cursor: 'pointer',
            backgroundColor: ({ palette }) => selected
                ? palette.new.background.layout.default
                : palette.new.background.layout.tertiary,
            '&:hover': {
                backgroundColor: ({ palette }) => palette.new.background.layout.default,
            },
        }, onClick: onClick, children: [_jsx(Icon, { height: 24, width: 24, style: { flexShrink: 0 } }), _jsx(Typography, { variant: "globalXS", fontWeight: "fontWeightSemiBold", noWrap: true, sx: {
                    color: ({ palette }) => selected
                        ? palette.new.text.neutral.default
                        : palette.new.text.neutral.lighter,
                }, children: label })] }));
};
export default Category;
