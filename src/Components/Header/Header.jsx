import React from "react";
import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Link } from "react-router-dom";
import { auth } from "../../firbase";
import { signOut } from "firebase/auth";

const Header = () => {
  const { CartState, ISlogin, logout } = usecontextallthetime();

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
      <nav className="bg-black text-white h-20 ">
        <ul className="flex space-x-10 p-7 justify-between">
          <li>{ISlogin && <Link to="/">HOME</Link>}</li>
          <li>{ISlogin && <Link to="/About">ABOUT</Link>}</li>
          <li>{ISlogin && <Link to="/Product">STORE</Link>}</li>
          <li>{ISlogin && <Link to="/Contact">Contact Us</Link>}</li>
          <li>{ISlogin && <Link to="/Cart">Cart{numberofitems}</Link>}</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>{ISlogin && <button onClick={Onuserlogout}>log Out</button>}</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
