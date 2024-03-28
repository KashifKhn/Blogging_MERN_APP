import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";

const useAuth = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  return { authState, setAuthState };
};

export default useAuth;
