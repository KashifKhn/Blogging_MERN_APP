import { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (data) => {
    setIsLoading(true);
    const abortCont = new AbortController();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/register`,
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

  return { response, error, isLoading, registerUser };
};

export default useSignup;
