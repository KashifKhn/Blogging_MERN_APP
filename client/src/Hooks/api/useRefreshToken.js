import axios from "axios";
import useAuth from "../auth/useAuth";

const useRefreshToken = () => {
  const { setAuthState } = useAuth();

  const refresh = async () => {
    const response = await axios.get("http://localhost:3000/api/auth/refresh", {
      withCredentials: true,
    });
    setAuthState((prev) => {
      console.log(prev);
      console.log(response.data);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
