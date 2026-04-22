import { SegmentationConditionType, } from './types';
/**
 * Converts an audience query condition to a segmentation expression condition.
 */
export const audienceQueryConditionToExpression = (condition) => {
    const userIds = condition?.users?.map(user => user.id) ?? [];
    const segmentationItemIds = condition?.segmentationItemIds ?? [];
    if (userIds.length > 0 && segmentationItemIds.length > 0) {
        return {
            type: SegmentationConditionType.USERS_OR_ITEMS,
            userIds,
            segmentationItemIds,
        };
    }
    if (userIds.length > 0) {
        return {
            type: SegmentationConditionType.USERS,
            userIds,
        };
    }
    if (segmentationItemIds.length > 0) {
        return {
            type: SegmentationConditionType.ITEMS,
            segmentationItemIds,
        };
    }
    return {
        type: SegmentationConditionType.ALL,
    };
};
/**
 * Converts an article's AudienceQuery (API response with resolved users)
 * into SegmentationExpressionPayload (request shape with userIds only).
 */
export const audienceQueryToSegmentationExpression = (audiencesQuery) => {
    return {
        conditions: audiencesQuery?.conditions.map(audienceQueryConditionToExpression),
    };
};
