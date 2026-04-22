/**
 * Types for the audience segmentation expression API.
 */
/** Condition type discriminators for the segmentation expression API. */
export declare enum SegmentationConditionType {
    ALL = "ALL",
    USERS = "USERS",
    ITEMS = "ITEMS",
    EXPRESSION = "EXPRESSION",
    USERS_OR_ITEMS = "USERS_OR_ITEMS"
}
/** Condition that matches all users in the instance. */
export type AllCondition = {
    type: SegmentationConditionType.ALL;
};
/** Condition that matches specific users by their IDs. */
export type UsersCondition = {
    type: SegmentationConditionType.USERS;
    userIds: number[];
};
/** Condition that matches users by segmentation item IDs. */
export type ItemsCondition = {
    type: SegmentationConditionType.ITEMS;
    segmentationItemIds: number[];
};
/** Condition that matches specific users by their IDs or users by segmentation item IDs. */
export type UsersOrItemsCondition = {
    type: SegmentationConditionType.USERS_OR_ITEMS;
    segmentationItemIds?: number[];
    userIds?: number[];
};
/** Nested expression that combines sub-conditions with a logical operator. */
export type ExpressionCondition = {
    type: SegmentationConditionType.EXPRESSION;
    operator: 'AND' | 'OR';
    expressions: (ItemsCondition | UsersCondition)[];
};
/** User type for the audience query. */
export type AudienceUser = {
    id: number;
    firstName: string;
    lastName: string;
};
/**
 * A single condition as returned by the audience query API.
 * Unlike the payload types used for writing, this shape includes
 * resolved user data (names) and nested expressions for reading.
 */
export type AudienceQueryCondition = {
    type: SegmentationConditionType;
    /** Resolved users with basic profile info (populated for USERS / USERS_OR_ITEMS types). */
    users: AudienceUser[];
    /** Flat list of segmentation item IDs (populated for ITEMS / USERS_OR_ITEMS types). */
    segmentationItemIds: number[];
    /** Nested sub-expressions (populated for EXPRESSION type). */
    expressions: SegmentationExpressionCondition[];
};
/** Top-level audience query returned by the API for a given article. */
export type AudienceQuery = {
    conditions: AudienceQueryCondition[];
};
/** Union of all possible condition types in a segmentation expression. */
export type SegmentationExpressionCondition = AllCondition | UsersCondition | ItemsCondition | UsersOrItemsCondition | ExpressionCondition;
/** Root segmentation expression containing an array of conditions. */
export type SegmentationExpressionPayload = {
    conditions: SegmentationExpressionCondition[];
};
/** Request payload for the audience count endpoint. */
export type AudienceExpressionCountRequest = {
    q?: string;
    statuses?: string;
    segmentationExpression: SegmentationExpressionPayload;
};
/** Response from the audience count endpoint. */
export type AudienceExpressionCountResponse = {
    count: number;
};
/** Request payload for the audience search endpoint. */
export type AudienceExpressionSearchRequest = {
    limit: number;
    cursor?: string | null;
    q?: string;
    statuses?: string;
    segmentationExpression: SegmentationExpressionPayload;
};
/** User item returned by the audience search endpoint. */
export type AudienceExpressionUser = {
    id: number;
    employeeInternalId: string;
    firstName: string;
    lastName: string;
    profilePicture: string | null;
    email: string | null;
    status: string;
};
/** Response from the audience search endpoint (cursor-based pagination). */
export type AudienceExpressionSearchResponse = {
    cursor?: string;
    items: AudienceExpressionUser[];
};
