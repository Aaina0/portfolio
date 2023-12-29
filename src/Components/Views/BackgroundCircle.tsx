import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div
    //   initial={{ opacity: 0 }}
    //   animate={{ scale: [1, 2, 2, 3, 1] }}
    //   transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-gray-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-gray-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      {/* <div className="rounded-full border border-gray-500 opacity-26 h-[650] w-[650px]" /> */}
      <div></div>
    </div>
  );
}

export default BackgroundCircle;
