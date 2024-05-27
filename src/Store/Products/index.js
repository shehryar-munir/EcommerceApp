import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchAllProducts from './FetchAllProducts'

const sliceInitialState = {
  products: [],
}

export default buildSlice('products', [FetchAllProducts], sliceInitialState)
  .reducer
