import { StateSchema } from '@/app/providers/StoreProvider';

export const getCurrencyName = (state: StateSchema) =>
  state.currency.currency.name;
