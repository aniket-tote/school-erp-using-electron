import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10 w-full text-gray-600 body-font shadow-md flex flex-wrap py-4 flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
      <a
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        href={"/"}
      >
        <span className="ml-3 text-xl cursor-pointer">School Erp</span>
      </a>

      {/* <div className="btns">
        <a href={"/login"}>
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
            <MdAccountCircle className="text-2xl" />
          </button>
        </a>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-2xl">
          Login
        </button>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-2xl">
          Signup
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
