import TextChart from '.';
const meta = {
    component: TextChart,
    title: 'Composed Components/People Experience/SurveyResults/TextChart',
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        data: [
            { label: 'Service', value: 45 },
            { label: 'Quality', value: 30 },
            { label: 'Shipping', value: 15 },
            { label: 'Prices', value: 10 },
        ],
    },
};
export const LargeDataset = {
    args: {
        data: [
            { label: 'Collaboration', value: 120 },
            { label: 'Balance', value: 95 },
            { label: 'Growth', value: 85 },
            { label: 'Compensation', value: 75 },
            { label: 'Flexibility', value: 65 },
            { label: 'Learning', value: 55 },
            { label: 'Culture', value: 50 },
            { label: 'Support', value: 45 },
            { label: 'Benefits', value: 40 },
            { label: 'Environment', value: 35 },
            { label: 'Recognition', value: 30 },
            { label: 'Technology', value: 25 },
            { label: 'Inclusion', value: 20 },
            { label: 'Events', value: 15 },
            { label: 'Wellness', value: 10 },
        ],
    },
};
export const VariedValues = {
    args: {
        data: [
            { label: 'Satisfied', value: 250 },
            { label: 'Quality', value: 180 },
            { label: 'Staff', value: 120 },
            { label: 'Website', value: 85 },
            { label: 'Delivery', value: 60 },
            { label: 'Policy', value: 40 },
            { label: 'Pricing', value: 25 },
            { label: 'Packaging', value: 15 },
        ],
    },
};
export const LongWords = {
    args: {
        data: [
            {
                label: 'Pneumonoultramicroscopicsilicovolcanoconiosis',
                value: 95,
            },
            {
                label: 'Pseudopsychotherapeutic',
                value: 80,
            },
            {
                label: 'Antidisestablishmentarianism',
                value: 65,
            },
            {
                label: 'Honorificabilitudinitatibus',
                value: 45,
            },
            { label: 'Incomprehensibilities', value: 30 },
        ],
    },
};
export const SmallDataset = {
    args: {
        data: [
            { label: 'Positive', value: 65 },
            { label: 'Neutral', value: 25 },
            { label: 'Negative', value: 10 },
        ],
    },
};
export const WithItemClick = {
    args: {
        data: [
            { label: 'Service', value: 45 },
            { label: 'Quality', value: 30 },
            { label: 'Shipping', value: 15 },
            { label: 'Prices', value: 10 },
        ],
        onItemClick: (index) => alert(`Clicked item index: ${index}`),
    },
};
export const WithFooter = {
    args: {
        data: [
            { label: 'Service', value: 45 },
            { label: 'Quality', value: 30 },
            { label: 'Shipping', value: 15 },
            { label: 'Prices', value: 10 },
        ],
        footer: 'Total responses: 100',
    },
};
