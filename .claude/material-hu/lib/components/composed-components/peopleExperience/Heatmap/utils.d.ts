import { type HeatmapFilters, type HeatmapStats } from '../types';
export declare const isTotalColumn: (column: HeatmapStats) => boolean;
export declare const filtersReducer: (currentState: HeatmapFilters, payload: Partial<HeatmapFilters>) => HeatmapFilters & Partial<HeatmapFilters>;
export declare const formatScore: (score: number) => number;
export declare const isBossSegment: (segmentId: HeatmapFilters["segment"]["id"]) => segmentId is import("../types").SegmentType;
