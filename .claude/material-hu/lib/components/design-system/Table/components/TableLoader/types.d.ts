import { type ButtonProps } from '../../../Buttons/Button';
export type TableLoaderSlotProps = {
    /** Props for the load more button */
    button?: Omit<ButtonProps, 'onClick'>;
};
export type TableLoaderProps = {
    /** Number of elements that have been loaded so far */
    loadedCount: number;
    /** Total number of available elements */
    totalCount: number;
    /** Function that is executed to fetch more elements */
    onLoadMore: () => void;
    /** Function that is executed to scroll back to the top */
    onScrollToTop: () => void;
    /** Label for the load more button */
    loadMoreLabel?: string;
    /** slotProps to pass props to internal elements */
    slotProps?: TableLoaderSlotProps;
};
