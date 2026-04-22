import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material';
import { IconArrowBigRightLine } from '@tabler/icons-react';
import useIsMount from '../../../../../hooks/useIsMount';
import { getAnimation, getAnimationState, getRotate, shouldForwardProp, } from './utils';
const AnimatedIcon = styled(IconArrowBigRightLine, {
    shouldForwardProp,
}) `
  transform-origin: center;
  rotate: ${getRotate};
  animation: ${getAnimation} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-play-state: ${getAnimationState};
`;
const AnimatedArrowIcon = ({ isCollapsed }) => {
    const [animationDisabled, setAnimationDisabled] = useState(true);
    const isMount = useIsMount();
    const { palette } = useTheme();
    useEffect(() => {
        if (!isMount)
            setAnimationDisabled(false);
    }, [isCollapsed]);
    return (_jsx(AnimatedIcon, { color: palette.new.text.neutral.brand, isCollapsed: isCollapsed, animationDisabled: animationDisabled }));
};
export default AnimatedArrowIcon;
