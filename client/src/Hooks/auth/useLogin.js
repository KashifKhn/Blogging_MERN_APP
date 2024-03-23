import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (data) => {
    setIsLoading(true);
    const abortCont = new AbortController();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/login`,
        data,
        {
          signal: abortCont.signal,
        }
      );
      setResponse(res);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const resetHook = () => {
    setResponse(null);
    setError(null);
  };

  return { response, error, isLoading, resetHook, loginUser };
};

export default useLogin;
