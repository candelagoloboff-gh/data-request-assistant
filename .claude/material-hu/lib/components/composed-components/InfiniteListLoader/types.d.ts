import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
export type InfiniteListLoaderProps = ButtonProps & {
    onLoadMore: () => void;
    containerRef: React.RefObject<HTMLElement>;
};
