import React from "react";
import { productsArr } from "../../assets/data";

const Product = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productsArr.map((obj) => (
        <div
          key={obj.title}
          className="border border-gray-300 rounded-lg p-4 shadow-md m-4"
        >
          <div className="flex justify-center">
            <img
              src={obj.imageUrl}
              className="h-48 w-48 object-contain"
              alt={obj.title}
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">{obj.title}</h2>
            <p className="text-gray-700 mt-2">{obj.description}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-rose-600">
                ${obj.price}
              </span>
              <button className="bg-rose-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-rose-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
