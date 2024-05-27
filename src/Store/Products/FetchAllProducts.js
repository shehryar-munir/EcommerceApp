import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

import fetchAllProductsService from '@/Services/Products/FetchAllProducts'

export default {
  initialState: buildAsyncState('fetchAllProducts'),
  action: buildAsyncActions(
    'products/fetchAllProducts',
    fetchAllProductsService,
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'fetchAllProducts.error',
      loadingKey: 'fetchAllProducts.loading',
    }),
    fulfilled: (state, { payload, type }) => {
      state.products = payload
    },
  },
}
