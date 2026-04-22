import { type ReactNode } from 'react';
import { type UniqueIdentifier } from '@dnd-kit/core';
import { type SxProps } from '@mui/material';
import { type StackProps } from '@mui/material/Stack';
export type SortableContextValue = {
    direction: 'vertical' | 'horizontal';
    dragByHandler: boolean;
    hasDragOverlay: boolean;
    activeId: UniqueIdentifier | null;
    isDraggable?: (id: UniqueIdentifier) => boolean;
    registerContainer: (id: string, items: UniqueIdentifier[]) => void;
    unregisterContainer: (id: string) => void;
    getContainerItems: (id: string) => UniqueIdentifier[];
    registerItem: (id: UniqueIdentifier, content: ReactNode, element?: HTMLElement | null) => void;
    unregisterItem: (id: UniqueIdentifier) => void;
};
export type DragEvent = {
    active: UniqueIdentifier;
    over: UniqueIdentifier | null;
    activeContainer?: string;
    overContainer?: string;
};
export type RootProps = {
    children: ReactNode;
    onDragEnd?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    direction?: 'vertical' | 'horizontal';
    dragByHandler?: boolean;
    restrictToAncestor?: boolean;
    dragActivationDistance?: number;
    hasDragOverlay?: boolean;
    sx?: StackProps['sx'];
    isDraggable?: (id: UniqueIdentifier) => boolean;
};
export type ContainerProps = Pick<RootProps, 'sx'> & {
    id: string;
    children: ReactNode;
    overlay?: ReactNode;
};
export type ItemProps = {
    id: UniqueIdentifier;
    children: ReactNode;
    disabled?: boolean;
    data?: Record<string, any>;
};
export type DragHandleProps = {
    children?: ReactNode;
    sx?: SxProps;
};
export type ItemContextValue = {
    listeners?: Record<string, any>;
    attributes?: Record<string, any>;
    setActivatorNodeRef?: (element: HTMLElement | null) => void;
    isDraggable: boolean;
    isDragging: boolean;
};
