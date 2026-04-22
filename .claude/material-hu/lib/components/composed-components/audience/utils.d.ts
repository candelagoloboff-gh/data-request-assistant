import { type AudienceQuery, type AudienceQueryCondition, type SegmentationExpressionCondition, type SegmentationExpressionPayload } from './types';
/**
 * Converts an audience query condition to a segmentation expression condition.
 */
export declare const audienceQueryConditionToExpression: (condition: AudienceQueryCondition) => SegmentationExpressionCondition;
/**
 * Converts an article's AudienceQuery (API response with resolved users)
 * into SegmentationExpressionPayload (request shape with userIds only).
 */
export declare const audienceQueryToSegmentationExpression: (audiencesQuery: AudienceQuery) => SegmentationExpressionPayload;
