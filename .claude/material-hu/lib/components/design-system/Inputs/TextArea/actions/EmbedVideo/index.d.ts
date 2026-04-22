export type EmbedVideoProps = {
    title: string;
    transformer?: (url: string) => string;
};
declare const EmbedVideo: ({ title, transformer }: EmbedVideoProps) => import("react/jsx-runtime").JSX.Element | null;
export default EmbedVideo;
