export type MenuOption = {
    label: string;
    value?: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>, option: MenuOption) => void;
};
export type MenuActionButtonProps = {
    icon?: React.ReactNode;
    options: MenuOption[];
    onOptionSelect?: (value: string) => void;
    selectedOption?: string;
    optionRenderer?: (option: MenuOption) => React.ReactNode;
    ariaLabel?: string;
    ariaControls?: string;
};
