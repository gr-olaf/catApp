import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';
import { rtkApi } from '@/shared/api/rtkApi';
import { currencySelectReducer } from '@/features/CurrencySelect';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    currency: currencySelectReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}
