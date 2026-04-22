export declare const useChartColors: () => {
    colorOptions: (string | undefined)[];
    fallbackColor: string | undefined;
    getColor: (index: number) => string | undefined;
    getContrastColors: (index: number) => {
        light: string | undefined;
        dark: string | undefined;
    };
};
