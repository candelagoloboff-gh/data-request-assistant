import { type AnimatedIconProps } from './types';
export declare const shouldForwardProp: (prop: string) => boolean;
export declare const getAnimation: ({ isCollapsed }: AnimatedIconProps) => import("@emotion/react").Keyframes;
export declare const getRotate: ({ animationDisabled }: AnimatedIconProps) => false | "180deg";
export declare const getAnimationState: ({ animationDisabled }: AnimatedIconProps) => "paused" | "running";
