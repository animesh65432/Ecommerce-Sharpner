import React, { useState } from "react";
import { productsArr } from "../../assets/data";

const Home = () => {
  const [curImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productsArr.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productsArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
        Welcome to Our Store!
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Explore our Products
      </p>

      <div className="relative max-w-lg mx-auto">
        <img
          src={productsArr[curImageIndex].imageUrl}
          alt="Product"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={goToPreviousImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full px-4 py-2 shadow-md hover:bg-gray-800 focus:outline-none"
        >
          Prev
        </button>
        <button
          onClick={goToNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full px-4 py-2 shadow-md hover:bg-gray-800 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
