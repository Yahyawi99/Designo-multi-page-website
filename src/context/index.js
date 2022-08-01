import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <AppContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
