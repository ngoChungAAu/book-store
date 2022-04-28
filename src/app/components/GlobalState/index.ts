import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import globalSaga from './saga';
import { GlobalState, IProfile, ICategory, IProduct } from './types';

export const initialState: GlobalState = {
  user: null,
  loadingUpdateProfile: false,
  updateProfileStatus: false,

  listCategory: [],

  product: {
    list: [],
    category: '',
    total_item: 0,
    total_page: 0,

    page: 1,
    size: 5,

    detail: {
      title: '',
      longDescription: '',
      categoryId: 0,
      price: 0,
      author: '',
      currentNumber: 0,
      numberOfPage: 0,
      quantitySelled: 0,
      images: [{ link: '' }],
    },
  },

  errorMessage: '',
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

    updateProfileRequest(state, action) {
      state.updateProfileStatus = false;
      state.loadingUpdateProfile = false;
    },

    setUpdateStatus(state, action: PayloadAction<boolean>) {
      state.updateProfileStatus = action.payload;
    },

    setLoadingUpdateProfile(state, action: PayloadAction<boolean>) {
      state.loadingUpdateProfile = action.payload;
    },

    getCategoryListRequest(state, action) {},

    setCategoryData(
      state,
      action: PayloadAction<{
        data: ICategory[];
      }>,
    ) {
      state.listCategory = action.payload.data;
    },

    getProductListRequest(state, action) {},

    setProductData(
      state,
      action: PayloadAction<{
        data: IProduct[] | [];
        category: string;
        total_item: number;
        total_page: number;
      }>,
    ) {
      state.product.list = action.payload.data;
      state.product.category = action.payload.category;
      state.product.total_item = action.payload.total_item;
      state.product.total_page = action.payload.total_page;
    },

    getProductDetailRequest(state, action) {},

    setDetailProduct(
      state,
      action: PayloadAction<
        | IProduct
        | {
            title: '';
            longDescription: '';
            categoryId: 0;
            price: 0;
            author: '';
            currentNumber: 0;
            numberOfPage: 0;
            quantitySelled: 0;
            images: [{ link: '' }];
          }
      >,
    ) {
      state.product.detail = action.payload;
    },

    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};