"use client";

import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.email);
    const body = encodeURIComponent(
      `Hi, my name is ${formData.firstName} ${formData.lastName}. ${formData.message}`
    );
    const mailtoLink = `mailto:najafayina@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="top-5 uppercase tracking-[20px] text-gray-200 text-2xl font-bold z-20 mb-6">
        Contact Me
      </h3>
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 space-y-6">
        <h4 className="text-4xl font-semibold text-center text-gray-200">
          I Have Got Just What You Need, // After
          <span className="text-[#f5576c] font-semibold">Let&apos;s Talk</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center font-semibold">
          <BsTelephoneFill className="text-[#f5576c]" />
          <p className="text-gray-200 text-2xl">+92 349 7457082</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <IoLocation className="text-[#f5576c]" />
          <p className="text-gray-200 text-2xl">Lahore, Pakistan</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MdEmail className="text-[#f5576c]" />
          <p className="text-gray-200 text-2xl">najafayina@gmail.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full md:w-2/3 lg:w-1/2 mt-6"
      >
        <div className="flex flex-col space-y-2">
          <input
            {...register("firstName")}
            className="ContactInput"
            type="text"
            placeholder="First Name"
          />
          <input
            {...register("lastName")}
            className="ContactInput"
            type="text"
            placeholder="Last Name"
          />
          <input
            {...register("email")}
            className="ContactInput"
            type="text"
            placeholder="Email"
          />
          <textarea
            {...register("message")}
            className="ContactInput"
            placeholder="Message"
          />
        </div>
        <button className="bg-[#f5576c] text-white px-4 py-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
