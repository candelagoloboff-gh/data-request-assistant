import { keyframes } from '@emotion/react';
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;
const rotateBack = keyframes `
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;
export const shouldForwardProp = (prop) => prop !== 'isCollapsed' && prop !== 'animationDisabled';
export const getAnimation = ({ isCollapsed }) => isCollapsed ? rotateBack : rotate;
export const getRotate = ({ animationDisabled }) => animationDisabled && '180deg';
export const getAnimationState = ({ animationDisabled }) => animationDisabled ? 'paused' : 'running';
