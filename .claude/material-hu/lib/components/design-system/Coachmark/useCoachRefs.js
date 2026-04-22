import { useCallback, useState } from 'react';
export const useCoachRefs = (steps) => {
    const [stepsWithRefs, setStepsWithRefs] = useState(steps.map(step => ({ ...step, ref: null })));
    const setRef = useCallback((index) => (node) => {
        setStepsWithRefs(previousSteps => {
            if (previousSteps[index]?.ref === node)
                return previousSteps;
            if (!previousSteps[index]?.ref) {
                const newRefs = [...previousSteps];
                newRefs[index] = { ...newRefs[index], ref: node };
                return newRefs;
            }
            return previousSteps;
        });
    }, []);
    return { stepsWithRefs, setRef };
};
