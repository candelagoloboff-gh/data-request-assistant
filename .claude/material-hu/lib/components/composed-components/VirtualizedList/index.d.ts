import { type CSSProperties } from 'react';
import { type GridImperativeAPI, type ListImperativeAPI, type ListProps, useGridCallbackRef, useGridRef, useListCallbackRef, useListRef } from 'react-window';
export type VirtualizedListProps<RowProps extends object> = ListProps<RowProps>;
declare const VirtualizedList: <RowProps extends object>({ ...props }: VirtualizedListProps<RowProps>) => import("react/jsx-runtime").JSX.Element;
export type DefaultRowComponentProps = {
    ariaAttributes: {
        'aria-posinset': number;
        'aria-setsize': number;
        role: 'listitem';
    };
    index: number;
    style: CSSProperties;
};
type RowComponentProps<RowProps extends object> = DefaultRowComponentProps & RowProps;
export type { ListImperativeAPI, GridImperativeAPI, RowComponentProps };
export { useListRef, useListCallbackRef, useGridRef, useGridCallbackRef };
export default VirtualizedList;
