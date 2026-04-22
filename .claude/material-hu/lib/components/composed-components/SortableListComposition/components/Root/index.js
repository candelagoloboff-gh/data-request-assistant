import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { closestCenter, DndContext, DragOverlay, getFirstCollision, KeyboardSensor, PointerSensor, pointerWithin, rectIntersection, useSensor, useSensors, } from '@dnd-kit/core';
import { restrictToHorizontalAxis, restrictToParentElement, restrictToVerticalAxis, } from '@dnd-kit/modifiers';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Portal from '@mui/material/Portal';
import { CUSTOM_DROP_ANIMATION_CONFIG, DEFAULT_AUTO_SCROLL_CONFIG, DEFAULT_DRAG_ACTIVATION_DISTANCE, ROOT_CONTAINER_ID, } from '../../constants';
import { SortableListContext } from '../../context';
import Container from '../Container';
import OverlayContent from '../OverlayContent';
const Root = ({ children, onDragEnd, onDragOver, direction = 'vertical', dragByHandler = false, restrictToAncestor = false, dragActivationDistance = DEFAULT_DRAG_ACTIVATION_DISTANCE, hasDragOverlay = false, sx = {}, isDraggable, }) => {
    const [activeId, setActiveId] = useState(null);
    const [containers, setContainers] = useState(new Map());
    const [items, setItems] = useState(new Map());
    const itemRefs = useRef(new Map());
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: { distance: dragActivationDistance },
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    const lastOverIdRef = useRef(null);
    // Custom collision detection strategy for multiple containers
    const customCollisionStrategy = useCallback((args) => {
        const pointerCollisions = pointerWithin(args);
        const intersections = pointerCollisions.length > 0
            ? pointerCollisions
            : rectIntersection(args);
        const overId = getFirstCollision(intersections, 'id');
        if (overId != null) {
            lastOverIdRef.current = overId;
            return [{ id: overId }];
        }
        if (lastOverIdRef.current) {
            return [{ id: lastOverIdRef.current }];
        }
        return [];
    }, []);
    const collisionDetectionStrategy = hasDragOverlay
        ? closestCenter
        : customCollisionStrategy;
    const registerContainer = useCallback((id, itemIds) => {
        setContainers(prev => {
            const newMap = new Map(prev);
            newMap.set(id, itemIds);
            return newMap;
        });
    }, []);
    const unregisterContainer = useCallback((id) => {
        setContainers(prev => {
            const newMap = new Map(prev);
            newMap.delete(id);
            return newMap;
        });
    }, []);
    const getContainerItems = useCallback((id) => containers.get(id) || [], [containers]);
    const registerItem = useCallback((id, content, element) => {
        setItems(prev => {
            const newMap = new Map(prev);
            newMap.set(id, content);
            return newMap;
        });
        if (element) {
            itemRefs.current.set(id, element);
        }
    }, []);
    const unregisterItem = useCallback((id) => {
        setItems(prev => {
            const newMap = new Map(prev);
            newMap.delete(id);
            return newMap;
        });
        itemRefs.current.delete(id);
    }, []);
    const findContainer = useCallback((id) => {
        for (const [containerId, containerItems] of containers.entries()) {
            if (containerItems.includes(id)) {
                return containerId;
            }
        }
        return undefined;
    }, [containers]);
    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
    }, []);
    const handleDragOver = useCallback((event) => {
        const { active, over } = event;
        if (!over)
            return;
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);
        if (onDragOver) {
            onDragOver({
                active: active.id,
                over: over.id,
                activeContainer,
                overContainer,
            });
        }
    }, [findContainer, onDragOver]);
    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;
        if (!over) {
            setActiveId(null);
            return;
        }
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);
        if (onDragEnd) {
            onDragEnd({
                active: active.id,
                over: over.id,
                activeContainer,
                overContainer,
            });
        }
        setActiveId(null);
    }, [findContainer, onDragEnd]);
    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);
    const activeElement = activeId ? items.get(activeId) : null;
    const modifiers = [
        direction === 'vertical'
            ? restrictToVerticalAxis
            : restrictToHorizontalAxis,
        ...(restrictToAncestor && !hasDragOverlay ? [restrictToParentElement] : []),
    ];
    return (_jsx(SortableListContext.Provider, { value: {
            direction,
            dragByHandler,
            hasDragOverlay,
            activeId,
            isDraggable,
            registerContainer,
            unregisterContainer,
            getContainerItems,
            registerItem,
            unregisterItem,
        }, children: _jsx(DndContext, { sensors: sensors, collisionDetection: collisionDetectionStrategy, autoScroll: DEFAULT_AUTO_SCROLL_CONFIG, onDragStart: handleDragStart, onDragOver: handleDragOver, onDragEnd: handleDragEnd, onDragCancel: handleDragCancel, modifiers: modifiers, children: _jsx(Container, { id: ROOT_CONTAINER_ID, sx: sx, overlay: hasDragOverlay && activeId && activeElement ? (_jsx(Portal, { children: _jsx(DragOverlay, { dropAnimation: CUSTOM_DROP_ANIMATION_CONFIG, children: _jsx(OverlayContent, { id: activeId, children: activeElement }) }) })) : undefined, children: children }) }) }));
};
Root.displayName = 'SortableList.Root';
export default Root;
