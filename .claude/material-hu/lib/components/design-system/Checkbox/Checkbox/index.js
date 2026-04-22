import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import Tooltip from '../../Tooltip';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import CheckboxBase from '../CheckboxBase';
import { getDescriptionColor, getLabelColor } from './utils';
const Checkbox = ({ description, error = false, extraInfo, label, labelTooltip, slotProps, ...props }) => {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const checkboxId = useId();
    const hoverBackgroundColor = newPalette?.action.background.neutral.hover;
    if (!label && !description && !extraInfo) {
        return (_jsx(CheckboxBase, { error: error, hoverBackgroundColor: hoverBackgroundColor, ...props }));
    }
    return (_jsxs(Stack, { sx: { flexDirection: 'row' }, children: [_jsx(CheckboxBase, { id: checkboxId, error: error, hoverBackgroundColor: hoverBackgroundColor, sx: { mt: 0.25 }, ...props }), _jsxs(Stack, { component: "label", htmlFor: checkboxId, sx: {
                    pl: 0.75,
                    cursor: props.disabled ? 'default' : 'pointer',
                }, children: [label && (_jsxs(Stack, { sx: {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 0.5,
                        }, children: [_jsx(Typography, { variant: "globalS", sx: {
                                    lineHeight: '24px',
                                    color: getLabelColor(theme, props.disabled, error),
                                }, children: label }), labelTooltip && (_jsx(Tooltip, { description: labelTooltip, children: _jsx(IconInfoCircle, { size: 13 }) }))] })), description && (_jsx(Typography, { variant: "globalXS", sx: { color: getDescriptionColor(theme, props.disabled) }, children: description }))] }), extraInfo && (_jsx(Typography, { variant: "globalXS", ...slotProps?.extraInfo, sx: {
                    color: getDescriptionColor(theme, props.disabled),
                    ml: 'auto',
                    ...slotProps?.extraInfo?.sx,
                }, children: extraInfo }))] }));
};
export default Checkbox;
