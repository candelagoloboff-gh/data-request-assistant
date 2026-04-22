import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { InputAdornment, TextField, useTheme, } from '@mui/material';
import { IconX, IconZoom } from '@tabler/icons-react';
import CustomHelperText from '../../../design-system/Inputs/Base/CustomHelperText';
const MAX_LENGTH = 255;
const buildSearchbar = ({ control, setValue, defaultQuery = '', }) => {
    const SearchBarController = ({ inputProps, hasCounter, helperText, ...props }) => {
        const theme = useTheme();
        const iconColor = theme.palette.new?.text.neutral.lighter;
        return (_jsx(Controller, { control: control, name: "query", defaultValue: defaultQuery, render: ({ field }) => (_jsx(TextField, { fullWidth: true, InputProps: {
                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(IconZoom, { size: 24, color: iconColor }) })),
                    endAdornment: (_jsx(InputAdornment, { position: "end", sx: {
                            cursor: 'pointer',
                            visibility: field.value ? 'visible' : 'hidden',
                        }, children: _jsx(IconX, { size: 24, color: iconColor, onClick: () => setValue('query', '') }) })),
                }, inputProps: { maxLength: MAX_LENGTH, ...inputProps }, variant: "outlined", ...field, ...props, helperText: _jsx(CustomHelperText, { helperText: helperText, value: field.value, maxLength: inputProps?.maxLength || MAX_LENGTH, hasCounter: hasCounter }) })) }));
    };
    return SearchBarController;
};
export default buildSearchbar;
