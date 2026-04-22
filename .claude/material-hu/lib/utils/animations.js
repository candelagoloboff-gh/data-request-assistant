import { keyframes } from '@emotion/react';
/** Fade-in animation from fully transparent to fully opaque. */
export const fadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
/** Fade-in animation with a centered scale transform. */
export const fadeInCenter = keyframes `
  from {
    opacity: 0;
    transform: scale(0.25);
  }
  to {
    opacity: 1;
    transform: scale(0.25);
  }
`;
/** Fade-in animation that slides the element upward from below. */
export const fadeInUp = keyframes `
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
/** Slide-in animation that moves the element upward from off-screen. */
export const slideInUp = keyframes `
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;
/** Appear animation that fades in while translating slightly upward. */
export const appearFromBottom = keyframes `
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
