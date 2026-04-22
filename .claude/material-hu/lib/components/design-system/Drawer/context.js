import { createContext, useContext } from 'react';
import { DrawerSize, } from './types';
export const DrawerSizeContext = createContext({
    size: DrawerSize.SMALL,
    setSize: () => undefined,
    restoreSize: DrawerSize.SMALL,
});
export const useDrawerSizeContext = () => useContext(DrawerSizeContext);
