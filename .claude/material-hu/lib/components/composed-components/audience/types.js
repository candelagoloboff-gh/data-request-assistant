/**
 * Types for the audience segmentation expression API.
 */
/** Condition type discriminators for the segmentation expression API. */
export var SegmentationConditionType;
(function (SegmentationConditionType) {
    SegmentationConditionType["ALL"] = "ALL";
    SegmentationConditionType["USERS"] = "USERS";
    SegmentationConditionType["ITEMS"] = "ITEMS";
    SegmentationConditionType["EXPRESSION"] = "EXPRESSION";
    SegmentationConditionType["USERS_OR_ITEMS"] = "USERS_OR_ITEMS";
})(SegmentationConditionType || (SegmentationConditionType = {}));
