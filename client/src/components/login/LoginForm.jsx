import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ShowHideButton from "../signup/ShowHideButton";
import useLogin from "../../Hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../context/auth/AuthContext";

const LoginForm = () => {
  const { setAuthState } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { response, error: loginError, isLoading, loginUser } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await loginUser(data);
  };

  useEffect(() => {
    if (response) {
      toast.success(response.data.message);
      setAuthState({
        id: response.data.user._id,
        accessToken: response.data.user.accessToken,
        user: response.data.user.username,
        isAuthenticated: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    if (loginError && !response) {
      toast.error(loginError);
      console.log(loginError);
    }
  }, [response, loginError]);

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(onSubmit)}>
      {loginError && !response && (
        <p className="mt-2 text-center text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span> {loginError}
        </p>
      )}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
        {errors?.email && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
        <ShowHideButton
          value={showPassword}
          onClick={() => setShowPassword(!showPassword)}
          className={`
            right-3 top-9 
          
          `}
        />
        {errors?.password && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
        <Link
          to="/forgot-password"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center  text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        {isLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Login"
        )}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="/signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Sign up
        </Link>
      </p>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
