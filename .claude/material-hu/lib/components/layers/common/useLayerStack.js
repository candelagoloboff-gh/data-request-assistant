import { useCallback, useState } from 'react';
/**
 * Shared stack logic for Drawer and Dialog layers.
 * Manages open/close/transitionEnd/updateConfig with per-level isOpen state.
 */
export function useLayerStack(options = {}) {
    const { prepareConfig } = options;
    const [stack, setStack] = useState([]);
    const close = useCallback((id, immediate) => {
        setStack(prev => {
            if (id) {
                const matchIndex = prev.findIndex(level => level.id === id);
                if (matchIndex >= 0) {
                    if (immediate) {
                        return prev
                            .map((level, index) => (index === matchIndex ? null : level))
                            .filter(Boolean);
                    }
                    return prev.map((level, index) => index === matchIndex ? { ...level, isOpen: false } : level);
                }
            }
            if (prev.length === 0)
                return prev;
            if (immediate === true) {
                return prev.slice(0, -1);
            }
            return prev.map((level, index) => index === prev.length - 1 ? { ...level, isOpen: false } : level);
        });
    }, []);
    const open = useCallback((args, id) => {
        const levelId = id || Date.now().toString();
        const closeById = () => close(levelId);
        const config = prepareConfig
            ? prepareConfig(args, levelId, closeById)
            : args;
        const newLevel = {
            id: levelId,
            config,
            isOpen: false,
        };
        setStack(prev => [...prev, newLevel]);
        requestAnimationFrame(() => {
            setStack(prev => prev.map(level => level.id === levelId ? { ...level, isOpen: true } : level));
        });
    }, [close, prepareConfig]);
    const handleTransitionEnd = useCallback((levelId) => {
        setStack(prev => {
            const index = prev.findIndex(level => level.id === levelId);
            if (index === -1)
                return prev;
            const level = prev[index];
            if (!level.isOpen) {
                return prev.filter(l => l.id !== levelId);
            }
            return prev;
        });
    }, []);
    const getStack = useCallback(() => stack, [stack]);
    const updateConfig = useCallback((levelId, setter) => {
        setStack(oldStack => {
            const matchIndex = oldStack.findIndex(l => l.id === levelId);
            if (matchIndex < 0) {
                console.error('No layer level matched provided ID.');
                return oldStack;
            }
            const newStack = [...oldStack];
            const newConfig = setter(newStack[matchIndex].config);
            newStack[matchIndex] = {
                ...newStack[matchIndex],
                config: newConfig,
            };
            return newStack;
        });
    }, []);
    return {
        stack,
        open,
        close,
        handleTransitionEnd,
        getStack,
        updateConfig,
    };
}
