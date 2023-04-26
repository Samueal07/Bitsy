"use client";

import { signIn } from "next-auth/react";
//we need to withlist domains from where we can get image
import Image from "next/image";
import logo from "../images/logo.png";
const Login = () => {
  return (
    <div
      className="bg-black h-screen flex flex-col justify-center items-center
    text-center"
    >
      <h2 className="text-white text-3xl font-extrabold ">BITSY</h2>
      <Image
        src={logo}
        width={300}
        height={300}
        alt="logo"
        className="animate-pulse mb--40"
      />
      {/* <button
        onClick={() => signIn("google")}
        className="p-2 border border-black bg-black text-white text-2sm "
      >
        Sign In to Bitsy
      </button> */}
      <button
        onClick={() => signIn("google")}
        type="button"
        className="text-black bg-white hover:bg-[#5e17eb] hover:text-white transition-all duration-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
