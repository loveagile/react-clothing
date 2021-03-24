import { CartActionTypes } from "./cart.types"

export const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: user
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
