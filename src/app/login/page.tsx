"use client";

import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-[#1d1515] py-12 px-4 sm:px-6 lg:px-8 bg-cover relative items-center">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-transparent border border-amber-600 rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-amber-600">
              Welcom Back!
            </h2>
            <p className="mt-2 text-sm text-white">
              Please sign in to your account
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-5">
            <button><img className="w-11 h-11 rounded-full" src="https://cdn-icons-png.freepik.com/256/16509/16509564.png?semt=ais_hybrid" alt="" /></button>
            <button><img className="w-9 h-9 rounded-full" src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png" alt="" /></button>
            <button><img className="w-10 h-10 rounded-full" src="https://img.favpng.com/19/19/7/logo-apple-icon-information-png-favpng-LgLa8kMeALfAyE0iKbRnAJtnE.jpg" alt="" /></button>
            <button><img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="" /></button>
            
            
            
            
            
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-white"></span>
            <span className="text-white font-normal">OR</span>
            <span className="h-px w-16 bg-gray-300"></span>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <div className="absolute right-0 mt-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-amber-600 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-transparent focus:border-2 focus:border-pink-500 focus:outline-0"
                  name="fullName"
                  placeholder="Email"
                />
                <label className="absolute left-3 top-1 text-xs text-blue-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-pink-500">
                  Email
                </label>
              </div>
            </div>
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <div className="absolute right-0 mt-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-amber-600 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-transparent focus:border-2 focus:border-pink-500 focus:outline-0"
                  name="fullName"
                  placeholder="Email"
                  type='password'
                />
                <label className="absolute left-3 top-1 text-xs text-blue-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-pink-500">
                  Password
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-amber-600">
              <span>Don t have an account?</span>
              <Link
                href="register"
                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
