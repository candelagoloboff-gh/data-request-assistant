type EmbedHTMLModalProps = {
    open: boolean;
    onClose: () => void;
    transformer?: (value: string) => string;
};
declare const EmbedHTMLModal: ({ open, onClose, transformer, }: EmbedHTMLModalProps) => import("react").ReactNode;
export default EmbedHTMLModal;
