import { useEffect } from "react";
import { axiosPrivate } from "../../api/axiosInstance";
import useRefreshToken from "../auth/useRefreshToken";
import useAuth from "../auth/useAuth";

const useAxiosInterceptor = () => {
  const { authState } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (
          !config.headers["Authorization"] ||
          !config.headers["authorization"]
        ) {
          config.headers["Authorization"] = `Bearer ${authState?.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 || !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(error.config);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [authState, refresh]);

  return axiosPrivate;
};

export default useAxiosInterceptor;
