import useFetch from "../useFetch/useFetch";

const useLogin = () => {
  const { response, error, isLoading, fetchData } = useFetch();
  const loginUser = async (data) => {
    await fetchData("auth/login", {
      method: "POST",
      data: data,
    });
  };


  return { response, error, isLoading,  loginUser };
};

export default useLogin;
