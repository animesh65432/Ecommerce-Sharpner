import React, { createContext, useContext, useReducer } from "react";

const store = createContext();

const defaultstate = {
  items: [],
  amount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "add") {
    const index = state.items.findIndex(
      (obj) => obj.title === action.item.title
    );
    if (index !== -1) {
      const updatedItems = [...state.items];
      updatedItems[index] = {
        ...updatedItems[index],
        count: updatedItems[index].count + 1,
      };
      const money = updatedItems.reduce(
        (acc, cur) => acc + cur.price * cur.count,
        0
      );
      return { amount: parseFloat(money.toFixed(2)), items: updatedItems };
    } else {
      const money = state.items.reduce(
        (acc, cur) => acc + cur.price * cur.count,
        0
      );
      return {
        amount: parseFloat(money.toFixed(2)),
        items: [...state.items, { ...action.item, count: 1 }],
      };
    }
  } else if (action.type === "delete") {
    const updatedItems = state.items.filter(
      (obj) => obj.title !== action.item.title
    );
    const money = updatedItems.reduce(
      (acc, cur) => acc + cur.price * cur.count,
      0
    );
    return { amount: parseFloat(money.toFixed(2)), items: updatedItems };
  }

  return state;
};

const Storeprovider = (props) => {
  const [CartState, CartDispatch] = useReducer(CartReducer, defaultstate);

  const additem = (item) => {
    CartDispatch({ type: "add", item: item });
  };

  const deleteitem = (item) => {
    CartDispatch({ type: "delete", item: item });
  };

  return (
    <store.Provider value={{ CartState, additem, deleteitem }}>
      {props.children}
    </store.Provider>
  );
};

export function usecontextallthetime() {
  return useContext(store);
}

export default Storeprovider;
