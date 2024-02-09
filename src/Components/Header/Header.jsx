import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-black text-white h-20 ">
        <ul className="flex space-x-10 p-7 justify-between">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
