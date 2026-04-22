import { type STATUS } from './utils';
export type StageProps = {
    /** Stage data object to render */
    stage: Stage;
    /** Zero-based position of this stage in the wizard */
    index: number;
    /** Current visual status of the stage */
    status: STATUS;
    /** Whether this stage has been completed */
    isCompleted: boolean;
    /** Index of the active sub-stage within this stage */
    activeSubStage: number;
    /** Whether this stage is in an error state */
    hasError: boolean;
    /** Indexes of sub-stages within this stage that have errors */
    subStageErrors?: number[];
    /** Callback fired when this stage header is clicked */
    onStageClick?: (stageIndex: number) => void;
    /** Callback fired when a sub-stage item is clicked */
    onSubStageClick?: (stageIndex: number, subStageIndex: number) => void;
};
export type SubStage = {
    /** Display text for the sub-stage */
    label: string;
    /** Optional content rendered when this sub-stage is active */
    component?: React.ReactNode;
};
export type Stage = {
    /** Display text for the stage header */
    label: string;
    /** Sub-stages within this stage. Maximum 8 sub-stages supported. */
    subStages: SubStage[];
};
