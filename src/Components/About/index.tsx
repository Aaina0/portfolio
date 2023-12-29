"use client";

import React from "react";
import { motion } from "framer-motion";
import image from "@/assets/image.jpg";
interface Props {}

export const About = (props: Props) => {
  return (
    <section className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly p-10 mx-auto items-center">
      <div className="order-1 md:order-2 flex-1 items-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={image.src}
          alt="Description of the Image"
          className="mb-20 md:mb-0 items-center flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-50 xl:w-[500px] xl:h-[300px] mt-28 gap-5"
        />
      </div>
      <div className="order-2 md:order-1 space-y-10 px-0 md:px-14 flex-1">
        <h3 className="top-45 tracking-[20px] text-gray-200 text-2xl font-bold">
          ABOUT
        </h3>
        <h4 className="text-4xl font-semibold text-gray-200">
          Here is a Little Background
        </h4>
        <p className="text-gray-200">
          <span className="text-[#f5576c]">Hello there!</span> I am a Website
          Developer with a bachelor&apos;s degree in computer science, This is
          a piece of happy news that I build a lot of amazing, unique,
          responsive websites. For this, I have used the latest technologies
          to deliver the best quality in the shortest time. I am constantly
          innovating and learning new technologies to be able to advise and
          help you grow quickly. I have experience with the following
          frameworks and technologies. MERN Stack, JavaScript, Typescript,
          HTML5, CSS3, Tailwind CSS, Bootstrap, Node.js, React Js & Next Js.
          Also, I have experience with behavior-driven development. So we are
          committed to quality work with honesty through hard work rather than
          money and quantity. So to grow your business or work with modernism
          Feel free to contact me.
        </p>
      </div>
    </section>
  );
};
