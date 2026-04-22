import { type DefaultItemType, JoinOperator } from '../ConditionLine/types';
export declare const fieldItems: {
    id: number;
    name: string;
}[];
export declare const valueItems: {
    id: number;
    name: string;
}[];
export declare const conditionLineSlotProps: {
    joinOperatorSelector: {
        options: {
            label: string;
            value: JoinOperator;
        }[];
    };
    conditionOperatorSelector: {
        children: string;
    };
    fieldSelector: {
        title: string;
        getTriggerTitle: (_value: DefaultItemType[]) => string;
    };
    valueSelector: {
        title: string;
        maxSelection: number;
        getTriggerTitle: (_value: DefaultItemType[]) => string;
    };
};
