declare function ColorSelectMenu({ anchorRef, open, setOpen, onColorSelect, currentColor, }: {
    anchorRef: React.RefObject<HTMLDivElement>;
    open: boolean;
    setOpen: (open: boolean) => void;
    onColorSelect: (color: string) => void;
    currentColor: string;
}): import("react/jsx-runtime").JSX.Element;
export default ColorSelectMenu;
