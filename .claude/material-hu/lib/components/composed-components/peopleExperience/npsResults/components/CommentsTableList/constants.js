import { FilterOption } from './types';
export const filterOptions = [
    FilterOption.ALL,
    FilterOption.PROMOTERS,
    FilterOption.DETRACTORS,
    FilterOption.NEUTRALS,
];
export const defaultFilterLabels = {
    [FilterOption.ALL]: { label: 'All' },
    [FilterOption.PROMOTERS]: { label: 'Promoters' },
    [FilterOption.DETRACTORS]: { label: 'Detractors' },
    [FilterOption.NEUTRALS]: { label: 'Neutrals' },
};
export const defaultColumnHeadings = {
    score: 'Score',
    comment: 'Comment',
};
export const INITIAL_SKELETON_ROWS = 5;
export const LOADING_MORE_SKELETON_ROWS = 3;
