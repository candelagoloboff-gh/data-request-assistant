import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import { IconExclamationCircle } from '@tabler/icons-react';
import InputSelectableListItem from './InputSelectableListItem';
const InputSelectableList = ({ isMultipleSelect, options, disabled, name, fieldProps, }) => {
    const { palette } = useTheme();
    const controller = useController({ name });
    const { fieldState } = controller;
    return (_jsxs(Stack, { sx: { gap: 1 }, children: [options.map(option => (_jsx(InputSelectableListItem, { option: option, controller: controller, isMultipleSelect: isMultipleSelect, disabled: disabled, fieldProps: fieldProps }, option.id))), _jsx(FormHelperText, { sx: {
                    mx: 0,
                    '& *': { color: `${palette.textColors?.errorText} !important` },
                }, children: _jsx(Stack, { component: "span", sx: { alignItems: 'center', flexDirection: 'row', gap: 0.5 }, children: fieldState.error?.message && (_jsxs(_Fragment, { children: [fieldState.error && _jsx(IconExclamationCircle, { size: "1rem" }), _jsx(Typography, { variant: "globalS", children: fieldState.error?.message })] })) }) })] }));
};
export default InputSelectableList;
