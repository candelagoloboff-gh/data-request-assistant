import { jsx as _jsx } from "react/jsx-runtime";
import Avatar from '../../../design-system/Avatar';
import { useTheme } from '@mui/material';
import { fileToIconV2 } from './utils';
export const FileIcon = ({ file, ...rest }) => {
    const theme = useTheme();
    const { Icon, color, colorsSX } = fileToIconV2(file, theme);
    return (_jsx(Avatar, { size: "medium", color: color, Icon: Icon, ...rest, sx: { ...colorsSX, ...rest?.sx } }));
};
export default FileIcon;
