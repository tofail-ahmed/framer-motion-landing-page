import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import macbook from '@/assets/macbook-exposed.png'

const HeroSection = () => {
  return (
    <Container className="grid grid-col-1 lg:grid-cols-2  h-[calc(100vh-64px)] place-content-center mt-10">
      <div className=" text-center lg:text-left mb-10 lg:mb-1">
        <h1 className=" text-5xl lg:text-8xl font-bold  ">
          <span className="text-gray-500">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-gray mt-10 mb-5 max-w-[50ch] text-lg">
          Welcomr to <span className="text-gray-800 font-bold">iRepair</span>, your one stop place for all kind of <span className="text-gray-800 font-bold">Macbook
          repairs</span> and diagnosticss.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="mt-10 lg:mt-2  w-3/4 lg:w-full mx-auto">
            <img className=" -rotate-[35deg] h-[95%] object-contain"  src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
