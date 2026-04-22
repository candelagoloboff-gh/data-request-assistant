import { ANNOTATION_LAYER_STYLES } from '../../../PdfViewer/constants';
import { Dialog } from '@mui/material';
import { styled } from '@mui/system';
export const FileDialog = styled(Dialog)({
    ...ANNOTATION_LAYER_STYLES,
    borderRadius: 0,
    '& .pg-viewer-wrapper': {
        overflow: 'hidden',
    },
    '& .MuiDialog-container': {
        overflow: 'hidden',
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.5)',
        },
    },
    '& .MuiPaper-root': {
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: 'none !important',
        maxWidth: 'none !important',
        marginLeft: '2px !important',
        marginRight: '2px !important',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '8px',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#4c4c4c',
            borderRadius: '100px',
            width: '8px',
            borderColor: 'transparent',
            borderStyle: 'solid',
        },
    },
    '& .has-margin-top-15': {
        marginTop: '0px !important',
    },
    '& .MuiModal-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    '& .react-pdf__Document': {
        maxHeight: '86vh',
    },
    '& .react-pdf__Page': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .document-container': {
        height: '90vh',
        overflow: 'auto',
    },
});
export default FileDialog;
