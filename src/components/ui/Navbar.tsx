import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className="bg-green-700/50 h-16">
      <nav className="w-full max-w-[1220px] mx-auto bg-green-600/70 flex justify-between px-10 h-full items-center">
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
