import React, { createContext, useState, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type context = {
  isLogin: boolean,
  setIsLogin: Dispatch<SetStateAction<boolean>>
}

const authContext = createContext<null | context>(null);

const AuthProvider = ({ children } : { children: React.ReactNode }): JSX.Element => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <authContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

const useAuthContext = (): context | null => useContext(authContext);

export {
  AuthProvider,
  useAuthContext
};