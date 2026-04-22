import AdaptiveTextList from './index';
export default {
    title: 'Composed Components/AdaptiveTextList',
    component: AdaptiveTextList,
    args: {
        items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'],
        actualCount: 6,
        getAndText: (left, right) => `${left} and ${right}`,
        getMoreText: (count) => `${count} more`,
    },
};
export const Default = {};
export const OneItem = {
    args: {
        items: ['OnlyOne'],
        actualCount: 1,
    },
};
export const TwoItems = {
    args: {
        items: ['Alpha', 'Beta'],
        actualCount: 2,
    },
};
export const WithMoreCountThanLoaded = {
    args: {
        items: ['Alpha', 'Beta', 'Gamma'],
        actualCount: 7,
    },
};
export const CustomAndAndMoreText = {
    args: {
        items: ['Red', 'Blue', 'Green'],
        actualCount: 5,
        getAndText: (left, right) => `${left} & ${right}`,
        getMoreText: count => `plus ${count} extras`,
    },
};
export const EmptyList = {
    args: {
        items: [],
        actualCount: 0,
    },
};
export const ManyItemsNarrow = {
    args: {
        items: [
            'Item one',
            'Item two with longer name',
            'Short',
            'Another item',
            'Fifth item',
            'And more',
        ],
        actualCount: 8,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
