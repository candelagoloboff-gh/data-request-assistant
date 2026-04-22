import TextInformation from '.';
const meta = {
    component: TextInformation,
    title: 'Composed Components/Learning/TextInformation',
    tags: ['autodocs'],
    args: {
        copetin: 'Copetin',
        title: 'Un título de prueba',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithVariant = {
    args: {
        variant: 'XL',
    },
};
export const WithLoading = {
    args: {
        loading: true,
    },
};
export const WithLoadingAndVariant = {
    args: {
        variant: 'XL',
        loading: true,
    },
};
