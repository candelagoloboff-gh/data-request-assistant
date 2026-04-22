import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { autocompleteClasses, Stack, useTheme, } from '@mui/material';
const AutocompleteItem = forwardRef(({ children, ...props }, ref) => {
    const theme = useTheme();
    return (_jsx(Stack, { component: "li", ref: ref, ...props, sx: {
            flexDirection: 'row',
            [`&.${autocompleteClasses.option}`]: {
                transition: 'background-color 0.125s ease',
                padding: theme.spacing(2),
            },
            [`&.${autocompleteClasses.option}:hover`]: {
                backgroundColor: theme.palette.new.action.background.neutral.hover,
            },
            ...props.sx,
        }, children: children }));
});
AutocompleteItem.displayName = 'AutocompleteItem';
export default AutocompleteItem;
