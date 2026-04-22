import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { Document, Page } from '../../../../../config/react-pdf';
import times from 'lodash/times';
import { usePdfVisualizer } from '../../context';
const ThumbnailsContent = () => {
    const theme = useTheme();
    const { file, totalPages, currentPage, scrollToPage, changePage } = usePdfVisualizer();
    const handleThumbnailClick = (page) => {
        changePage(page);
        scrollToPage(page);
    };
    return (_jsx(Stack, { sx: { alignItems: 'center', py: 2, px: 3 }, children: _jsx(Document, { file: file, loading: "", error: "", children: times(totalPages, index => {
                const page = index + 1;
                const isActive = currentPage === page;
                return (_jsx(ButtonBase, { onClick: () => handleThumbnailClick(page), sx: {
                        borderRadius: 1,
                        mb: 2,
                        border: `1px solid ${isActive
                            ? theme.palette.newBase?.brand[400]
                            : theme.palette.grey[300]}`,
                        overflow: 'hidden',
                        transition: 'border-color 0.2s ease',
                        '&:hover': {
                            borderColor: isActive
                                ? theme.palette.newBase?.brand[400]
                                : theme.palette.grey[400],
                        },
                    }, children: _jsx(Page, { pageNumber: page, width: 212, loading: "" }) }, `thumbnail-page-${page}`));
            }) }) }));
};
export default ThumbnailsContent;
