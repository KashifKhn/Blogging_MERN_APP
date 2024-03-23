import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
  });

  const setAuthInfo = ({ token, user }) => {
    setAuthState({
      token,
      user,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setAuthState({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
