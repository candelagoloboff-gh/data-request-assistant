import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, useTheme } from '@mui/material';
import Avatar from '../../Avatar';
import RadioBase from '../RadioBase';
import { getLabelColor, getSecondaryTextColor } from './utils';
const RadioButton = ({ error = false, disabled = false, isActive = false, label, extraData, description, onClick = () => { }, stackSx = {}, labelProps = {}, avatarProps, ...props }) => {
    const theme = useTheme();
    const labelColor = getLabelColor(theme, disabled, error);
    const secondaryTextColor = getSecondaryTextColor(theme, disabled);
    const handleClick = () => !disabled && onClick(!isActive);
    return (_jsxs(Stack, { sx: {
            alignItems: avatarProps ? 'center' : 'flex-start',
            flexDirection: 'row',
            gap: 0.5,
            cursor: 'pointer',
            ...stackSx,
        }, onClick: handleClick, children: [_jsx(RadioBase, { ...props, disabled: disabled, checked: isActive, error: error }), avatarProps && (_jsx(Avatar, { sx: { ml: 1.5, mr: 0.5 }, ...avatarProps })), _jsxs(Stack, { component: "label", sx: { gap: '2px', cursor: 'pointer' }, children: [_jsxs(Stack, { sx: {
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '4px',
                        }, children: [_jsx(Typography, { variant: "globalS", sx: {
                                    color: labelColor,
                                    minWidth: '200px',
                                }, ...labelProps, children: label }), extraData && (_jsx(Typography, { variant: "globalXS", sx: {
                                    color: secondaryTextColor,
                                }, children: extraData }))] }), description && (_jsx(Typography, { variant: "globalXS", sx: {
                            color: secondaryTextColor,
                        }, children: description }))] })] }));
};
export default RadioButton;
