import { ConditionOperator, JoinOperator, } from '../ConditionLine/types';
export const emptyCondition = {
    joinOperator: JoinOperator.AND,
    field: null,
    conditionOperator: ConditionOperator.IS_IN,
    value: [],
};
