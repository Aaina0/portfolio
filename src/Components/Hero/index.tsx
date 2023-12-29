"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../Views/BackgroundCircle";
import Link from "next/link";


interface Props {
    
}

const Hero = (props: Props) => {
    const [text] = useTypewriter({
        words: [
          "Hi, My Name is Aaina",
          " I am Developer",
          "Designer",
          "&",
          "Creative",
        ],
        loop: true,
        delaySpeed: 2000,
      });
    
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative cursor-pointer">
        <BackgroundCircle />
        <h2 className="text-lg uppercase text-gray-200 font-bold tracking-[20px]">
          Website Developer
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-extrabold text-gray-200 px-10">
            {text}
          </span>
          <Cursor cursorColor="violet-300" />
        </h1>
  
        <div className="flex items-center space-x-4 pt-5 mx-auto justify-center">
          <Link href="#About" onClick={() => (window.location.href = "#About")}>
            <span className="herobutton">About</span>
          </Link>
          <Link
            href="#Projects"
            onClick={() => (window.location.href = "#Projects")}
          >
            <span className="herobutton">Projects</span>
          </Link>
          {/* Uncomment and add links as needed */}
          {/* <Link href="#experience" passHref>
            <span className="herobutton">Experience</span>
          </Link> */}
          <Link href="#Skills" onClick={() => (window.location.href = "#Skills")}>
            <span className="herobutton">Skills</span>
          </Link>
          <Link
            href="#Contact"
            onClick={() => (window.location.href = "#Contact")}
          >
            <span className="herobutton">Contact</span>
          </Link>
        </div>
      </div>
    )
}

export default Hero
