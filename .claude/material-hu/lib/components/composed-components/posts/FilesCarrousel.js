import { jsx as _jsx } from "react/jsx-runtime";
import Carousel from 'react-material-ui-carousel';
import { Grid } from '@mui/material';
import { chunk } from 'lodash';
import FileCard from '../../design-system/FileCard';
import FileCarrouselItemEditable from './FileCarrouselItemEditable';
export const FilesCarrousel = ({ files, isEditable, filesCarrouselProps, }) => {
    const { slidesPerView = 3 } = filesCarrouselProps ?? {};
    if (!files?.length)
        return null;
    return (_jsx(Carousel, { indicators: false, navButtonsAlwaysVisible: true, navButtonsAlwaysInvisible: files.length === 1, fullHeightHover: false, cycleNavigation: false, autoPlay: false, sx: {
            overflow: 'unset',
            '> div:not(:first-of-type)': {
                top: '50%',
                transform: 'translateY(-50%)',
            },
            'div:has(> button[aria-label="Next"])': {
                right: '-30px',
            },
            'div:has(> button[aria-label="Previous"])': {
                left: '-30px',
            },
        }, children: chunk(files, slidesPerView).map(c => (_jsx(Grid, { container: true, columns: slidesPerView, spacing: 1, children: c.map(item => (_jsx(Grid, { item: true, xs: 1, children: isEditable ? (_jsx(FileCarrouselItemEditable, { item: item })) : (_jsx(FileCard, { sx: {
                        width: '100%',
                    }, file: item.file, attachment: item.attachment, status: "success" })) }, item.id))) }, c[0].id))) }, files.every(f => f.attachment).toString()));
};
export default FilesCarrousel;
