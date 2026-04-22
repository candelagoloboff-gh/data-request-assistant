import { createContext, useContext } from 'react';
export const IndividualCriteriaContext = createContext(null);
export const IndividualCriteriaProvider = IndividualCriteriaContext.Provider;
export const useIndividualCriteriaContext = () => useContext(IndividualCriteriaContext);
