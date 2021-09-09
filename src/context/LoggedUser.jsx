import React, { useState } from 'react';

const Context = React.createContext({});

export function LoggedUserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');

  return (
    <Context.Provider value={{
      isLogged, user, setIsLogged, setUser,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
