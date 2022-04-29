import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import cartSaga from './saga';
import { CartState } from './types';

export const initialState: CartState = {
  detailCart: { orderItems: [] },
  quantity: 1,

  addStatus: '',
  removeStatus: '',
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCurrentCart(state) {},

    setDetailCart(state, action) {
      state.detailCart.orderItems = action.payload;
    },

    setQuantity(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },

    addToCartRequest(state, action) {
      state.addStatus = '';
    },

    setAddStatus(state, action: PayloadAction<string>) {
      state.addStatus = action.payload;
    },

    removeFromCartRequest(state, action) {},

    setRemoveStatus(state, action: PayloadAction<string>) {
      state.removeStatus = action.payload;
    },
  },
});

export const { actions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartSaga });
  return { actions: slice.actions };
};
