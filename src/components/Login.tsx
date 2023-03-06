import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center px-6 mx-auto md:h-screen py-12 lg:py-24 space-y-14">
        <span className="text-3xl">Login with your Account</span>

        <ul className=" w-1/3 flex flex-wrap text-xl font-medium text-center text-gray-500 border-b-2 border-gray-400 justify-between">
          <li className="w-1/3">
            <a
              href="#"
              aria-current="page"
              className="inline-block w-full p-4 active:bg-gray-200 hover:text-gray-600 hover:bg-gray-200"
            >
              Student
            </a>
          </li>
          <li className="w-1/3">
            <a
              href="#"
              className="inline-block w-full p-4 hover:text-gray-600 hover:bg-gray-200 "
            >
              Teacher
            </a>
          </li>
          <li className="w-1/3">
            <a
              href="#"
              className="inline-block w-full p-4 hover:text-gray-600 hover:bg-gray-200 rounded-t"
            >
              Principal
            </a>
          </li>
        </ul>

        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
              Enter your details
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="id"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your id
                </label>
                <input
                  type="text"
                  name="id"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex items-center justify-end">
                <a
                  href={"/forgotpass"}
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <a
                  href={"/signup"}
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
