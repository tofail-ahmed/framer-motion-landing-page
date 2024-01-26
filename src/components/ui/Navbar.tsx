import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { motion } from "framer-motion";
const Navbar = () => {
  const navbar = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div variants={navbar} initial="initial" animate="animate" className=" fixed w-full bg-white h-16 z-[999]">
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
    </motion.div>
  );
};

export default Navbar;
