import { type Key } from 'react';
import { type DropdownOptionItem } from './types';
type DropdownListProps<TValue> = {
    options: DropdownOptionItem<TValue>[];
    onChange: (item: DropdownOptionItem<TValue>) => void;
    value: DropdownOptionItem<TValue>;
    loading?: boolean;
    disabled?: boolean;
};
declare const DropdownList: <TValue extends Key>({ options, onChange, value, loading, disabled, }: DropdownListProps<TValue>) => import("react/jsx-runtime").JSX.Element;
export default DropdownList;
