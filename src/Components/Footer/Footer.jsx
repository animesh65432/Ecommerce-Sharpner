import React from "react";
import { FacebookImages, Youtube, Instagram } from "../../assets/data";

const Footer = () => {
  return (
    <>
      <div className="bg-cyan-800 h-32 flex gap-40">
        <p className="text-3xl text-cyan-50">OUR SOCIAL MEDIA PLATFROM</p>
        <div>
          <img src={FacebookImages} className="h-10"></img>
        </div>
        <div>
          <img src={Youtube} className="h-10"></img>
        </div>
        <div>
          <img src={Instagram} className="h-10"></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
