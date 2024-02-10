import React from "react";
import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>STORE</li>
          <li>CONTACT US</li>
          <li>
            <Link to="/Cart">Cart</Link>
            {numberofitems}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
