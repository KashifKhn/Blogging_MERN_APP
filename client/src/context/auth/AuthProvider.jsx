import { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    id: "",
    accessToken: null,
    username: null,
    fullname: null,
    email: null,
    isAuthenticated: false,
  });

  const [persistent, setPersistent] = useState(
    localStorage.getItem("persistent") || false
  );

  const logout = () => {
    setAuthState({
      id: "",
      accessToken: null,
      username: null,
      fullname: null,
      email: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ authState, setAuthState, persistent, setPersistent, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
