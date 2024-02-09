import React from "react";
import { usecontextallthetime } from "../../Stroe/Storeprovider";

const Header = () => {
  const { CartState } = usecontextallthetime();

  const numberofitems = CartState.items.reduce(
    (acc, cur) => acc + cur.count,
    0
  );

  return (
    <>
      <nav className="bg-black text-white h-20 ">
        <ul className="flex space-x-10 p-7 justify-between">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>CART {numberofitems}</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
