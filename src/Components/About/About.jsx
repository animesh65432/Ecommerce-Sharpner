import React from "react";
import { NormalImgeas } from "../../assets/data";

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          Welcome to our website! We are dedicated to...
        </p>
      </div>
      <div className="max-w-3xl mx-auto p-8">
        <img
          src={NormalImgeas}
          alt="background photo"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
