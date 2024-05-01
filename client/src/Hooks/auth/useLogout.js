import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";

const useLogout = () => {
  const { logout } = useContext(AuthContext);

  return { logout };
};

export default useLogout;
