import { IconFile, IconFileDescription, IconFileMusic, IconFileSpreadsheet, IconFileTypePdf, IconFileTypePpt, IconFileZip, IconFolder, IconMovie, IconPhoto, IconPresentationAnalytics, } from '@tabler/icons-react';
export const fileToIconV2 = (file, theme) => {
    let Icon = null;
    let color = 'default';
    let colorsSX = {};
    switch (file.extension?.toLowerCase()) {
        case 'xls':
        case 'xlsx':
        case 'xlsm':
        case 'xlsb':
        case 'csv':
            Icon = IconFileSpreadsheet;
            color = 'success';
            break;
        case 'ppt':
        case 'pptx':
        case 'ppsx':
        case 'ppsm':
            Icon = IconPresentationAnalytics;
            color = 'warning';
            break;
        case 'doc':
        case 'docx':
            Icon = IconFileDescription;
            color = 'primary';
            break;
        case 'gif':
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'jpe':
        case 'webp':
            Icon = IconPhoto;
            color = 'highlight';
            break;
        case 'pdf':
            Icon = IconFileTypePdf;
            color = 'error';
            break;
        case 'mov':
        case 'avi':
        case 'mpeg':
        case 'mpg':
        case 'mpe':
        case 'm1v':
        case 'm2v':
        case 'webm':
        case 'mp4':
        case 'm4v':
        case 'qt':
            Icon = IconMovie;
            colorsSX = {
                backgroundColor: theme.palette.new.background.feedback.info,
                color: theme.palette.new.text.feedback.info,
            };
            break;
        case 'mp3':
            Icon = IconFileMusic;
            colorsSX = {
                backgroundColor: '#FAF3FB',
                color: '#40143B',
            };
            break;
        case 'zip':
            Icon = IconFileZip;
            colorsSX = {
                backgroundColor: '#FDF6F4',
                color: '#632513',
            };
            break;
        default:
            Icon = IconFile;
            color = 'default';
    }
    if (file.type === 'FOLDER') {
        Icon = IconFolder;
    }
    return { Icon, color, colorsSX };
};
/**
 * @deprecated Use fileToIconV2 instead
 */
export const fileToIcon = (file) => {
    if (file.type === 'FOLDER') {
        return IconFolder;
    }
    switch (file.extension?.toLowerCase()) {
        case 'xls':
        case 'xlsx':
        case 'xlsm':
        case 'csv':
            return IconFileSpreadsheet;
        case 'ppt':
        case 'pptx':
        case 'ppsx':
        case 'ppsm':
            return IconFileTypePpt;
        case 'gif':
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'jpe':
        case 'webp':
            return IconPhoto;
        case 'pdf':
            return IconFileTypePdf;
        case 'mov':
        case 'avi':
        case 'mpeg':
        case 'mpg':
        case 'mpe':
        case 'm1v':
        case 'm2v':
        case 'webm':
        case 'mp4':
        case 'm4v':
        case 'qt':
            return IconMovie;
        default:
            return IconFileDescription;
    }
};
