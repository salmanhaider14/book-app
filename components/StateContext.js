import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Context.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
