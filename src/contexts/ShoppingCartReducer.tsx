import { CartItem } from "types/shoppingCart";
import { ShoppingCartState } from "./ShoppingCartContext";

type actionType = {
  type: string;
  payload: CartItem;
};

const setLocalShoppingCart = (cartItems: CartItem[]) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
};

export const ShoppingCartReducer = (
  state: ShoppingCartState,
  action: actionType
) => {
  switch (action.type) {
    case "ADD":
      if (
        !state.CartItems.find(
          (item: CartItem) => item.productId === action.payload.productId
        )
      ) {
        state.CartItems.push({
          ...action.payload,
        });
      } else {
        state.CartItems[
          state.CartItems.findIndex(
            (item) => item.productId === action.payload.productId
          )
        ].quantity++;
      }
      setLocalShoppingCart(state.CartItems);
      return { ...state };
    case "DECREASE":
      state.CartItems[
        state.CartItems.findIndex(
          (item) => item.productId === action.payload.productId
        )
      ].quantity--;
      setLocalShoppingCart(state.CartItems);
      return {
        ...state,
      };
    case "REMOVE":
      const filteredItems = state.CartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.CartItems = filteredItems;
      setLocalShoppingCart(state.CartItems);
      return { ...state };
    default:
      return state;
  }
};
