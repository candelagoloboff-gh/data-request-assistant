import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Stack, useTheme } from '@mui/material';
import ImageSkeleton from './skeleton';
const Image = ({ src, defaultSrc, alt = '', aspectRatio = '2/1', sx = {}, loading = false, }) => {
    const [imgUrl, setImgUrl] = useState(src ?? defaultSrc);
    const { shape } = useTheme();
    useEffect(() => {
        setImgUrl(src ?? defaultSrc);
    }, [src, defaultSrc]);
    const handleImgError = () => setImgUrl(defaultSrc);
    const commonSx = {
        borderRadius: shape.borderRadiusL,
        aspectRatio,
        ...sx,
    };
    if (loading) {
        return _jsx(ImageSkeleton, { sx: commonSx });
    }
    return (_jsx(Stack, { component: "img", src: imgUrl, alt: alt, onError: handleImgError, sx: {
            objectFit: 'cover',
            ...commonSx,
        } }));
};
export default Image;
