import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className=" h-16">
      <nav className="w-full max-w-[1230px] mx-auto  flex justify-between px-10 h-full items-center">
        <span className="text-3xl text-green-900">iRepair</span>
        <ul className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <Button>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
