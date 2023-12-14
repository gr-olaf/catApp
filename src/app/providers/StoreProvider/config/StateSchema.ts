import { CurrencySelectSchem } from '@/features/CurrencySelect';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  currency: CurrencySelectSchem;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
