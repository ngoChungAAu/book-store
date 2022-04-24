import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import globalSaga from './saga';
import { GlobalState, IProfile } from './types';

export const initialState: GlobalState = {
  user: null,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getUserProfileRequest(state) {},

    setUser(state, action: PayloadAction<IProfile | null>) {
      state.user = action.payload;
    },

    outUser(state) {
      localStorage.removeItem('access_token');
      state.user = null;
    },
  },
});

export const { actions } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};
