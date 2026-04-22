import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement, useId, useState } from 'react';
import Title from '../../../../design-system/Title';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const ScoreDifferencePopover = ({ children, score, baseScore, scorePostFix = '', scoreLabel = 'Score', baseScoreLabel = 'Base score', footerLabel: footerText = 'Comparing results', scoreDifferenceDescription = 'The difference is equivalent to the total survey.', ...props }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const id = useId();
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMouseLeave = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (_jsxs(_Fragment, { children: [cloneElement(children, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                'aria-describedby': id,
            }), _jsx(Popover, { id: id, open: open, anchorEl: anchorEl, onClose: handleMouseLeave, disableRestoreFocus: true, sx: {
                    pointerEvents: 'none',
                }, anchorOrigin: props.anchorOrigin, transformOrigin: props.transformOrigin, slotProps: {
                    paper: {
                        onMouseEnter: () => setAnchorEl(anchorEl),
                        onMouseLeave: handleMouseLeave,
                        elevation: 2,
                        sx: {
                            pointerEvents: 'auto',
                            borderRadius: theme => theme.shape.borderRadiusL,
                        },
                    },
                }, ...props, children: _jsxs(Stack, { sx: {
                        width: 240,
                        borderRadius: theme => theme.shape.borderRadiusL,
                    }, children: [_jsxs(Stack, { sx: { gap: 1, p: 2 }, children: [_jsxs(Stack, { sx: { gap: 1 }, children: [_jsxs(Stack, { sx: {
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }, children: [_jsx(Title, { title: scoreLabel, variant: "S" }), _jsxs(Typography, { children: [score, scorePostFix] })] }), _jsxs(Stack, { sx: {
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }, children: [_jsx(Title, { title: baseScoreLabel, variant: "S" }), _jsxs(Typography, { children: [baseScore, scorePostFix] })] })] }), _jsx(Divider, {}), _jsx(Typography, { children: scoreDifferenceDescription })] }), _jsx(Stack, { sx: {
                                backgroundColor: theme => theme.palette.newBase?.purple[100],
                                border: theme => `1px solid ${theme.palette.newBase?.purple[300]}`,
                                borderBottomLeftRadius: theme => theme.spacing(theme.shape.borderRadiusL),
                                borderBottomRightRadius: theme => theme.spacing(theme.shape.borderRadiusL),
                                p: 1,
                                textAlign: 'center',
                            }, children: _jsx(Typography, { variant: "globalXXS", sx: { color: theme => theme.palette.newBase?.purple[900] }, children: footerText }) })] }) })] }));
};
export default ScoreDifferencePopover;
