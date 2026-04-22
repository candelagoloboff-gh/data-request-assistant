import { type ComponentType } from 'react';
/** Skeleton size while the lazy modal chunk loads. */
export type LazyModalFallbackOptions = {
    width?: number;
    height?: number;
};
type ModalContentProps<T> = T & {
    onClose: () => void;
};
/**
 * useModal + Suspense: shows a Skeleton until the lazy modal loads.
 * Pass a component from `React.lazy()` for code-splitting.
 *
 * @example
 * const MyModal = lazy(() => import('./MyModal'));
 * const { modal, showModal, closeModal } = useLazyModal(MyModal);
 */
export declare function useLazyModal<T extends Record<string, unknown>>(ModalContent: ComponentType<ModalContentProps<T>>, fallbackOptions?: LazyModalFallbackOptions): {
    modal: React.ReactNode;
    closeModal: () => void;
    showModal: (props?: Partial<ModalContentProps<T>> | undefined) => void;
};
export {};
