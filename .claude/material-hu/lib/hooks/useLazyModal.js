import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import Skeleton from '../components/design-system/Skeleton';
import { useModal } from './useModal';
const DEFAULT_FALLBACK_WIDTH = 600;
const DEFAULT_FALLBACK_HEIGHT = 255;
/**
 * useModal + Suspense: shows a Skeleton until the lazy modal loads.
 * Pass a component from `React.lazy()` for code-splitting.
 *
 * @example
 * const MyModal = lazy(() => import('./MyModal'));
 * const { modal, showModal, closeModal } = useLazyModal(MyModal);
 */
export function useLazyModal(ModalContent, fallbackOptions) {
    const width = fallbackOptions?.width ?? DEFAULT_FALLBACK_WIDTH;
    const height = fallbackOptions?.height ?? DEFAULT_FALLBACK_HEIGHT;
    return useModal((props) => (_jsx(Suspense, { fallback: _jsx(Skeleton, { width: width, height: height }), children: _jsx(ModalContent, { ...props }) })));
}
