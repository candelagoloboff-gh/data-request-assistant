import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FileIcon from '../../files/FileIcon';
import FileInfo from '../../files/FileInfo';
import MenuList from '../../MenuList';
import CardContainer from '../../../design-system/CardContainer';
import { getFileExtension } from '../../../../utils/files';
const FileItem = ({ sx, file, actions, startContent, slotProps = {}, }) => {
    const iconFile = {
        extension: getFileExtension(file?.name || ''),
    };
    return (_jsxs(CardContainer, { ...slotProps.root, sx: {
            '& .MuiCardContent-root': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
            },
            ...sx,
            ...slotProps.root?.sx,
        }, children: [startContent, _jsx(FileIcon, { file: iconFile, ...slotProps.icon }), _jsx(FileInfo, { file: file, ...slotProps.info, sx: {
                    flex: 1,
                    ...slotProps.info?.sx,
                } }), actions && (_jsx(MenuList, { options: actions, ...slotProps.menu }))] }));
};
export default FileItem;
