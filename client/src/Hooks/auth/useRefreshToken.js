import useAuth from "./useAuth";
import { axiosPublic } from "../../api/axiosInstance";

const useRefreshToken = () => {
  const { setAuthState } = useAuth();

  const refresh = async () => {
    try {
      const response = await axiosPublic.get("auth/refresh", {
        withCredentials: true,
      });
      setAuthState((prev) => {
        console.log(prev);
        console.log(response.data);
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    } catch (error) {
      console.error("Refresh Token error", error);
    }
  };
  return refresh;
};

export default useRefreshToken;
