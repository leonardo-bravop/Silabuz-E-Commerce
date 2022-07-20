import { ShoppingCartState } from "contexts/ShoppingCartContext"

export const getTotalFromCart = (state: ShoppingCartState) => {
    return state.CartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
}