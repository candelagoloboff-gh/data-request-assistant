import { bytesToSize } from '../../../../utils/bytes';
import { getFileExtension } from '../../../../utils/files';
export const getFileInfo = (file) => {
    const name = file?.name || '';
    const size = typeof file?.size === 'string' ? file?.size : bytesToSize(file?.size);
    return {
        name,
        size,
        extension: getFileExtension(name).toUpperCase(),
    };
};
