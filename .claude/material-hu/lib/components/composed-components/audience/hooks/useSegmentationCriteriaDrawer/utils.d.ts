import { type DefaultItemType } from '../../../ConditionLine/types';
import { type SegmentationCriteriaValues } from './types';
export declare const isSegmentationCriteriaEmpty: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>(values: SegmentationCriteriaValues<FieldItemType, ValueItemType>) => boolean;
