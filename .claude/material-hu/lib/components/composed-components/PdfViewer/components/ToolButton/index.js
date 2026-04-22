import { jsx as _jsx } from "react/jsx-runtime";
import { alpha, IconButton, useTheme } from '@mui/material';
export const ToolButton = ({ label, Icon, onClick = () => null, disabled = false, }) => {
    const { palette } = useTheme();
    return (_jsx(IconButton, { "aria-label": label, title: label, disabled: disabled, variant: "tertiary", sx: {
            borderRadius: 0,
            '&:hover': {
                backgroundColor: alpha(palette.shadows?.inverted, 0.5),
            },
            color: palette.new.text.neutral.inverted,
            '& svg': {
                stroke: palette.new.text.neutral.inverted,
            },
        }, onClick: onClick, children: _jsx(Icon, {}) }));
};
export default ToolButton;
