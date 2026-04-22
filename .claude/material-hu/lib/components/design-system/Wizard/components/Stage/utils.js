export var STATUS;
(function (STATUS) {
    STATUS["ACTIVE"] = "active";
    STATUS["COMPLETED"] = "completed";
    STATUS["FUTURE"] = "future";
})(STATUS || (STATUS = {}));
export const getStageColorConfig = (status, hasError, theme) => {
    if (hasError) {
        return {
            background: theme.palette.new.background.feedback.error,
            border: 'none',
            color: theme.palette.new.text.feedback.error,
        };
    }
    if (status === STATUS.COMPLETED) {
        return {
            background: theme.palette.new.background.feedback.highlight,
            border: theme.palette.new.border.neutral.brand,
            color: theme.palette.new.text.neutral.brand,
        };
    }
    if (status === STATUS.ACTIVE) {
        return {
            background: theme.palette.new.background.elements.default,
            border: theme.palette.new.border.neutral.brand,
            color: theme.palette.new.text.neutral.default,
        };
    }
    if (status === STATUS.FUTURE) {
        return {
            background: theme.palette.new.background.elements.default,
            border: theme.palette.new.border.neutral.default,
            color: theme.palette.new.text.neutral.lighter,
        };
    }
    return {
        background: theme.palette.new.background.elements.grey,
        border: theme.palette.new.border.neutral.default,
        color: theme.palette.new.text.neutral.default,
    };
};
export const getSubStageColorConfig = (status, hasError, theme) => {
    if (hasError) {
        return {
            color: theme.palette.new.text.feedback.error,
            border: theme.palette.new.border.states.error,
        };
    }
    if (status === STATUS.ACTIVE) {
        return {
            color: theme.palette.new.text.neutral.brand,
            border: theme.palette.new.text.neutral.brand,
        };
    }
    if (status === STATUS.COMPLETED) {
        return {
            color: theme.palette.new.text.neutral.lighter,
            border: theme.palette.new.border.neutral.brand,
        };
    }
    return {
        color: theme.palette.new.text.neutral.lighter,
        border: theme.palette.new.border.neutral.default,
    };
};
export const getStatus = (currentIndex, targetIndex, isStageCompleted) => {
    const isNotCurrentStage = currentIndex !== targetIndex;
    const isPastStage = targetIndex < currentIndex;
    const isFutureStage = currentIndex < targetIndex;
    if (isStageCompleted && isNotCurrentStage) {
        return STATUS.COMPLETED;
    }
    if (isPastStage) {
        return STATUS.COMPLETED;
    }
    if (isFutureStage) {
        return STATUS.FUTURE;
    }
    return STATUS.ACTIVE;
};
