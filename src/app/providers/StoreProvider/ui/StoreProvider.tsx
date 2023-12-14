import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps extends PropsWithChildren {
  initialState?: StateSchema;
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
