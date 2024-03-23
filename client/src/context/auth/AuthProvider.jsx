import { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    id: "",
    accessToken: null,
    user: null,
    isAuthenticated: false,
  });

  const logout = () => {
    setAuthState({
      id: "",
      accessToken: null,
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
