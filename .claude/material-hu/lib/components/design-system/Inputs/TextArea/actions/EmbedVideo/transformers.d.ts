export declare function getEmbedUrl(url: string): string;
declare const transformers: {
    youtube: {
        regex: RegExp;
        transformer: (videoId: string) => string;
    };
    vimeo: {
        regex: RegExp;
        transformer: (videoId: string) => string;
    };
    dailymotion: {
        regex: RegExp;
        transformer: (videoId: string) => string;
    };
    facebook: {
        regex: RegExp;
        transformer: (videoId: string) => string;
    };
};
export default transformers;
