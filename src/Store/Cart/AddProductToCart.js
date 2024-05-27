import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

import AddProductToCart from '@/Services/Cart/AddProductToCart'

export default {
  initialState: buildAsyncState('addProductToCart'),
  action: buildAsyncActions('cart/addProductToCart', AddProductToCart),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'addProductToCart.error',
      loadingKey: 'addProductToCart.loading',
    }),
    fulfilled: (state, { payload, type }) => {
      let currentCart = state.cart
      // check if the item is already in the cart
      const index = currentCart.findIndex(
        item => item.productID === payload.productID,
      )

      if (index !== -1) {
        // increase the quantity of the item
        currentCart[index].qty += 1
        state.cart = currentCart
      } else {
        state.cart = [...state.cart, payload]
      }
    },
  },
}
