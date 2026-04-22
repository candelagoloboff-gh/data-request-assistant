/** Manages popover anchor state with a debounced open and immediate close. */
declare const usePopover: () => {
    isOpen: boolean;
    anchorEl: HTMLElement | null;
    openPopover: (event: React.MouseEvent<HTMLElement>) => void;
    closePopover: () => void;
    id: string;
};
export default usePopover;
