"use client";

import React from "react";
import website2 from "@/assets/website2.png";
import website from "@/assets/website.png";
import { motion } from "framer-motion";

interface Props {}

export const Projects = (props: Props) => {
  const projects = [
    {
      id: 1,
      image: website2,
      title: "Panaverse Dao",
      description:
        "Contributed to the digital transformation of an institute by creating a cutting-edge website using Next Js, while employing Tailwind CSS for streamlined design and maintenance, showcasing technological innovation and attention to detail.",
    },
    {
      id: 2,
      image: website,
      title: "Mataverse",
      description:
        "Implemented advanced front-end functionalities using React.js, enhancing the overall user experience, and employed Tailwind CSS for rapid and scalable styling on a high-impact educational project.",
    },
    // Add more projects as needed
  ];
  return (
    <div className="min-h-screen flex flex-col scrollbar-thin relative text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="top-5 uppercase absolute tracking-[20px] text-gray-200 text-2xl font-bold z-20">
        PROJECTS
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-min">
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image.src}
              alt={`Project: ${project.title}`}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl text-gray-200 font-semibold text-center">
                {project.title}
              </h4>
              <p className="text-lg text-gray-200 text-center">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-pink-300 opacity-40 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};
