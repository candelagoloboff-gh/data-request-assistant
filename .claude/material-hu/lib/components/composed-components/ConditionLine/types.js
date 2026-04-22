/**
 * Available condition operators for filtering values
 */
export var ConditionOperator;
(function (ConditionOperator) {
    /** Exactly equals to */
    ConditionOperator["IS"] = "IS";
    /** Not equal to */
    ConditionOperator["IS_NOT"] = "IS_NOT";
    /** Is within a list of values */
    ConditionOperator["IS_IN"] = "IS_IN";
    /** Is not within a list of values */
    ConditionOperator["IS_NOT_IN"] = "IS_NOT_IN";
    /** Contains the specified value */
    ConditionOperator["CONTAINS"] = "CONTAINS";
    /** Does not contain the specified value */
    ConditionOperator["NOT_CONTAINS"] = "NOT_CONTAINS";
    /** Is greater than */
    ConditionOperator["IS_GREATER_THAN"] = "IS_GREATER_THAN";
    /** Is less than */
    ConditionOperator["IS_LESS_THAN"] = "IS_LESS_THAN";
    /** Is greater than or equal to */
    ConditionOperator["IS_GREATER_THAN_OR_EQUAL_TO"] = "IS_GREATER_THAN_OR_EQUAL_TO";
    /** Is less than or equal to */
    ConditionOperator["IS_LESS_THAN_OR_EQUAL_TO"] = "IS_LESS_THAN_OR_EQUAL_TO";
    /** Field is empty */
    ConditionOperator["IS_EMPTY"] = "IS_EMPTY";
    /** Field is not empty */
    ConditionOperator["IS_NOT_EMPTY"] = "IS_NOT_EMPTY";
})(ConditionOperator || (ConditionOperator = {}));
/**
 * Logical operators for joining conditions
 */
export var JoinOperator;
(function (JoinOperator) {
    /** AND operator - both conditions must be met */
    JoinOperator["AND"] = "AND";
    /** OR operator - at least one condition must be met */
    JoinOperator["OR"] = "OR";
})(JoinOperator || (JoinOperator = {}));
