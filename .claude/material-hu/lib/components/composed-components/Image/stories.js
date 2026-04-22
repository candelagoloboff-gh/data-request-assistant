import Image from '.';
const meta = {
    component: Image,
    title: 'Composed Components/Image',
    parameters: {
        componentSubtitle: 'Shows an image with a defined aspect ratio',
    },
    tags: ['autodocs'],
    args: {
        sx: { maxWidth: '100%', width: '350px' },
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.20minutos.es%2Fuploads%2Fimagenes%2F2024%2F05%2F15%2Funa-imagen-creada-por-la-herramienta-imagen-3-de-google.jpeg&f=1&nofb=1&ipt=14a3f0f9f5cd7a85de34990d17d6ec5d2ddb9d80c483c2dc984d1a4d2a9e181c',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithDefaultSrc = {
    args: {
        src: 'broke-img',
        defaultSrc: 'src/assets/default-img.png',
    },
};
export const WithAspectRatio = {
    args: {
        aspectRatio: '1/1',
    },
};
export const WithLoading = {
    args: {
        loading: true,
    },
};
export const WithLoadingAndAspectRatio = {
    args: {
        aspectRatio: '1/1',
        loading: true,
    },
};
