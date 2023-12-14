import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedCurrency = (state: StateSchema) =>
  state.currency?.currency;
