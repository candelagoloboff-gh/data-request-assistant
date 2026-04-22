export declare const DEFAULT_MINUTES_STEP = 5;
/** Matches partial time input: "14:mm", "9:", "14:m", "9" — captures hours from group 1 or 2 */
export declare const TIME_PATTERN: RegExp;
export declare const DROPDOWN_POSITIONING_STYLES: {
    readonly right: 0;
    readonly left: "auto !important";
    readonly transformOrigin: "right top !important";
};
export declare const SAME_WIDTH_MODIFIER: {
    name: string;
    enabled: boolean;
    phase: "beforeWrite";
    requires: string[];
    fn: ({ state }: any) => void;
    effect: ({ state }: any) => void;
};
