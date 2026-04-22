import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement, useEffect, useMemo } from 'react';
import { horizontalListSortingStrategy, SortableContext, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { Stack } from '@mui/material';
import { useSortableListContext } from '../../context';
const Container = ({ id, children, overlay, sx = {} }) => {
    const context = useSortableListContext();
    const { direction, registerContainer, unregisterContainer } = context;
    const childIds = useMemo(() => {
        const ids = [];
        Children.forEach(children, child => {
            if (isValidElement(child) && child.props && 'id' in child.props) {
                ids.push(child.props.id);
            }
        });
        return ids;
    }, [children]);
    useEffect(() => {
        registerContainer(id, childIds);
        return () => {
            unregisterContainer(id);
        };
    }, [id, childIds, registerContainer, unregisterContainer]);
    return (_jsxs(SortableContext, { id: id, items: childIds, strategy: direction === 'vertical'
            ? verticalListSortingStrategy
            : horizontalListSortingStrategy, children: [_jsx(Stack, { component: "ul", sx: {
                    listStyle: 'none',
                    listStyleType: 'none',
                    appearance: 'none',
                    padding: 0,
                    margin: 0,
                    ...(direction === 'vertical'
                        ? { flexDirection: 'column' }
                        : { flexDirection: 'row' }),
                    ...sx,
                }, children: children }), overlay] }));
};
Container.displayName = 'SortableList.Container';
export default Container;
