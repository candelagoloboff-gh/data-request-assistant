export type Nullable<T> = T | null;
export type HeatmapStats = {
    id: number;
    hasChildren: boolean;
    result: Nullable<number>;
    title: string;
    subtitle: string;
    baseResult: Nullable<number>;
    baseResultDifference: Nullable<number>;
    participantsAmount: Nullable<number>;
};
export type HeatmapSegmentStats = {
    id: number | string;
    result: Nullable<number>;
    stats: HeatmapStats[];
    title: string;
    subtitle: string;
};
export type HeatmapScoresResData = {
    hierarchy: HeatmapSegmentStats[];
    stats: HeatmapSegmentStats[];
};
export type HeatmapTotalResData = {
    hierarchy: HeatmapStats[];
    stats: HeatmapStats[];
};
export type HeatmapFilters = {
    dataSource: DataSource;
    scoreType: DropdownOptionItem<ScoreType>;
    segment: SegmentationGroup;
    parentId: Nullable<number>;
};
export declare enum SegmentationGroupType {
    AGE = "age",
    SENIORITY = "seniority",
    SEGMENTATION_GROUP = "segmentationGroup"
}
export type SegmentationGroup = {
    id: number | SegmentType;
    name: string;
    description?: string;
    type?: SegmentationGroupType;
};
export type DropdownOptionItem<TValue> = {
    id: TValue;
    name: string;
    description?: string;
};
export declare enum DataSource {
    QUESTIONS = "questions",
    TOPICS = "topics"
}
export declare enum ScoreType {
    SCORE = "SCORE",
    DIFFERENCE = "DIFFERENCE"
}
export declare enum SegmentType {
    SEGMENTATION_GROUPS = "SEGMENTATION_GROUPS",
    BOSSES = "BOSSES",
    DIRECT_BOSS = "DIRECT_BOSS"
}
export type BlackedSegment = {
    instanceId: number;
    segments: SegmentationGroup['id'][];
    surveyId?: number;
};
