import { type Stage } from './components/Stage/type';
export type ErrorSubStage = {
    /** Index of the stage that contains sub-stage errors */
    stageIndex: number;
    /** Indexes of sub-stages within the stage that are in an error state */
    subStageIndexes: number[];
};
export type WizardProps = {
    /** Main stages of the wizard. Maximum 5 stages supported. */
    stages: Stage[];
    /** Index of the currently active stage */
    activeStage?: number;
    /** Index of the currently active sub-stage within the active stage */
    activeSubStage?: number;
    /** Indexes of stages that are marked as completed */
    completedStages?: number[];
    /** Indexes of stages that are in an error state */
    errorStages?: number[];
    /** Stage and sub-stage index pairs that have errors */
    errorSubStages?: ErrorSubStage[];
    /** Callback fired when a stage header is clicked */
    onStageClick?: (stageIndex: number) => void;
    /** Callback fired when a sub-stage item is clicked */
    onSubStageClick?: (stageIndex: number, subStageIndex: number) => void;
};
