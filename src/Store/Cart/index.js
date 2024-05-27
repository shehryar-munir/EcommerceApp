import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import AddProductToCart from './AddProductToCart'
import UpdateProductQty from './UpdateProductQty'

const sliceInitialState = {
  cart: [],
}

export default buildSlice(
  'cart',
  [AddProductToCart, UpdateProductQty],
  sliceInitialState,
).reducer
