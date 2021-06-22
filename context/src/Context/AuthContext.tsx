import React, { createContext, useState } from "react";
import { ButtonEvent } from "types/Event";

interface AuthContextProps {
  auth?: boolean,
  handleAuth?: (e:ButtonEvent) => void
}

const AuthContext:React.Context<AuthContextProps> = createContext({});

const initialAuth = false;

const AuthProvider:React.FC = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(initialAuth);

  const handleAuth = (e:ButtonEvent) => {
    auth? setAuth(false): setAuth(true);
  }

  const data = { auth, handleAuth }

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
