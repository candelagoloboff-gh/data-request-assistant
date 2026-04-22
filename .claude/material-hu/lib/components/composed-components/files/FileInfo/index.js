import { jsx as _jsx } from "react/jsx-runtime";
import Title from '../../../design-system/Title';
import { getFileInfo } from './utils';
const FileInfo = ({ sx, file, slotProps = {} }) => {
    const { name, size, extension } = getFileInfo(file);
    const description = `${size} • ${extension}`;
    return (_jsx(Title, { variant: "S", title: name, description: description, withEllipsis: true, overflow: "tooltip", ...slotProps.root, sx: {
            ...sx,
            ...slotProps.root?.sx,
        } }));
};
export default FileInfo;
