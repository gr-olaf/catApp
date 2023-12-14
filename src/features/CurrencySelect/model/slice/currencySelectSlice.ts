import { CurrencySchema } from '@/entities/Currency';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  currency: CurrencySchema;
};

const initialState: InitialStateType = {
  currency: {
    id: '',
    name: '',
    min_size: '',
  },
};

const currencySelectSlice = createSlice({
  name: 'currencySelectSlice',
  initialState,
  reducers: {
    selectCurrency: (state, { payload }) => {
      state.currency = payload;
    },
  },
});

export const { reducer: currencySelectReducer } = currencySelectSlice;
export const { actions: currencySelectActions } = currencySelectSlice;
