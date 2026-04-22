import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import TableCell from '../../../../design-system/Table/components/TableCell';
import Tooltip from '../../../../design-system/Tooltip';
import { Typography, tooltipClasses, useTheme } from '@mui/material';
import usePopover from '../../../../../hooks/usePopover';
import { colorPalette } from '../../../../../theme/hugo/colors';
import { COLOR_SCORE_THRESHOLD } from '../../constants';
import { ScoreType } from '../../types';
import { formatScore } from '../utils';
import ScoreComparisonPopover from './ScoreComparisonPopover';
const getPrefixSign = (value) => {
    if (value === 0 || value < 0)
        return '';
    return '+';
};
const HeatScoreCell = ({ score, difference, isTotal, scoreType, baseScore, }) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { id, isOpen, anchorEl, openPopover, closePopover } = usePopover();
    const getBackgroundColor = () => {
        if (scoreType === ScoreType.DIFFERENCE) {
            if (!difference) {
                return theme.palette.common.white;
            }
            return difference > 0
                ? colorPalette.base.green[100]
                : colorPalette.base.red[100];
        }
        if (score === null) {
            return theme.palette.common.white;
        }
        const matchedColor = COLOR_SCORE_THRESHOLD.find(({ from, to }) => (score > from || from === 0) && score <= to);
        return matchedColor ? matchedColor.color : theme.palette.common.white;
    };
    const getTotalBackgroundColor = () => {
        if (scoreType === ScoreType.DIFFERENCE) {
            if (!difference) {
                return theme.palette.common.white;
            }
            return difference > 0
                ? colorPalette.base.green[600]
                : colorPalette.base.red[600];
        }
        return colorPalette.base.grey[800];
    };
    const getTextColor = () => {
        if (scoreType === ScoreType.DIFFERENCE || score === null) {
            return theme.palette.new.text.neutral.default;
        }
        return score >= 0.4
            ? theme.palette.common.white
            : theme.palette.new.text.neutral.default;
    };
    const getTotalTextColor = () => {
        if (scoreType === ScoreType.DIFFERENCE && !difference) {
            return theme.palette.new.text.neutral.default;
        }
        return theme.palette.common.white;
    };
    const getDisplayScore = () => {
        if ((scoreType === ScoreType.DIFFERENCE && difference === null) ||
            (scoreType === ScoreType.SCORE && score === null)) {
            return (_jsx(Tooltip, { title: t('people_experience.not_enough_data'), slotProps: {
                    tooltip: {
                        sx: {
                            border: `1px solid ${theme.palette.border?.neutralBorder}`,
                            [`& .${tooltipClasses.arrow}:before`]: {
                                border: `1px solid ${theme.palette.border?.neutralBorder}`,
                            },
                        },
                    },
                }, children: _jsx(Typography, { sx: { fontSize: 'inherit', width: '100%', height: '100%' }, children: "--" }) }));
        }
        if (scoreType === ScoreType.DIFFERENCE) {
            return `${getPrefixSign(difference)} ${formatScore(difference)}`;
        }
        return formatScore(score);
    };
    const hasPopover = baseScore !== null && score !== null && difference !== null;
    return (_jsxs(_Fragment, { children: [_jsx(TableCell, { colSpan: 2, align: "center", sx: {
                    backgroundColor: isTotal
                        ? getTotalBackgroundColor()
                        : getBackgroundColor(),
                    color: isTotal ? getTotalTextColor() : getTextColor(),
                    '& .MuiTypography-root': {
                        color: 'inherit',
                    },
                }, onMouseEnter: openPopover, onMouseLeave: closePopover, children: getDisplayScore() }), hasPopover && (_jsx(ScoreComparisonPopover, { id: id, open: isOpen, anchorEl: anchorEl, onClose: closePopover, baseScore: baseScore, score: score, difference: difference }))] }));
};
export default HeatScoreCell;
