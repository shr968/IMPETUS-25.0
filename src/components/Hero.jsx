import { curve, heroBackground, robot, astro, impetuslogo } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { useRef } from "react";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";
import { grid } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Background Space Effect and Grid */}
        <div className="absolute inset-0 z-0 bg-space-effect bg-grid-lines"></div>

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            IEEE UVCE PRESENTS ANNUAL NATIONAL-LEVEL <br /> TECHNICAL STUDENT EXTRAVAGANZA
          </p>
          <h1 className="h1 mb-6 text-7xl md:text-5xl lg:text-9xl font-daggersquare">
            <span className="inline-block relative">
              IMPETUS 25.0
            </span>
          </h1>
          {/* Logo Code */}
          <img 
            src={impetuslogo} 
            alt="IMPETUS 25.0 Logo" 
            className="block mx-auto w-64 md:w-80 lg:w-96" 
          />

          {/*
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Button href="https://impetus-events.vercel.app/" className="text-2xl">
              REGISTER FOR EVENTS
            </Button>
          </div>
          <br />
          <div>
            <Button href="/roadmap" className="text-2xl">ALL IN ONE PASS</Button>
          </div>
          */}
        </div>

        

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]" />
        </div>
      </div>

      <br />
      <Gradient/>
    </Section>
  );
};

export default Hero;
