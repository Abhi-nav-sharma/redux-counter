import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ store, children }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubsrcibe = store.subscribe(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    });
    return unsubsrcibe;
  });
  return (
    <AppContext.Provider value={[count, store]}>{children}</AppContext.Provider>
  );
};
