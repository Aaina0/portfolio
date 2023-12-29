"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillPart from "../Views/SkillPart";
import CSS from "../../assets/css.png";
import html5 from "../../assets/html5.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import sanity from "../../assets/Sanity.png";
import mongoDB from "../../assets/mongoDB.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import Next from "../../assets/Next.png";
import react from "../../assets/react.png";
import vs from "../../assets/vs.png";
const imagesForSkillPart = [
  html5.src,
  CSS.src,
  js.src,
  ts.src,
  react.src,
  Next.src,
  tailwind.src,
  bootstrap.src,
  sanity.src,
  mongoDB.src,
  express.src,
  node.src,
  vs.src,
];

const Skills = () => {
  return (
    <motion.div className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="top-5 uppercase absolute tracking-[20px] text-gray-200 text-2xl font-bold z-20">
        Skills
      </h3>

      <h3 className="absolute top-14 uppercase tracking-[3px] text-gray-200 text-sm z-30">
        Hover Over a Skill for Current Proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-52">
        <SkillPart images={[html5.src]} percentage={80} />
        <SkillPart images={[CSS.src]} percentage={80} />
        <SkillPart images={[js.src]} percentage={70} />
        <SkillPart images={[ts.src]} percentage={70} />
        <SkillPart images={[react.src]} percentage={65} />
        <SkillPart images={[Next.src]} percentage={65} />
        <SkillPart images={[tailwind.src]} percentage={80} />
        <SkillPart images={[bootstrap.src]} percentage={80} />
        <SkillPart images={[sanity.src]} percentage={60} />
        <SkillPart images={[mongoDB.src]} percentage={50} />
        <SkillPart images={[express.src]} percentage={50} />
        <SkillPart images={[node.src]} percentage={50} />
        <SkillPart images={[vs.src]} percentage={70} />
      </div>
    </motion.div>
  );
};

export default Skills;
