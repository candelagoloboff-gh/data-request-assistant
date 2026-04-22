import { type ReactNode } from 'react';
type DataContainerProps = {
    title: string;
    sections: ReactNode[];
    onEdit?: () => void;
};
declare const DataContainer: ({ title, sections, onEdit }: DataContainerProps) => import("react/jsx-runtime").JSX.Element | null;
export default DataContainer;
