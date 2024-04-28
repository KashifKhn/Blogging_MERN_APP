import { useState } from "react";
import useFetch from "../useFetch/useFetch";

const useLogin = () => {
  const { response, error, isLoading, fetchData } = useFetch();
  const loginUser = async (data) => {
          await fetchData("auth/login", {
        method: "POST",
        data: data,
        withCredentials: true,
      });
    
  };


  return { response, error, isLoading,  loginUser };
};

export default useLogin;
