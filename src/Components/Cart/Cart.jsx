import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Cartimages } from "../../assets/data";

const Cart = () => {
  const { deleteitem, CartState } = usecontextallthetime();

  const CartArray = CartState.items;
  const TotalAmount = CartState.amount;

  if (CartArray.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 h-3/5 font-bold text-center text-3xl">
        <p className="text-gray-600">Your cart is empty.</p>
        <img src={Cartimages}></img>
      </div>
    );
  }

  const deleteitemfromcart = (obj) => {
    deleteitem(obj);
  };

  const OnClickOrder = () => {
    alert("it will go to your house soon ");
  };

  return (
    <div className="h-3/5">
      {CartArray.map((obj) => (
        <div className="bg-white rounded-lg shadow-md mb-4 " key={obj.title}>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img
                src={obj.imageUrl}
                alt={obj.title}
                className="w-12 h-12 mr-4 rounded-md"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{obj.title}</h3>
                <p className="text-gray-600">Price: ${obj.price.toFixed(2)}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => deleteitemfromcart(obj)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <p className="text-lg font-semibold">
          Total: ${TotalAmount.toFixed(2)}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
          onClick={OnClickOrder}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
