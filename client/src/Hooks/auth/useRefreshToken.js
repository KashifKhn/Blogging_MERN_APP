import useAuth from "./useAuth";
import { axiosPublic } from "../../api/axiosInstance";
import useLogout from "./useLogout";

const useRefreshToken = () => {
  const { setAuthState } = useAuth();
  const { logout } = useLogout();

  const refresh = async () => {
    try {
      const response = await axiosPublic.get("auth/refresh", {
        withCredentials: true,
      });

      setAuthState({
        id: response.data.user._id,
        accessToken: response.data.user.accessToken,
        username: response.data.user.username,
        fullname: response.data.user.fullname,
        email: response.data.user.email,
        isAuthenticated: true,
      });
      return response.data.user.accessToken;
    } catch (error) {
      if (error?.response?.data?.message === "Refresh token not found") {
        logout();
      }
    }
  };
  return refresh;
};

export default useRefreshToken;
