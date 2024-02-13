import React from "react";
import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Link } from "react-router-dom";
import { auth } from "../../firbase";
import { signOut } from "firebase/auth";

const Header = () => {
  const { CartState, logout, IsUserlogin } = usecontextallthetime();

  const numberofitems = CartState.items.reduce(
    (acc, cur) => acc + cur.count,
    0
  );

  const Onuserlogout = async () => {
    try {
      let response = await signOut(auth);
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-500 text-white h-20">
      <ul className="flex items-center justify-between px-7">
        <li>
          <Link
            to="/Home"
            className="text-white hover:text-blue-600 font-bold text-2xl pt-6"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-white hover:text-blue-600 font-bold text-2xl"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-white hover:text-blue-600 font-bold text-2xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-white hover:text-blue-600 font-bold text-2xl"
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/Cart"
            className="text-white hover:text-blue-600 font-bold text-2xl"
          >
            Cart {numberofitems}
          </Link>
        </li>
        <li>
          {IsUserlogin && (
            <button
              onClick={Onuserlogout}
              className="text-white hover:text-blue-600 focus:outline-none font-bold text-2xl"
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
