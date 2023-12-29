// SkillPart.jsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  images: (string | StaticImageData)[];
  style?: React.CSSProperties;
  percentage?: number;
};

const SkillPart = ({ directionLeft, images, style, percentage }: Props) => {
  return (
    <div className="group relative flex cursor-pointer mb-4">
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.img
            key={index}
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={typeof image === "string" ? image : undefined} // Only set src for string images
            alt={`img-${index}`}
            style={style}
            className="rounded-full border border-transparent object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-200 ease-in-out"
          />
        ))}
      </AnimatePresence>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 ww-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="items-center justify-center h-full flex ">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage !== undefined ? `${percentage}%` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillPart;
