import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import macbook from '@/assets/macbook-exposed.png'

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-2  h-[calc(100vh-64px)] place-content-center">
      <div>
        <h1 className="text-8xl font-bold ">
          <span className="text-gray-500">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p>
          Welcomr to <span>iRepair</span>, your one stop place for all kind of <span>Macbook
          repairs</span> and diagnosticss.
        </p>
        <Button>Book a service</Button>
      </div>
      <div>
            <img  src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
