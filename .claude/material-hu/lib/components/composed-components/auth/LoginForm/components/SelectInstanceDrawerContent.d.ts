export type SelectInstanceDrawerProps = {
    loading: boolean;
    instances: {
        id: number;
        name: string;
        logo: string;
    }[];
    onSelectInstance: (instance: {
        name: string;
        logo: string;
    }) => void;
    searchProps?: {
        query: string;
        setQuery: (query: string) => void;
    };
    showSearch?: boolean;
};
declare const SelectInstanceDrawerContent: ({ loading, instances, onSelectInstance, searchProps, showSearch, }: SelectInstanceDrawerProps) => import("react/jsx-runtime").JSX.Element;
export default SelectInstanceDrawerContent;
