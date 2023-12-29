"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


type Props = {}

function Header({}: Props) {
  return (
    <section>
      <div className="flex justify-between cursor-pointer max-w-7xl mx-auto p-5 sticky top-0 z-20 xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex-row flex items-center"
        >
          <SocialIcon
          url="https://Linkedin.com/aina-najaf-developer"
            style={{ height: 28, width: 28, marginRight: 10 }}
            bgColor="#fbc2eb"
          />
        
          <SocialIcon
            url="https://github.com/Aaina0"
            style={{ height: 28, width: 28, marginRight: 10 }}
            bgColor="#453a94"
          />
          <SocialIcon
            url="https://behance.com/ayinanajaf1"
            style={{ height: 28, width: 28 }}
            bgColor="#a6c0fe"
          />
        </motion.div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex"
        >
          <SocialIcon
            url="https://email.com/najafayina@gmail.com"
            style={{ height: 28, width: 28 }}
            bgColor="#f5576c"
          />
          <Link href="#Contact">
            <p className="uppercase hidden md:inline-flex text-sm font-extrabold m-1 text-gray-200">
              Get In Touch
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Header