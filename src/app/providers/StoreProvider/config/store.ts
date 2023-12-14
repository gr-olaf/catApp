import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}
