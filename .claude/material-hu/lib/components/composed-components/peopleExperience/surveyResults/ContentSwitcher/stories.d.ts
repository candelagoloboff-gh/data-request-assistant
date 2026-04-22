import { type ContentSwitcherProps } from './types';
declare const _default: {
    title: string;
    component: ({ title, options }: ContentSwitcherProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    (args: ContentSwitcherProps): import("react/jsx-runtime").JSX.Element;
    args: {
        title: string;
        options: {
            id: string;
            label: string;
            content: import("react/jsx-runtime").JSX.Element;
        }[];
    };
};
