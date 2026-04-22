import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { SIZE } from '../constants';
export const SelectedColorTile = ({ hex }) => {
    return (_jsx(Stack, { sx: {
            width: SIZE,
            height: SIZE,
            borderRadius: 0.5,
            bgcolor: hex,
        } }));
};
