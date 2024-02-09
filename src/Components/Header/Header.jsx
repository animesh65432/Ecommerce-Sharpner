import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-black text-white h-20 ">
        <ul className="flex space-x-10 p-7 justify-between">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li className="ml-auto rounded-md">
            <button className="bg-cyan-800 w-10 h-10 ">Cart</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
