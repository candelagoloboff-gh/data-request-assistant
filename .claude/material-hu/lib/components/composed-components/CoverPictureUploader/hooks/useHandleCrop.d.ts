import { type CroppingModalProps } from '../../CroppingModal/types';
type UseHandleCropProps = {
    recommendedWidth?: number;
    recommendedHeight?: number;
} & Pick<CroppingModalProps, 'onSave'>;
declare const useHandleCrop: ({ recommendedWidth, recommendedHeight, onSave, }: UseHandleCropProps) => {
    modal: React.ReactNode;
    closeModal: () => void;
    showModal: (props?: Partial<CroppingModalProps> | undefined) => void;
};
export default useHandleCrop;
