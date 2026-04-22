import { jsx as _jsx } from "react/jsx-runtime";
import StateCard from '../../../../../design-system/StateCard';
import { FilterOption } from './types';
import CommentsTableList from '.';
const sampleData = [
    {
        score: 10,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        score: 9,
        comment: 'Great experience overall. The service was professional and the team was very responsive to all my needs. Would definitely recommend to others.',
    },
    {
        score: 8,
        comment: 'Very satisfied with the results. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
        score: 7,
        comment: 'Good, but could be better. There were some delays in communication, but overall the outcome met my expectations. Would use again with some reservations.',
    },
    {
        score: 6,
        comment: "Decent experience, nothing special. The service was adequate but didn't exceed expectations.",
    },
    {
        score: 5,
        comment: 'Average, meets expectations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        score: 4,
        comment: 'Below expectations. Several issues were encountered during the process, and resolution took longer than anticipated. Improvement needed.',
    },
    {
        score: 3,
        comment: 'Not satisfied with the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        score: 2,
        comment: 'Poor experience. Multiple problems occurred and customer support was not helpful in resolving them promptly.',
    },
    {
        score: 1,
        comment: 'Very disappointed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
];
// short comments
const shortData = [
    { score: 10, comment: 'Excellent' },
    { score: 7, comment: 'Pretty good' },
    { score: 3, comment: 'Not great' },
];
const meta = {
    title: 'Composed Components/peopleExperience/CommentsTableList',
    component: CommentsTableList,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        onFilterChange: {
            action: 'filter changed',
        },
        onLoadMore: {
            action: 'load more clicked',
        },
        onScrollToTop: {
            action: 'scroll to top clicked',
        },
    },
};
export default meta;
export const Default = {
    args: {
        data: sampleData,
        loadedCount: 10,
        totalCount: 10,
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const FilteredPromoters = {
    args: {
        data: sampleData.filter(d => d.score >= 9),
        loadedCount: 3,
        totalCount: 3,
        selectedFilter: FilterOption.PROMOTERS,
        filterLabels: {
            [FilterOption.ALL]: { label: 'All' },
            [FilterOption.PROMOTERS]: {
                label: 'Promoters',
                description: 'Users who gave a score of 9 or 10',
            },
            [FilterOption.DETRACTORS]: { label: 'Detractors' },
            [FilterOption.NEUTRALS]: { label: 'Neutrals' },
        },
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const FilteredDetractors = {
    args: {
        data: sampleData.filter(d => d.score <= 6),
        loadedCount: 7,
        totalCount: 7,
        selectedFilter: FilterOption.DETRACTORS,
        filterLabels: {
            [FilterOption.ALL]: { label: 'All' },
            [FilterOption.PROMOTERS]: { label: 'Promoters' },
            [FilterOption.DETRACTORS]: {
                label: 'Detractors',
                description: 'Users who gave a score of 6 or less',
            },
            [FilterOption.NEUTRALS]: { label: 'Neutrals' },
        },
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const FilteredNeutrals = {
    args: {
        data: sampleData.filter(d => d.score === 7 || d.score === 8),
        loadedCount: 2,
        totalCount: 2,
        selectedFilter: FilterOption.NEUTRALS,
        filterLabels: {
            [FilterOption.ALL]: { label: 'All' },
            [FilterOption.PROMOTERS]: { label: 'Promoters' },
            [FilterOption.DETRACTORS]: { label: 'Detractors' },
            [FilterOption.NEUTRALS]: {
                label: 'Neutrals',
                description: 'Users who gave a score of 7 or 8',
            },
        },
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const WithCustomTitle = {
    args: {
        title: 'Customer Feedback',
        data: sampleData,
        loadedCount: 10,
        totalCount: 10,
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const WithCustomColumnHeadings = {
    args: {
        data: sampleData,
        loadedCount: 10,
        totalCount: 10,
        onLoadMore: () => { },
        onScrollToTop: () => { },
        columnHeadings: {
            score: 'Rating',
            comment: 'Feedback',
        },
    },
};
export const WithCustomTitleAndColumns = {
    args: {
        title: 'Employee Reviews',
        data: sampleData,
        loadedCount: 10,
        totalCount: 10,
        onLoadMore: () => { },
        onScrollToTop: () => { },
        columnHeadings: {
            score: 'NPS Score',
            comment: 'Review',
        },
    },
};
export const WithMoreData = {
    args: {
        data: sampleData,
        loadedCount: 10,
        totalCount: 50,
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const WithDescriptions = {
    args: {
        data: sampleData,
        loadedCount: 10,
        totalCount: 10,
        selectedFilter: FilterOption.PROMOTERS,
        filterLabels: {
            [FilterOption.ALL]: {
                label: 'All',
                description: 'All comments regardless of score',
            },
            [FilterOption.PROMOTERS]: {
                label: 'Promoters',
                description: 'Users who gave a score of 9 or 10',
            },
            [FilterOption.DETRACTORS]: {
                label: 'Detractors',
                description: 'Users who gave a score of 6 or less',
            },
            [FilterOption.NEUTRALS]: {
                label: 'Neutrals',
                description: 'Users who gave a score of 7 or 8',
            },
        },
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const Loading = {
    args: {
        data: [],
        loading: true,
        loadedCount: 0,
        totalCount: 0,
    },
};
export const EmptyState = {
    args: {
        data: [],
        loadedCount: 0,
        totalCount: 0,
    },
};
export const ShortComments = {
    args: {
        data: shortData,
        loadedCount: 3,
        totalCount: 3,
        onLoadMore: () => { },
        onScrollToTop: () => { },
    },
};
export const EmptyStateWithCard = {
    args: {
        data: [],
        loadedCount: 0,
        totalCount: 0,
        emptyStateSlot: (_jsx(StateCard, { title: "No comments yet", description: "There are no comments available for the selected filter. Try selecting a different filter or check back later.", variant: "primary" })),
    },
};
