import { jsx as _jsx } from "react/jsx-runtime";
import { CardMedia, useTheme } from '@mui/material';
const CardContainerImage = ({ img, sx }) => {
    const { shape } = useTheme();
    if (!img)
        return null;
    return (_jsx(CardMedia, { className: "CardContainerImage-root", component: "img", src: img, alt: "", sx: {
            borderRadius: shape.borderRadiusL,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            aspectRatio: '2/1',
            objectFit: 'cover',
            ...sx,
        } }));
};
export default CardContainerImage;
