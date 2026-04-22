import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Step from './components/Step';
const Stepper = ({ steps, currentStep = 0, completedSteps = [], errorSteps = [], completeBeforeCurrent = true, sx = {}, }) => {
    const lastStep = steps.length - 1;
    if (!steps?.length)
        return null;
    return (_jsx(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'start',
            overflow: 'auto',
            ...sx,
        }, children: steps?.map((step, index) => {
            const isCurrent = index === currentStep;
            const isBeforeCurrent = index < currentStep;
            const isCompletedStep = Array.isArray(completedSteps) && completedSteps?.includes(index);
            const hasError = Array.isArray(errorSteps) && errorSteps?.includes(index);
            return (_jsx(Step, { hasError: hasError, id: step.id, isCompleted: (completeBeforeCurrent && isBeforeCurrent) || isCompletedStep, isCurrent: isCurrent, isLast: index === lastStep, number: step.number || index + 1, subtitle: step.subtitle, title: step.title }, step.id));
        }) }));
};
export default Stepper;
