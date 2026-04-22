import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IconCheck } from '@tabler/icons-react';
import { getColorConfig } from './utils';
const Step = ({ hasError, isCompleted, isCurrent, isLast, number, subtitle, title, }) => {
    const theme = useTheme();
    const colorConfig = getColorConfig(theme, {
        isCurrent,
        hasError,
        isCompleted,
    });
    return (_jsxs(Stack, { sx: {
            flex: isLast ? 0 : 1,
            whiteSpace: 'nowrap',
            width: '100%',
            flexDirection: 'column',
            gap: 1,
            color: colorConfig.text || '',
        }, children: [_jsxs(Stack, { sx: { width: '100%', flexDirection: 'row', alignItems: 'center' }, children: [_jsx(Stack, { sx: {
                            flex: 0,
                            flexBasis: 40,
                            height: 40,
                            minWidth: 40,
                            borderRadius: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid',
                            transition: 'border 0.15s, color 0.15s, background-color 0.15s',
                            borderColor: colorConfig.border,
                            color: colorConfig.text,
                            backgroundColor: colorConfig.background,
                        }, children: isCompleted && !hasError ? (_jsx(IconCheck, { size: 20, strokeWidth: 2 })) : (_jsx(Typography, { variant: "globalXS", fontWeight: "fontWeightSemiBold", sx: { color: 'currentColor' }, children: number })) }), !isLast && (_jsxs(Stack, { sx: {
                            position: 'relative',
                            flexBasis: '100%',
                            flex: 1,
                            height: 2,
                        }, children: [_jsx(Box, { sx: {
                                    flex: 1,
                                    flexBasis: '100%',
                                    height: 2,
                                    width: '100%',
                                    transition: 'background-color 0.15s',
                                    backgroundColor: theme.palette.new.action.background.brand.disabled,
                                } }), _jsx(Box, { sx: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    flex: 1,
                                    flexBasis: '100%',
                                    width: '100%',
                                    height: 2,
                                    transformOrigin: 'left',
                                    transition: 'background-color 0.15s, transform 0.15s',
                                    transform: isCompleted ? 'scaleX(1)' : 'scaleX(0)',
                                    backgroundColor: colorConfig.barBG,
                                } })] }))] }), _jsxs(Stack, { sx: { paddingRight: 2 }, children: [subtitle && (_jsx(Typography, { variant: "globalXS", fontWeight: "fontWeightRegular", sx: {
                            color: theme.palette.new.text.neutral.lighter,
                            maxWidth: '60ch',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }, children: subtitle })), title && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                            color: colorConfig.titleText,
                            maxWidth: '60ch',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }, children: title }))] })] }));
};
export default Step;
