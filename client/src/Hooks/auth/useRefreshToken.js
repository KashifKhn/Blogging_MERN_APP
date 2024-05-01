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

      setAuthState((prev) => {
        return { ...prev, accessToken: response.data.user.accessToken };
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
