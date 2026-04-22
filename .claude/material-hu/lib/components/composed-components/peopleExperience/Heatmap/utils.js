export const isTotalColumn = (column) => column.title === 'TOTAL';
export const filtersReducer = (currentState, payload) => Object.assign({}, currentState, payload);
export const formatScore = (score) => {
    return Math.round(score * 100);
};
export const isBossSegment = (segmentId) => typeof segmentId !== 'number';
