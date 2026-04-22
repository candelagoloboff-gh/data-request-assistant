import { type DefaultItemType } from '../../ConditionLine/types';
import { type CriteriaEntry, CriteriaType } from './types';
/**
 * Returns the criteria types that are not yet selected,
 * filtering out ALL since it can only be used alone.
 */
export declare const getAvailableCriteriaTypes: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>(criterias: CriteriaEntry<FieldItemType, ValueItemType>[]) => CriteriaType[];
