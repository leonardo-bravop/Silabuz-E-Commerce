import { ShoppingCartState } from "contexts/ShoppingCartContext"
import { CartItem } from "types/shoppingCart"

export const getQuantityFromState = (state: ShoppingCartState, productId: number) => {
    if (!state.CartItems.length) return 0
    return state.CartItems[
        state.CartItems.findIndex(
            (item: CartItem) => item.productId === productId
        )
    ].quantity
}