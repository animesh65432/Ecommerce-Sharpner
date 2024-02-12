import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase";

const Log = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onchangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onchangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      console.log(response);
    } catch (error) {
      let errorMessage = error.message; // Accessing the error message
      alert(errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <form className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Please enter your email"
          onChange={onchangeUserEmail}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Please enter your password"
          onChange={onchangePassword}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        onClick={onSubmitHandler}
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isloading ? "Loading..." : "Log in"}
      </button>
    </form>
  );
};

export default Log;
