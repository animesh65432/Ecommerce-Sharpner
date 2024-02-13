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
    <>
      <div className="bg-black text-white h-20 ">
        <ul className="flex space-x-10 p-7 justify-between">
          <p>
            <Link to="/Home">Home</Link>
          </p>
          <p>
            <Link to="/Contact">Contact Us</Link>
          </p>
          <p>
            <Link to="/About">About</Link>
          </p>
          <p>
            <Link to="/">Product</Link>
          </p>
          <p>
            <Link to="/Cart">Cart{numberofitems}</Link>
          </p>
          <p></p>
          <li>
            {IsUserlogin && <button onClick={Onuserlogout}>log Out</button>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
