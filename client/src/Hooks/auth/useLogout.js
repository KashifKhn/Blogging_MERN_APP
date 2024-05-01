import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";

const useLogout = () => {
  const { logout: authLogout } = useContext(AuthContext);

  const logout = async () => {
    try {
      await axiosPrivate.post("/auth/logout");
      authLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return { logout };
};

export default useLogout;
