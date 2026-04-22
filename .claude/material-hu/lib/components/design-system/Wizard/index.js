import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { Stage } from './components/Stage';
import { getStatus } from './components/Stage/utils';
import { MAX_STAGES, MAX_SUB_STAGES } from './constants';
const Wizard = ({ stages, activeStage = 0, activeSubStage = 0, errorStages = [], errorSubStages = [], completedStages = [], onStageClick, onSubStageClick, }) => {
    const limitedStages = stages.slice(0, MAX_STAGES).map(stage => ({
        ...stage,
        subStages: stage.subStages.slice(0, MAX_SUB_STAGES),
    }));
    const stageCount = limitedStages.length;
    const clampedActiveStage = Math.min(activeStage, stageCount - 1);
    const maxSubStages = limitedStages[clampedActiveStage]?.subStages.length ?? 0;
    const clampedActiveSubStage = Math.min(activeSubStage, maxSubStages - 1);
    const validErrorStages = errorStages?.filter(i => i < stageCount);
    const validCompletedStages = completedStages?.filter(i => i < stageCount);
    const validErrorSubStages = errorSubStages
        ?.filter(e => e.stageIndex < stageCount)
        .map(e => ({
        ...e,
        subStageIndexes: e.subStageIndexes.filter(i => i < (limitedStages[e.stageIndex]?.subStages.length ?? 0)),
    }));
    return (_jsx(Stack, { sx: { gap: 1 }, children: limitedStages.map((stage, index) => {
            const isCompleted = validCompletedStages?.includes(index);
            const status = getStatus(clampedActiveStage, index, isCompleted);
            const subStageErrors = validErrorSubStages?.find(error => error.stageIndex === index)?.subStageIndexes;
            return (_jsx(Stage, { index: index, stage: stage, status: status, isCompleted: isCompleted, activeSubStage: clampedActiveSubStage, hasError: validErrorStages?.includes(index), subStageErrors: subStageErrors, onStageClick: onStageClick, onSubStageClick: onSubStageClick }, index));
        }) }));
};
export default Wizard;
