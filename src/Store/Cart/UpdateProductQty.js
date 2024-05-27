import {
  buildAsyncActions,
  buildAsyncState,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'

import UpdateProductQty from '@/Services/Cart/UpdateProductQty'

export default {
  initialState: buildAsyncState('updateProductQty'),
  action: buildAsyncActions('cart/updateProductQty', UpdateProductQty),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'updateProductQty.error',
      loadingKey: 'updateProductQty.loading',
    }),
    fulfilled: (state, { payload, type }) => {
      let currentCart = state.cart
      // check if the item is already in the cart
      const index = currentCart.findIndex(
        item => item.productID === payload.productId,
      )

      if (index !== -1) {
        // increase the quantity of the item
        currentCart[index].qty += payload.qty
        state.cart = currentCart
      } else {
        state.cart = [...state.cart, payload]
      }
    },
  },
}
