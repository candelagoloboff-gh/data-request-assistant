import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { getStageColorConfig, getStatus, getSubStageColorConfig, STATUS, } from './utils';
export const Stage = ({ stage, index, status, activeSubStage, isCompleted, hasError, subStageErrors, onStageClick, onSubStageClick, }) => {
    const theme = useTheme();
    const stageColorConfig = getStageColorConfig(status, hasError, theme);
    return (_jsxs(Box, { children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsxs(Stack, { onClick: status === STATUS.COMPLETED
                            ? () => onStageClick?.(index)
                            : undefined, sx: {
                            borderRadius: '100%',
                            border: `1px solid ${stageColorConfig.border}`,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: status === STATUS.COMPLETED ? 'pointer' : 'default',
                            backgroundColor: stageColorConfig.background,
                        }, children: [status === STATUS.COMPLETED && (_jsx(IconCheck, { size: 20, strokeWidth: 2, color: theme.palette.new.text.neutral.brand })), status !== STATUS.COMPLETED && (_jsx(Typography, { variant: "globalXS", sx: {
                                    fontWeight: 'fontWeightSemiBold',
                                    color: stageColorConfig.color,
                                }, children: index + 1 }))] }), _jsx(Typography, { variant: "globalS", sx: {
                            textAlign: 'center',
                            color: stageColorConfig.color,
                            fontWeight: 'fontWeightSemiBold',
                        }, children: stage.label })] }), status === STATUS.ACTIVE && (_jsx(Stack, { sx: { pt: 1 }, children: stage.subStages.map((subStage, subStageIndex) => {
                    const subStageStatus = getStatus(activeSubStage, subStageIndex, isCompleted);
                    const hasSubStageError = subStageErrors?.includes(subStageIndex) ?? false;
                    const subStageColor = getSubStageColorConfig(subStageStatus, hasSubStageError, theme);
                    return (_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            gap: 1,
                            alignItems: 'center',
                            cursor: subStageStatus === STATUS.COMPLETED ? 'pointer' : 'default',
                        }, onClick: subStageStatus === STATUS.COMPLETED
                            ? () => onSubStageClick?.(index, subStageIndex)
                            : undefined, children: [_jsx(Stack, { sx: { alignItems: 'center', width: 40, height: 40 }, children: _jsx(Stack, { sx: {
                                        width: 0,
                                        height: '36px',
                                        border: `2px solid ${subStageColor.border}`,
                                    } }, subStage.label) }), _jsx(Typography, { variant: "globalS", sx: {
                                    textAlign: 'center',
                                    color: subStageColor.color,
                                }, children: subStage.label })] }, subStageIndex));
                }) }))] }));
};
