import { type ConditionLineValues, type DefaultItemType } from './types';
export declare const isConditionEmpty: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>(values: ConditionLineValues<FieldItemType, ValueItemType>) => boolean;
