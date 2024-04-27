import useAuth from "./useAuth";
import { axiosPublic } from "../../api/axiosInstance";

const useRefreshToken = () => {
  const { setAuthState } = useAuth();

  const refresh = async () => {
      const response = await axiosPublic.get("auth/refresh", {
        withCredentials: true,
      });
      
      setAuthState((prev) => {
        return { ...prev, accessToken: response.data.user.accessToken };
      });
      return response.data.user.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
