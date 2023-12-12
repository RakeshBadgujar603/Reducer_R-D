import { ADD_TO_CART } from "./constantes"

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        data: item
    }
}