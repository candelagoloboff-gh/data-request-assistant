import { type HeatmapFilters, type HeatmapScoresResData, type HeatmapTotalResData } from '../types';
type HeatmapProps = {
    totalsData: HeatmapTotalResData | undefined;
    scoresData: HeatmapScoresResData | undefined;
    SegmentSelect: (props: {
        onChange: (value: HeatmapFilters['segment']) => void;
        value: HeatmapFilters['segment'];
    }) => JSX.Element;
    onFiltersChange: (nextFilters: HeatmapFilters) => void;
    defaultFilters: HeatmapFilters;
    loading?: boolean;
    scoreSelectDisabled?: boolean;
    restrictToParentId?: number;
};
declare const Heatmap: ({ totalsData, scoresData, loading, SegmentSelect, onFiltersChange, defaultFilters, scoreSelectDisabled, restrictToParentId, }: HeatmapProps) => import("react/jsx-runtime").JSX.Element;
export default Heatmap;
