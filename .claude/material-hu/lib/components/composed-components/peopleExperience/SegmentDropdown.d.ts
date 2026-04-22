import { type PxTypes } from '.';
export type SegmentDropdownProps = {
    value: PxTypes.SegmentationGroup;
    onChange: (value: PxTypes.SegmentationGroup) => void;
    instanceId: number;
    surveyId: number;
    options: PxTypes.SegmentationGroup[];
    loading?: boolean;
};
declare const SegmentDropdown: ({ value, onChange, instanceId, surveyId, options, loading, }: SegmentDropdownProps) => import("react/jsx-runtime").JSX.Element;
export default SegmentDropdown;
