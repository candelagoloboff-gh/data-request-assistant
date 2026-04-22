export type ContentSwitcherOption = {
    id: string;
    label: string;
    content: React.ReactNode;
};
export type ContentSwitcherProps = {
    title: string | ((currentOption: ContentSwitcherOption) => string);
    options: ContentSwitcherOption[];
};
