import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";

const useAuth = () => {
  const { authState, setAuthState, persistent, setPersistent } =
    useContext(AuthContext);

  return { authState, setAuthState, persistent, setPersistent };
};

export default useAuth;
