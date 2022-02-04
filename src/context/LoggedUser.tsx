import React, { useState } from "react";

const Context = React.createContext({
  isLogged: false,
  user: "",
});

export function LoggedUserProvider({ children }: { children: any }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");

  const contextValue = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,
    user: user,
    setUser: setUser,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Context;
