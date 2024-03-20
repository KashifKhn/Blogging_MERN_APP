import React from "react";
import Logo from "../../assets/svgs/Logo";
import SignupForm from "./SignupForm";

const SignupCard = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center sm:px-6 sm:py-8 mx-auto">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Logo className="w-8 h-8 mr-2" />
          Blogging
        </a>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupCard;
