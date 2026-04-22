import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IconButton, Stack, useTheme } from '@mui/material';
import { IconPlayerPlay, IconX } from '@tabler/icons-react';
import { FileTypes, getFileType } from '../../../utils/files';
import Spinner from '../../design-system/ProgressIndicators/Spinner';
import Sortable from './Sortable';
const VIDEO_ICON_SIZE = 24;
const itemSize = {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: 1,
};
const SortableItem = ({ item }) => {
    const form = useFormContext();
    const isLoading = !item.attachment;
    const fileType = item.attachment?.type || getFileType(item.file);
    let content = null;
    const src = useMemo(() => {
        if (item.file)
            return URL.createObjectURL(item.file);
        return item.attachment.url;
    }, [item.id]);
    useEffect(() => () => {
        if (item.file) {
            URL.revokeObjectURL(src);
        }
    }, []);
    switch (fileType) {
        case FileTypes.IMAGE:
            content = (_jsx(Stack, { component: "img", src: src, alt: item.file?.name || item.attachment?.name, sx: itemSize }));
            break;
        case FileTypes.VIDEO:
            content = (_jsx(_Fragment, { children: _jsxs(Stack, { sx: {
                        ...itemSize,
                        position: 'relative',
                    }, children: [_jsx(Stack, { component: "video", src: src, sx: { ...itemSize } }), _jsx(Stack, { sx: {
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }, children: _jsx(IconPlayerPlay, { size: VIDEO_ICON_SIZE, color: "white" }) })] }) }));
            break;
    }
    const media = form.watch('media');
    const theme = useTheme();
    return (_jsxs(Stack, { sx: { position: 'relative', mt: 1.5 }, children: [_jsx(IconButton, { sx: {
                    position: 'absolute',
                    top: '-12px',
                    right: '-12px',
                    backgroundColor: theme.palette.base.greyTransparent['300p50'],
                    zIndex: 1,
                    width: '24px',
                    height: '24px',
                    borderRadius: 1,
                    p: 0,
                }, onClick: () => form.setValue('media', media.filter(f => f !== item)), children: _jsx(IconX, { color: theme.palette.new.text.neutral.default, size: 16 }) }), content, isLoading && (_jsx(Spinner, { sx: { position: 'absolute', top: '25%', left: '25%' }, darkBackground: true }))] }));
};
export const EditMediaCarrousel = () => {
    const form = useFormContext();
    const { media } = form.watch();
    if (!media.length)
        return null;
    return (_jsx(Sortable, { items: media, onSort: newItems => form.setValue('media', newItems), ItemComponent: SortableItem }));
};
export default EditMediaCarrousel;
