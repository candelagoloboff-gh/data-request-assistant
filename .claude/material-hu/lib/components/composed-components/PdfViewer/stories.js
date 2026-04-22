import dummyPdf2 from '../../../../static/prueba-texto-largo.pdf';
import dummyPdf from '../../../../static/test-links.pdf';
import { PdfFullScreen } from './components/FullScreen';
import PdfViewer from '.';
const meta = {
    component: PdfViewer,
    title: 'Composed Components/PdfViewer',
    tags: ['autodocs'],
    args: {
        name: 'Nombre del archivo.pdf',
        file: dummyPdf,
    },
};
const fullScreenMetadata = {
    component: PdfFullScreen,
    title: 'Composed Components/PdfViewer/FullScreen',
    tags: ['autodocs'],
    args: {
        file: dummyPdf,
    },
};
export default meta;
export { fullScreenMetadata as PdfFullScreenMeta };
export const Default = {
    args: {},
};
export const FloatingVariant = {
    args: {
        variant: 'floating',
        file: dummyPdf2,
    },
};
export const FullScreenWithHeader = {
    args: {
        slotProps: {
            fullscreen: {
                showHeader: true,
            },
        },
    },
};
export const WithoutFullScreenAndRotation = {
    args: {
        slotProps: {
            navbar: {
                showFullScreen: false,
                showRotation: false,
            },
        },
    },
};
export const FullScreenWithFetching = {
    args: {
        fileProps: {
            isLoading: false,
        },
    },
};
