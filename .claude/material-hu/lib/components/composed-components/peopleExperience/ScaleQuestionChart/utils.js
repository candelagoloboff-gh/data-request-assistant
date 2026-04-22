import { colorPalette } from '../../../../theme/hugo/colors';
export const getColorFromType = (type) => {
    switch (type) {
        case 'POSITIVE':
            return colorPalette.newBase.green[700];
        case 'NEGATIVE':
            return colorPalette.newBase.red[600];
        case 'NEUTRAL':
            return colorPalette.newBase.yellow[400];
        default:
            return '';
    }
};
