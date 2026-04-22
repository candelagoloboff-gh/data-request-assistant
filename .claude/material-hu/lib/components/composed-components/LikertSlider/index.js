import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, useTheme } from '@mui/material';
import Slider, { sliderClasses } from '@mui/material/Slider';
import { range } from 'lodash';
import { Mark, Thumb } from './components';
import { gradientColors } from './constants';
import { buildGetPercentage, formatInternalValue, formatPropsValue, isBarredValue, isRangeValue, isSingleValue, } from './utils';
const LikertSlider = ({ min = 1, max: propsMax = 10, value: propsValue, onChange, invert = false, ...props }) => {
    const theme = useTheme();
    const max = propsMax + 1;
    const value = formatPropsValue(propsValue);
    const handleChange = (event, nextValue, activeThumb) => {
        if (isBarredValue(nextValue, min, max)) {
            return;
        }
        onChange?.(event, formatInternalValue(nextValue), activeThumb);
    };
    const getPercentage = buildGetPercentage(min, max);
    const leftSideColor = invert ? gradientColors.green : gradientColors.red;
    const rightSideColor = invert ? gradientColors.red : gradientColors.green;
    const getRailBackground = () => {
        if (isSingleValue(value)) {
            const valuePercent = getPercentage(value);
            return `linear-gradient(to right,
        transparent 0%,
        ${rightSideColor[0]} ${valuePercent}%,
        ${rightSideColor[1]} ${100 - valuePercent}%,
        ${rightSideColor[2]} 100%)`;
        }
        else if (isRangeValue(value)) {
            const startPercent = getPercentage(value[0]);
            const endPercent = getPercentage(value[1]);
            return `linear-gradient(to right,
        ${leftSideColor[2]} 0%,
        ${leftSideColor[1]} ${startPercent * 0.5}%,
        ${leftSideColor[0]} ${startPercent}%,
        transparent ${startPercent}%,
        transparent ${endPercent}%,
        ${rightSideColor[0]} ${endPercent}%,
        ${rightSideColor[1]} ${endPercent + (100 - endPercent) * 0.5}%,
        ${rightSideColor[2]} 100%)`;
        }
        return `linear-gradient(to right, ${leftSideColor[0]} 0%, transparent 50%, ${rightSideColor[2]} 100%)`;
    };
    const getTrackBackground = () => {
        if (isSingleValue(value)) {
            return `linear-gradient(to right,
        ${leftSideColor[2]} 0%,
        ${leftSideColor[1]} 50%,
        ${leftSideColor[0]} 100%)`;
        }
        return `linear-gradient(to right, ${gradientColors.yellow[0]} 0%, ${gradientColors.yellow[1]} 100%)`;
    };
    return (_jsxs(Stack, { sx: { gap: 0.5, width: '100%', opacity: props.disabled ? 0.5 : 1 }, children: [_jsx(Slider, { disabled: props.disabled, value: value, min: min, max: max, onChange: handleChange, sx: {
                    [`& .${sliderClasses.rail}`]: {
                        height: theme.spacing(2),
                        background: getRailBackground(),
                        opacity: 1,
                        transition: 'background 0.3s ease-in-out',
                    },
                    [`& .${sliderClasses.track}`]: {
                        height: theme.spacing(2),
                        background: getTrackBackground(),
                        border: 'none',
                        transition: 'background 0.3s ease-in-out',
                    },
                }, slots: {
                    thumb: Thumb,
                    mark: Mark,
                }, getAriaValueText: thumbValue => {
                    return String(thumbValue + 1);
                }, shiftStep: 1, marks: true, disableSwap: true, ...props }), _jsx(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                }, children: range(min, max).map(num => (_jsx(Typography, { variant: "globalXXS", fontWeight: "fontWeightSemiBold", sx: { flex: 1, textAlign: 'center' }, children: num }, num))) })] }));
};
export default LikertSlider;
