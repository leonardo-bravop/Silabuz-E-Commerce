import React, { useContext, useReducer } from "react";
import { CartItem } from "types/shoppingCart";
import { ShoppingCartReducer } from "./ShoppingCartReducer";

export type ShoppingCartState = {
  id: number;
  userId: number;
  date: string;
  CartItems: CartItem[];
  total: number;
};

type ContextProps = {
  state: ShoppingCartState;
  addToCart: (payload: CartItem) => void;
  decreaseQuantity: (payload: CartItem) => void;
  remove: (payload: CartItem) => void;
};

const ShoppingCartContext = React.createContext<ContextProps | null>(null);

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) throw new Error("There is no cart provider");
  return context;
};

const storedShoppingCart = localStorage.getItem("shoppingCart");
const initialShoppingCart = storedShoppingCart
  ? JSON.parse(storedShoppingCart)
  : [];

type props = {
  children: React.ReactNode;
};

const initialState = {
  id: 1,
  userId: 0,
  date: "",
  CartItems: initialShoppingCart,
  total: 0,
};

export function ShoppingCartProvider({ children }: props) {
  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  const addToCart = (payload: CartItem) => {
    dispatch({ type: "ADD", payload });
  };

  const decreaseQuantity = (payload: CartItem) => {
    dispatch({ type: "DECREASE", payload });
  };

  const remove = (payload: CartItem) => {
    dispatch({ type: "REMOVE", payload });
  };

  const value: ContextProps = {
    state,
    addToCart,
    decreaseQuantity,
    remove,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
