import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import macbook from '@/assets/macbook-exposed.png'
import { motion } from "framer-motion";

const HeroSection = () => {
  const parent = {
    initial: {
      opacity: 0,
      x: -400,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };
  const laptop = {
    initial: {
      y: 0,
      rotate: 0,
      scale: 4,
    },
    animate: {
      y: 30,
rotate:-35,
scale:1,
      transition: {
        scale:{
          duration:1
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      },
    },
  };
  //  const baby={
  //  initial:{
  //     opacity:0,
  //     x:-400
  //   },
  //   animate:{
  //     opacity:1,
  //     x:0,
  //     transition:{
  //       duration:0.5,

  //     }
  //   }
  // }
  return (
  <div  className="overflow-hidden">
      <Container className="grid grid-col-1 lg:grid-cols-2  h-screen pt-24 lg:pt-16 place-content-center mt-10">
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className=" text-center lg:text-left mb-10 lg:mb-1"
      >
        <motion.h1
          variants={parent}
          className=" text-5xl lg:text-8xl font-bold  "
        >
          <span className="text-gray-500">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={parent}
          className="text-gray mt-10 mb-5 max-w-[50ch] text-lg"
        >
          Welcomr to <span className="text-gray-800 font-bold">iRepair</span>,
          your one stop place for all kind of{" "}
          <span className="text-gray-800 font-bold">Macbook repairs</span> and
          diagnosticss.
        </motion.p>
        <motion.div variants={parent}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={laptop}
        initial="initial"
        animate="animate"
        className="   mt-10 lg:mt-2 pb-20 w-3/4 lg:w-full mx-auto"
      >
        <img
          className=" h-[95%] object-contain"
          src={macbook}
          alt=""
        />
      </motion.div>
    </Container>
  </div>
  );
};

export default HeroSection;
