import { type Key } from 'react';
type DataGroupProps<TData> = {
    items: TData[];
    renderItem: (item: TData, index: number) => JSX.Element;
};
declare const DisplayGroup: <TData extends {
    id: Key;
}>({ items, renderItem, }: DataGroupProps<TData>) => import("react/jsx-runtime").JSX.Element;
export default DisplayGroup;
