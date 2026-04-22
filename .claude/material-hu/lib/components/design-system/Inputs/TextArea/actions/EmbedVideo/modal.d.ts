type EmbedVideoModalProps = {
    open: boolean;
    onClose: () => void;
    transformer?: (url: string) => string;
};
declare const EmbedVideoModal: (props: EmbedVideoModalProps) => import("react").ReactNode;
export default EmbedVideoModal;
