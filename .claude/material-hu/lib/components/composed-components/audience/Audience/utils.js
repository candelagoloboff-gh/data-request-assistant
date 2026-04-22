import { CriteriaType } from './types';
/**
 * Returns the criteria types that are not yet selected,
 * filtering out ALL since it can only be used alone.
 */
export const getAvailableCriteriaTypes = (criterias) => {
    const selectedTypes = new Set(criterias.map(c => c.type));
    if (selectedTypes.has(CriteriaType.ALL))
        return [];
    return [CriteriaType.SEGMENTATION, CriteriaType.INDIVIDUAL].filter(type => !selectedTypes.has(type));
};
