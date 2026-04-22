import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Stack, useTheme } from '@mui/material';
const CoverPictureImage = ({ image, aspectRatio = '2/1', }) => {
    const { shape, palette } = useTheme();
    const src = useMemo(() => {
        if (!image)
            return '';
        return image instanceof File ? URL.createObjectURL(image) : image;
    }, [image]);
    return (_jsx(Stack, { className: "HuCoverPictureUploader-image", sx: {
            p: 2,
            borderRadius: shape.borderRadiusL,
            backgroundColor: palette.new.background.elements.default,
        }, children: _jsx(Stack, { component: "img", alt: "", src: src, sx: {
                borderRadius: shape.borderRadiusL,
                aspectRatio,
            } }) }));
};
export default CoverPictureImage;
