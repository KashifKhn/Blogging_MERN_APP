import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowHideButton from "./ShowHideButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="fullname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          {...register("fullname", {
            required: "Full name is required",
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          required=""
        />
        {errors?.fullname && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span>{" "}
            {errors?.fullname.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          User Name
        </label>
        <input
          type="text"
          {...register("username", {
            required: "Username is required",
          })}
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          required=""
        />
        {errors.username && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {errors.username.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
        {errors.email && (
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
          placeholder="••••••••"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, and one number",
            },
          })}
          autoComplete="off"
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
        {errors.password && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {errors.password.message}
          </p>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm password
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirm-password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
          placeholder="••••••••"
          autoComplete="off"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
        <ShowHideButton
          value={showConfirmPassword}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className={`
            right-3 top-9 
          
          `}
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span>{" "}
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              {...register("privacyPolicy", {
                required: "You must accept the terms and conditions",
              })}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-gray-500 dark:text-gray-300">
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#">
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        {errors.privacyPolicy && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.privacyPolicy.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Login here
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
