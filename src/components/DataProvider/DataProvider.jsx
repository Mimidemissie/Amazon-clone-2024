import react, { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, InitialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, InitialState)}>
      {children}
    </DataContext.Provider>
  );
};
