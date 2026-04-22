import { useContext } from 'react';
import { DynamicFormContext } from '../components/DynamicFormContextProvider';
export const useDynamicFormContext = () => {
    const context = useContext(DynamicFormContext);
    if (!context) {
        throw new Error('useDynamicFormContext must be used within a DynamicFormContextProvider');
    }
    return context;
};
