import { type FC } from 'react';
import { type DialogProps } from '@mui/material';
/**
 * Renders a MUI Dialog with a given content component and manages its open/close state.
 * @deprecated Use `useDialogLayer` or `useDialogLayerItem` instead
 */
declare function useModal<T>(ModalContentComponent: FC<T>, dialogProps?: Partial<DialogProps>, extraProps?: Partial<T>): {
    modal: React.ReactNode;
    closeModal: () => void;
    showModal: (props?: Partial<T>) => void;
};
export { useModal };
