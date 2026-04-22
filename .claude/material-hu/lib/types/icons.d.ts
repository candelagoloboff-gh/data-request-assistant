export declare enum IconType {
    IMAGE = "IMAGE",
    EMOJI = "EMOJI"
}
export type IconInterface = {
    custom?: boolean;
    value: string;
    type: IconType;
};
export type ImageIconOption = {
    id: number;
    name: string;
    source: string;
    type: IconType;
};
