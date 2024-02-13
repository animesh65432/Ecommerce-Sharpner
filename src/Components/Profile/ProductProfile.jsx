import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../../assets/data";
import { usecontextallthetime } from "../../Stroe/Storeprovider";

const ProductProfile = () => {
  const { title } = useParams();
  const { additem } = usecontextallthetime();
  const product = productsArr.find((p) => p.title === title);

  const OnClickAdd = (item) => {
    additem(item);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl h-3/5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="p-8">
          <p
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {product.name}
          </p>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <div className="mt-4">
            <span className="text-gray-600">Price: </span>
            <span className="text-gray-800 font-semibold">{product.price}</span>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => OnClickAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
